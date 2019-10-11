private string GetStringFromStream(Stream stream)
{
	// Create a stream reader.
	using (StreamReader reader = new StreamReader(stream)) {
		// Just read to the end.
		return reader.ReadToEnd();
	}
}