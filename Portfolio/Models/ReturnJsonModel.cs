namespace Portfolio.Models
{
	public class ReturnJsonModel<TV>
	{
		public ReturnJsonModel()
		{
		}

		public ReturnJsonModel(TV value)
		{
			this.WasSuccessful = true;
			this.Message = null;
			this.Value = value;
		}

		public ReturnJsonModel(string message)
		{
			this.WasSuccessful = false;
			this.Message = message;
			this.Value = default(TV);
		}

		public bool WasSuccessful { get; set; }

		public string Message { get; set; }

		public TV Value { get; set; }
	}
}