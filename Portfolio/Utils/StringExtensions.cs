using System.Text;

namespace Portfolio.Utils
{
	public static class StringExtensions
	{
		public static long GetSize(this string input)
		{
			return Encoding.Unicode.GetByteCount(input);
		}
	}
}