internal static string ExceptionToString(Exception exception)
		{
			StringBuilder stringBuilder = new StringBuilder();
			string text = string.Empty;
			while (exception != null)
			{
				stringBuilder.AppendLine(text + exception.GetType().ToString());
				string text2 = exception.Message;
				if (string.Compare(text2, "Attempted to read or write protected memory. This is often an indication that other memory is corrupt.") == 0)
				{
					text2 = "Invalid pointer";
				}
				stringBuilder.AppendLine(text + text2);
				if (!string.IsNullOrEmpty(exception.StackTrace))
				{
					stringBuilder.AppendLine(text + "Stack Trace:");
					stringBuilder.AppendLine(exception.StackTrace.Replace("   ", "   " + text));
				}
				stringBuilder.AppendLine(string.Empty);
				text += "    ";
				exception = exception.InnerException;
			}
			return stringBuilder.ToString();
		}