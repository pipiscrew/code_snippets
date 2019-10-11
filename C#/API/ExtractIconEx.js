	public static class Shell32 {
		[DllImport("shell32")]
		public static extern int ExtractIconEx(string sFile, int iIndex, out IntPtr piLargeVersion, out IntPtr piSmallVersion, int amountIcons);
	}
	
		public static Icon ExtractAssociatedIcon(this Icon icon, string location) {
			IntPtr large;
			IntPtr small;
			Shell32.ExtractIconEx(location, 0, out large, out small, 1);
			Icon returnIcon = Icon.FromHandle(small);
			if (!IntPtr.Zero.Equals(small)){
				User32.DestroyIcon(small);
			}
			if (!IntPtr.Zero.Equals(large)){
				User32.DestroyIcon(large);
			}
			return returnIcon;
		}