using Portfolio.Interfaces;

namespace Portfolio.Models.Types
{
    public class StringItem : IComparisonValue
    {

        public StringItem()
        {
        }

        public StringItem(string value)
        {
            Value = value;
        }
        
        public string Value { get; set; }
    }
}