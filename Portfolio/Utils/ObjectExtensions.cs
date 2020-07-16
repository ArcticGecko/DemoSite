using System.IO;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace Portfolio.Utils
{
	public static class ObjectExtensions
	{
		public static string SerializeAsJsonString<T>(this T input)
		{
			JsonSerializer serializer = new JsonSerializer();
			TextWriter textWriter = new StringWriter();
			JsonWriter jsonWriter = new JsonTextWriter(textWriter);
			serializer.Serialize(jsonWriter, input);
			return textWriter.ToString();
		}

		
	}
}