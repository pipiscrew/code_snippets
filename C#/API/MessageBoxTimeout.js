//http://snipplr.com/view/69236/

class MessageBoxTimer
    {
        [DllImport("user32.dll", SetLastError = true)]
        static extern int MessageBoxTimeout(IntPtr hwnd, String text, String title, uint type, Int16 wLanguageId, Int32 milliseconds);
 
        public enum MessageBoxReturnStatus
        {
            OK = 1,
            Cancel = 2,
            Abort = 3,
            Retry = 4,
            Ignore = 5,
            Yes = 6,
            No = 7,
            TryAgain = 10,
            Continue = 11
        }
 
        public enum MessageBoxType
        {
            OK = 0,
            OK_Cancel = 1,
            Abort_Retry_Ignore = 2,
            Yes_No_Cancel = 3,
            Yes_No = 4,
            Retry_Cancel = 5,
            Cancel_TryAgain_Continue = 6
        }
 
        public static MessageBoxReturnStatus Show(string title, string text, MessageBoxType type, int milliseconds)
        {
            int returnValue = MessageBoxTimeout(IntPtr.Zero, text, title, Convert.ToUInt32(type), 1, 3000);
 
            return (MessageBoxReturnStatus)returnValue;
        }
    }