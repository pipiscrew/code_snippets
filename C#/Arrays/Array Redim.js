 byte[] file= new byte[0];
 int cnt = 1;
 
            while (retByte != -1)
                {
					Array.Resize(ref file, cnt);
					retByte = fileStream.ReadByte();
					file[cnt-1] = (byte) retByte;
					cnt += 1;
                }