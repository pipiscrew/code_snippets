//https://stackoverflow.com/a/36936933/1320686

static readonly Regex _base64RegexPattern = new Regex(BASE64_REGEX_STRING, RegexOptions.Compiled);

private const String BASE64_REGEX_STRING = @"^[a-zA-Z0-9\+/]*={0,3}$";

private static bool IsBase64(this String base64String)
        {
            var rs = (!string.IsNullOrEmpty(base64String) && !string.IsNullOrWhiteSpace(base64String) && base64String.Length != 0 && base64String.Length % 4 == 0 && !base64String.Contains(" ") && !base64String.Contains("\t") && !base64String.Contains("\r") && !base64String.Contains("\n")) && (base64String.Length % 4 == 0 && _base64RegexPattern.Match(base64String, 0).Success);
            return rs;
        }