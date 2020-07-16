using System.Configuration;
using Portfolio;
namespace Portfolio.Models
{
    public class BaseViewModel
    {
        public BaseViewModel()
        {
            this.EmailAddress = Startup.AppSettings.EmailAddress;
        }

        public string EmailAddress { get; }
    }
}