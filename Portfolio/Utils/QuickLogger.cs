using System;
using NLog;

namespace Portfolio.Utils
{
	public static class QuickLogger
	{
		private static Logger _logger;

		static QuickLogger()
		{
			LogFactory logFactory = new LogFactory();
			QuickLogger._logger = logFactory.GetLogger("default");
		}

		/// <summary>
		/// Logs a message with the specified log level.
		/// </summary>
		/// <param name="logLevel">The level of the message.</param>
		/// <param name="message">The message to log.</param>
		public static void Log(LogLevel logLevel, string message)
		{
			QuickLogger._logger.Log(logLevel, message);
		}
		
		/// <summary>
		/// Logs an exception with the specified log level.
		/// </summary>
		/// <param name="logLevel">The level of the message.</param>
		/// <param name="exception">The exception to log.</param>
		public static void Log(LogLevel logLevel, Exception exception)
		{
			QuickLogger._logger.Log(logLevel, $"{exception.Message} @ {exception.StackTrace}");
		}
	}
}