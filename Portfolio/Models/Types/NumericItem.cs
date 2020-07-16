using Portfolio.Exceptions;
using Portfolio.Interfaces;

namespace Portfolio.Models.Types
{
    public class NumericItem : IComparisonValue
    {
        private string _value;

        public string Value
        {
            get => this._value;
            set
            {
                // Check if the input is a valid number by parsing it as a double.
                if (double.TryParse(value, out double parsedValue))
                {
                    this._value = value;
                }
                else
                {
                    throw new InvalidInputException("A valid numeric value is required.");
                }
            }
        }
    }
}