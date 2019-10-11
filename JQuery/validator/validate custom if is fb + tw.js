//http://stackoverflow.com/questions/9171301/validating-facebook-and-twitter-url-using-jquery

function validate_url(url)
{
  if (/^(https?:\/\/)?((w{3}\.)?)twitter\.com\/(#!\/)?[a-z0-9_]+$/i.test(url))
     return 'twitter';    

 if (/^(https?:\/\/)?((w{3}\.)?)facebook.com\/.*/i.test(url))
     return 'facebook';

 return 'unknown';
}
