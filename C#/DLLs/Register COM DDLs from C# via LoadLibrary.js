//http://www.leberhall.com/2009/07/i-have-need-to-register-some-com-dlls.html
//sometimes when fail to register a DLL/OCX popup a message box, disable it with /SetErrorMode\
//http://jongampark.wordpress.com/2010/02/10/loadlibrary-cant-load-a-dll-and-have-no-clue-why/

 using System;
 using System.Runtime.InteropServices;
  
 public class RegisterDll
 {
     unsafe internal delegate UInt32 DllRegisterServer();
     
     public static void Main(string[] args)
     {
          foreach (string file in args)
          {
              Console.WriteLine("Registering {0}", file);
              RegisterCOMDll(file);
          }
   
          Console.WriteLine("Done!");
      }
   
      private static void RegisterCOMDll(string file)
      {
          IntPtr library = LoadLibraryEx(file, IntPtr.Zero, 0);
          if (library == IntPtr.Zero)
          {
              string msg = "Unable to load '" + file + "' error is " + Marshal.GetLastWin32Error().ToString();
              throw new ApplicationException(msg);
          }
   
          IntPtr proc = GetProcAddress(library, "DllRegisterServer");
          if (proc == IntPtr.Zero)
          {
              int err = Marshal.GetLastWin32Error();
              string msg = "Unable to load 'DllRegisterServer' from '" + file + "' error is " + err.ToString();
              throw new ApplicationException(msg);
          }
   
          DllRegisterServer drs = (DllRegisterServer)Marshal.GetDelegateForFunctionPointer(proc, typeof(DllRegisterServer));
          UInt32 result = drs();
          if (result != 0)
          {
              string msg = "Error " + result.ToString() + " returned from DllRegisterServer in " + file;
              throw new ApplicationException(msg);
          }
   
          FreeLibrary(library);
      }
   
      [Flags]
      public enum LoadLibraryFlags : uint
      {
          DONT_RESOLVE_DLL_REFERENCES = 0x00000001,
          LOAD_IGNORE_CODE_AUTHZ_LEVEL = 0x00000010,
          LOAD_LIBRARY_AS_DATAFILE = 0x00000002,
          LOAD_WITH_ALTERED_SEARCH_PATH = 0x00000008,
      }
   
      [DllImport("kernel32.dll", EntryPoint = "FreeLibrary", SetLastError = true)]
      public static extern bool FreeLibrary(IntPtr hModule);
   
      [DllImport("kernel32.dll", EntryPoint = "LoadLibraryExW", CharSet = CharSet.Unicode, SetLastError = true)]
      public static extern IntPtr LoadLibraryEx(
          [MarshalAs(UnmanagedType.LPWStr)] string lpFileName,
          IntPtr hFile,
          [MarshalAs(UnmanagedType.U4)] LoadLibraryFlags dwFlags);
   
      [DllImport("kernel32.dll", CharSet = CharSet.Ansi, EntryPoint = "GetProcAddress", ExactSpelling = true, SetLastError = true)]
      public static extern IntPtr GetProcAddress(IntPtr hModule, string lpProcName);
  }