//source : http://stackoverflow.com/a/5995418

v2 = v1 ?? default(int);

//Also, as of .NET 4.0, Nullable has a “GetValueOrDefault()” method, which is a null-safe getter that basically performs the null-coalescing shown above, so this works too:

v2 = v1.GetValueOrDefault();

//traditional
if(v1.HasValue)
   v2=v1.Value