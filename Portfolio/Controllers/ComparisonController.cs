using System;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using NLog;
using Portfolio.Exceptions;
using Portfolio.Interfaces;
using Portfolio.Models;
using Portfolio.Models.Components;
using Portfolio.Models.Types;
using Portfolio.Utils;

namespace Portfolio.Controllers
{
	public class ComparisonController : Controller
	{
		private const string SessionCookieName = "ComparisonSession";

		private static MemoryCache _sessionCache;

		private Guid _sessionId;

		private ComparisonSession _session;

		static ComparisonController()
		{
			MemoryCacheOptions memoryCacheOptions = new MemoryCacheOptions();
			memoryCacheOptions.SizeLimit = Startup.AppSettings.CacheSize;
			// memoryCacheOptions.
			ComparisonController._sessionCache = new MemoryCache(memoryCacheOptions);
		}

		public ComparisonController()
		{
		}

		// GET
		public IActionResult Index()
		{
			this.GetSession();
			return View(new ComparisonViewModel(this._session));
		}

		[HttpPost]
		public IActionResult AddRow(string name, string type)
		{
			ReturnJsonModel<byte> output;
			try
			{
				this.GetSession();
				if (!Enum.TryParse(type, out ComparisonValueType parsedType))
				{
					throw new InvalidInputException("A valid row type is required.");
				}

				byte rowId = this._session.AddRow(name, parsedType);
				output = new ReturnJsonModel<byte>(rowId);
			}
			catch (Exception e)
			{
				this.HandleError(e, out output);
			}

			return new JsonResult(output);
		}

		[HttpPost]
		public IActionResult RemoveRow(byte rowId)
		{
			ReturnJsonModel<byte> output;
			try
			{
				this.GetSession();
				this._session.RemoveRow(rowId);
				output = new ReturnJsonModel<byte>(rowId);
			}
			catch (Exception e)
			{
				this.HandleError(e, out output);
			}

			return new JsonResult(output);
		}

		[HttpPost]
		public IActionResult AddItem()
		{
			ReturnJsonModel<byte> output;
			try
			{
				this.GetSession();
				byte itemId = this._session.AddItem();
				output = new ReturnJsonModel<byte>(itemId);
			}
			catch (Exception e)
			{
				this.HandleError(e, out output);
			}

			return new JsonResult(output);
		}

		[HttpPost]
		public IActionResult RemoveItem(byte itemId)
		{
			ReturnJsonModel<byte> output;
			try
			{
				this.GetSession();
				this._session.RemoveItem(itemId);
				output = new ReturnJsonModel<byte>(itemId);
			}
			catch (Exception e)
			{
				this.HandleError(e, out output);
			}

			return new JsonResult(output);
		}

		[HttpPost]
		public IActionResult SetValue(byte itemId, byte rowId, string value)
		{
			ReturnJsonModel<byte> output;
			try
			{
				this.GetSession();
				ComparisonValueType valueType = this._session.Rows[rowId].Item2;
				IComparisonValue parsedValue = valueType.GetInstance();
				parsedValue.Value = value;
				this._session.SetValue(itemId, rowId, parsedValue);
				output = new ReturnJsonModel<byte>()
				{
					WasSuccessful = true
				};
			}
			catch (Exception e)
			{
				this.HandleError(e, out output);
			}

			return new JsonResult(output);
		}

		public IActionResult ClearSession()
		{
			ReturnJsonModel<byte> output;
			try
			{
				this.GetSession();
				this.CreateSession();
				output = new ReturnJsonModel<byte>()
				{
					WasSuccessful = true
				};
			}
			catch (Exception e)
			{
				this.HandleError(e, out output);
			}

			return new JsonResult(output);
		}

		private void HandleError<TV>(Exception e, out ReturnJsonModel<TV> output)
		{
			if (e is InvalidInputException)
			{
				string returnMessage = ((InvalidInputException) e).EndUserMessage;
				output = new ReturnJsonModel<TV>(returnMessage);
			}
			else
			{
				QuickLogger.Log(LogLevel.Error, e);
				output = new ReturnJsonModel<TV>(Program.GenericErrorMessage);
			}
		}

		private void GetSession()
		{
			if (!this.HttpContext.Request.Cookies.TryGetValue(ComparisonController.SessionCookieName,
					out string stringSessionId))
				// If the cookie was not found...
			{
				// Then set the session id and cookie.
				this.SetSessionCookie();
			}
			// If it could be found, then try to parse the value.
			else
			{
				if (!Guid.TryParse(stringSessionId, out this._sessionId))
					// If it could not be parsed, then set a new session id and cookie.
				{
					this.SetSessionCookie();
				}
			}

			this._session = ComparisonController._sessionCache.Get<ComparisonSession>(this._sessionId);
			if (this._session == null)
				// If no session was found for a cookie, the create one.
			{
				this.CreateSession();
			}
		}

		private void CreateSession()
		{
			ComparisonSession session = new ComparisonSession();
			this._session = session;
			using (ICacheEntry cacheEntry = ComparisonController._sessionCache.CreateEntry(this._sessionId))
			{
				cacheEntry.Value = session;
				cacheEntry.SlidingExpiration = new TimeSpan(1, 0, 0);
				cacheEntry.Size = session.Size;
			}
		}

		private void SetSessionCookie()
		{
			Guid sessionId = Guid.NewGuid();
			CookieOptions cookieOptions = new CookieOptions()
			{
				IsEssential = true
			};
			this.HttpContext.Response.Cookies.Append(ComparisonController.SessionCookieName, sessionId.ToString(),
				cookieOptions);
			this._sessionId = sessionId;
		}
	}
}