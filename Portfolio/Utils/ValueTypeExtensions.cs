using Microsoft.AspNetCore.Routing.Matching;
using Portfolio.Interfaces;
using Portfolio.Models.Components;
using Portfolio.Models.Types;

namespace Portfolio.Utils
{
	public static class ValueTypeExtensions
	{
		public static IComparisonValue GetInstance(this ComparisonValueType input)
		{
			switch (input)
			{
				case ComparisonValueType.Numeric:
					return new NumericItem();
				default:
					return new StringItem();
			}
		}
	}
}