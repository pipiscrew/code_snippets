string[] data = (string[])e.Data.GetData(DataFormats.FileDrop);

data = data.Where(x => Path.GetExtension(x).ToLower() == ".mp3").ToArray();