string[] directories = phone.GetDirectories("/",phone.currentBundleID);

string[] tmp;
tmp = new string[directories.Length];

directories.CopyTo(tmp, 0);