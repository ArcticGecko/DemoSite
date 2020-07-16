using Portfolio.Models.Components;

namespace Portfolio.Models
{
    public class ComparisonViewModel : BaseViewModel
    {
        public ComparisonViewModel( ComparisonSession session)
            : base()
        {
            this.Session = session;
        }

        public ComparisonSession Session { get; set; }
        
    }
}