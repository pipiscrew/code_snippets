		/// <summary>
		///    Checks if a <see cref="string" /> is <see langword="null"
		///    /> or contains only whitespace characters.
		/// </summary>
		/// <param name="value">
		///    A <see cref="string" /> object to check.
		/// </param>
		/// <returns>
		///    <see langword="true" /> if the string is <see
		///    langword="null" /> or contains only whitespace
		///    characters. Otherwise <see langword="false" />.
		/// </returns>
		private static bool IsNullOrLikeEmpty (string value)
		{
			return value == null || value.Trim ().Length == 0;
		}