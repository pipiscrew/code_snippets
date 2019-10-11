        [DllImport("mscoree.dll")]
        internal static extern bool StrongNameSignatureVerificationEx(
                [MarshalAs(UnmanagedType.LPWStr)]string wszFilePath,
                bool fForceVerification,
                ref bool pfWasVerified);
                

                bool res=false;
                bool res2 = false;

                res2 = StrongNameSignatureVerificationEx(AppDomain.CurrentDomain.BaseDirectory + "\\" + AppDomain.CurrentDomain.FriendlyName, false, ref res);

                if (!res || !res2)
                    THROW();
                else
                {
                    Counter += 1;

                    Save();
                }
                
//VB
    <DllImport("mscoree.dll", CharSet:=CharSet.Unicode)> _
    Friend Shared Function StrongNameSignatureVerificationEx(ByVal string_0 As String, ByVal bool_0 As Boolean, ByRef bool_1 As Boolean) As Boolean
    End Function
    
        Dim flag As Boolean = False
        Dim flag2 As Boolean = Class35.StrongNameSignatureVerificationEx(Class37.string_0, True, flag)
        If (flag AndAlso flag2) Then
            Environment.Exit(0)
        End If