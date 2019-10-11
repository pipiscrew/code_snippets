'http://www.gamedeception.net/threads/14470-FindPattern-in-C

        /// <summary>
        /// Attempts to compare the given pattern based on its mask to
        /// the current offset in the memory dump.
        /// 
        /// Credits:
        ///     atom0s  - For writing this function in C#
        ///     dom1n1k - Original version of this method. (C++)
        ///     Patrick - Updated; optimized versions. (C++)
        /// </summary>
        /// <param name="nOffset"></param>
        /// <param name="btMemoryDump"></param>
        /// <param name="btPattern"></param>
        /// <param name="strMask"></param>
        /// <returns></returns>
        private bool MaskCheck(int nOffset, byte[] btMemoryDump, byte[] btPattern, string strMask)
        {
            // Loop pattern and compare to memory dump.
            for (int x = 0; x < btPattern.Length; x++)
            {
                // Skip wildcards.
                if (strMask[x] == '?')
                    continue;

                // Compare current offset byte to pattern.
                if ((strMask[x] == 'x') && (btPattern[x] != btMemoryDump[nOffset + x]))
                    return false;
            }

            // Return true if pattern was found.
            return true;
        }

        /// <summary>
        /// Attempts to locate the given pattern inside the given memory dump.
        /// 
        /// Credits:
        ///     atom0s  - For writing this function in C#
        ///     dom1n1k - Original version of this method. (C++)
        ///     Patrick - Updated; optimized versions. (C++)
        /// </summary>
        /// <param name="btMemoryDump"></param>
        /// <param name="btPattern"></param>
        /// <param name="strMask"></param>
        /// <param name="nOffset"></param>
        /// <returns></returns>
        private IntPtr FindPattern(byte[] btMemoryDump, byte[] btPattern, string strMask, int nOffset)
        {
            try
            {
                // Some error checking.
                if (btMemoryDump.Length == 0 || btPattern.Length == 0 || (btPattern.Length != strMask.Length))
                    return IntPtr.Zero;

                // Loop dump and scan for pattern.
                for (int x = 0; x < btMemoryDump.Length; x++)
                {
                    // Check mask and pattern against location.
                    if (MaskCheck(x, btMemoryDump, btPattern, strMask))
                    {
                        // Return found position.
                        return new IntPtr(
                            x + nOffset
                            );
                    }
                }

                // Pattern was not found.
                return IntPtr.Zero;
            }
            catch (Exception ex)
            {
                return IntPtr.Zero;
            }
        }

        private void button1_Click(object sender, EventArgs e)
        {
            try
            {
                // Open and read file.
                BinaryReader binReader = new BinaryReader(new FileStream(
                    Application.StartupPath + "\\winmine.exe", FileMode.Open, FileAccess.Read));

                // Read file into byte array.
                byte[] btFileBytes = new byte[binReader.BaseStream.Length + 1];
                btFileBytes = binReader.ReadBytes((int)binReader.BaseStream.Length);

                // Close file.
                //
                //      If you wish to do more to the file at this point you will
                //      want to not close it here. You will also need to alter the
                //      access flags on the binReader to allow us to write back to
                //      the file if we wish.
                binReader.Close();

                // Scan array for specific pattern.
                IntPtr ptrOffset = FindPattern(btFileBytes,
                    new byte[] { 0x8b, 0x44, 0x24, 0x04, 0x01, 0x05, 0x94, 0x51, 0x00, 0x01 },
                    "xxxxxxxxxx",
                    0
                    );

                MessageBox.Show(String.Format("Pattern scan returned: {0:X}", ptrOffset.ToInt32()));
            }
            catch (Exception ex)
            {
                MessageBox.Show("Exception caught: \n\n" + ex.ToString());
            }
        }