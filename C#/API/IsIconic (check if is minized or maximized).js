//http://msdn.microsoft.com/en-us/library/windows/desktop/ms633527(v=vs.85).aspx

        [DllImport("user32.dll")]
        static extern int IsIconic(IntPtr hWnd);
        
        
ex.
                // Restore window if minimised. Do not restore if already in
                // normal or maximised window state, since we don't want to
                // change the current state of the window.
                if (IsIconic(hWnd) != 0)
                {
                    ShowWindow(hWnd, 9);
                }

                // Set foreground window.
                SetForegroundWindow(hWnd);