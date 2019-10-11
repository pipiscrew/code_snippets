
    public class CRC32
    {
        public delegate bool ProgressEvent(byte percent);

        uint[] table;

        public CRC32()
        {
            uint poly = 0xedb88320;
            table = new uint[256];
            uint temp = 0;
            for (uint i = 0; i < table.Length; i++)
            {
                temp = i;
                for (int j = 8; j > 0; j--)
                {
                    if ((temp & 1) == 1)
                        temp = (uint)((temp >> 1) ^ poly);
                    else
                        temp >>= 1;
                }
                table[i] = temp;
            }
        }

        public uint Init()
        {
            return 0xffffffff;
        }

        public uint Next(uint crc, byte[] bytes, int offset, int size)
        {
            for (int i = offset; i < offset + size; i++)
                crc = (uint)((crc >> 8) ^ table[(byte)((crc ^ bytes[i]) & 0xff)]);
            return crc;
        }

        public uint Final(uint crc)
        {
            return ~crc;
        }

        public static uint GetCrcOfFile(string Filename, ProgressEvent progress)
        {
            uint result = 0;

            FileStream file = new FileStream(Filename, FileMode.Open, FileAccess.Read, FileShare.Read);

            try
            {
                CRC32 crc32 = new CRC32();

                uint crc = crc32.Init();

                byte percent = 0;

                while (file.Position < file.Length & progress(percent))
                {
                    byte[] buff = new byte[64 * 1024];

                    int bytesReaded = file.Read(buff, 0, buff.Length);

                    crc = crc32.Next(crc, buff, 0, bytesReaded);

                    percent = Convert.ToByte(
                        Math.Round((Convert.ToDouble(file.Position) / Convert.ToDouble(file.Length)) * 100));
                }

                result = crc32.Final(crc);

            }
            finally
            {
                file.Close();
            }

            return result;
        }
    } 
}


                            string crc = "00000000";

                            try
                            {
                                crc = CRC32.GetCrcOfFile(file, OnProgress).ToString("X8");

                                Console.WriteLine(crc);
                            }