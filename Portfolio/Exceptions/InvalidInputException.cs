using System;

namespace Portfolio.Exceptions
{
    public class InvalidInputException : Exception
    {

        public InvalidInputException(string endUserMessage)
        {
            this.EndUserMessage = endUserMessage;
        }
        
        public string EndUserMessage { get; }
    }
}