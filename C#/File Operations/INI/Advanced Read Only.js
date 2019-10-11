#use of 
			//	Sets the INI filename and location to be used.
			//	remember to use a double slash "\\" instead of a single for folder levels.
			IniFileName INI = new INI.IniFileName("C:\\test.ini");


			// Use the Try comman to gather the information, if an error occurs then throw an exception.
			// and display the error.
			try 
			{
				// set the SectionHeader into an Dynamic Singlelevel Array.
				// the Information is gathered from the GetSectionNames function INI namespace of the ReadINI Class.
				string [] SectionHeader = INI.GetSectionNames();
								
				// Checks to see if the SectionHeader has returned null.
				if (SectionHeader != null)
				{
				// Returns a list EntryKey's for each of the SectionHeader(s).
					foreach (string  SecHead in SectionHeader)
					{
						// Write the SectionHeader to the display.
						Console.WriteLine(SecHead);
				                    
						// Sets the Entry Dynamic Array for the each of the EntryKeys within the Section Header.
						// If you already know the SectionHeader and just need to list the Entry's
						// then enter the name instead of the SecHead in the GetEntrNames function.
						// ie.  INI.GetEntryNames("TestSecHead")
						string [] Entry = INI.GetEntryNames(SecHead);
						// Checks to see if there's an Entry under the SectionHeader and the Entry has not returned a null
						if (Entry != null)
						{
							// Enumerates a list of Keys For each of the Entry.
							foreach (string EntName in Entry)
							{
								// writes to display the value for the Entry key.
								// If you already know the SectionHeader and the Entry Key values then, replace all the code
								// after the INIFileName line, with the following
								// Console.WriteLine(" {0} = {1}","TestKey",INI.GetEntryValue("TestSecHead","TestKey"));
								// this will display the Value for the Entry key under the given SectionHeader.
								Console.WriteLine(" {0} = {1}",EntName,INI.GetEntryValue(SecHead,EntName));
							}
						}
				
					}
				}
			}
			// If an error if thrown, catch the exception error
			catch (Exception ex)
			{
				// Write the exception error to the display.
				Console.WriteLine("Error:  "+ ex);
			}
			// Waits for a "Enter" key to be used. I use this like a pause button.
			Console.ReadLine();
			
#class
using System;
using System.Text;
using System.Runtime.InteropServices;


namespace INI
{
	// Set the IniFileName class within the INI Namespace.
	public class IniFileName
	{
		//	Imports the Win32 Function "GetPrivateProfileString" from the "Kernel32" class.
		//	I use 3 methods to gather the information. All have the same name as defind by the Win32 Function "GetPrivateProfileString"
		//
		//	First Method, Gathers the Value, as the SectionHeader and EntryKey are know.
		//
		//	Second Method, Gathers a list of EntryKey for the known SectionHeader 
		//
		//	Third Method, Gathers a list of SectionHeaders.
		

		// First Method
		[DllImport ("kernel32")]
		static extern int GetPrivateProfileString (string Section, string Key, string Value, StringBuilder Result, int Size, string FileName);

		// Second Method
		[DllImport ("kernel32")]
		static extern int GetPrivateProfileString (string Section, int Key, string Value, [MarshalAs (UnmanagedType.LPArray)] byte[] Result, int Size, string FileName);

		// Third Method
		[DllImport ("kernel32")]
		static extern int GetPrivateProfileString (int Section, string Key, string Value, [MarshalAs (UnmanagedType.LPArray)] byte[] Result, int Size, string FileName);

		// Set the IniFileName passed from the Main Application.
		public string path;
		public IniFileName(string INIPath)
		{
			path = INIPath;
		}

		// The Function called to obtain the SectionHeaders, and returns them in an Dynamic Array.
		public string[] GetSectionNames()
		{
			//	Sets the maxsize buffer to 500, if the more is required then doubles the size each time.
			for (int maxsize = 500; true; maxsize*=2)
			{
				//	Obtains the information in bytes and stores them in the maxsize buffer (Bytes array)
				byte[] bytes = new byte[maxsize];
                int size = GetPrivateProfileString(0,"","",bytes,maxsize,path);
				
				// Check the information obtained is not bigger than the allocated maxsize buffer - 2 bytes.
				// if it is, then skip over the next section so that the maxsize buffer can be doubled.
				if (size < maxsize -2)
				{
					// Converts the bytes value into an ASCII char. This is one long string.
					string Selected = Encoding.ASCII.GetString(bytes,0,size - (size >0 ? 1:0));
					// Splits the Long string into an array based on the "\0" or null (Newline) value and returns the value(s) in an array
					return Selected.Split(new char[] {'\0'});
				}
			}
		}
		// The Function called to obtain the EntryKey's from the given SectionHeader string passed and returns them in an Dynamic Array
		public string[] GetEntryNames(string section)
		{
			//	Sets the maxsize buffer to 500, if the more is required then doubles the size each time. 
			for (int maxsize = 500; true; maxsize*=2)
			{
				//	Obtains the EntryKey information in bytes and stores them in the maxsize buffer (Bytes array).
				//	Note that the SectionHeader value has been passed.
				byte[] bytes = new byte[maxsize];
				int size = GetPrivateProfileString(section,0,"",bytes,maxsize,path);

				// Check the information obtained is not bigger than the allocated maxsize buffer - 2 bytes.
				// if it is, then skip over the next section so that the maxsize buffer can be doubled.
				if (size < maxsize -2)
				{
					// Converts the bytes value into an ASCII char. This is one long string.
					string entries = Encoding.ASCII.GetString(bytes,0,size - (size >0 ? 1:0));
					// Splits the Long string into an array based on the "\0" or null (Newline) value and returns the value(s) in an array
					return entries.Split(new char[] {'\0'});
				}
			}
		}
		
		// The Function called to obtain the EntryKey Value from the given SectionHeader and EntryKey string passed, then returned
		public object GetEntryValue(string section, string entry)
		{
			//	Sets the maxsize buffer to 250, if the more is required then doubles the size each time. 
			for (int maxsize = 250; true;maxsize *=2)
			{
				//	Obtains the EntryValue information and uses the StringBuilder Function to and stores them in the maxsize buffers (result).
				//	Note that the SectionHeader and EntryKey values has been passed.
				StringBuilder result = new StringBuilder(maxsize);
				int size = GetPrivateProfileString(section,entry,"", result,maxsize,path);
				if (size < maxsize -1)
				{
					// Returns the value gathered from the EntryKey
					return result.ToString();
				}
			}
		}
	}
}
