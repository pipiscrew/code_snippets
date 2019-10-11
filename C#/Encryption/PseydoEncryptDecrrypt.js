//http://www.skilldrive.com/book/DOTNETinSamples.htm#_Toc112335168
      static void Main(string[] args)

      {

            string ciphertext = encrypt(".NET in Samples", 2);

            Console.WriteLine("Ciphertext: " + ciphertext);

            Console.WriteLine("Plaintext: " + decrypt(ciphertext, 2));

      }

 

      public static string encrypt(string plaintext, int key)

      {

            StringBuilder ciphertext = new StringBuilder();

            // for simplicity this implementation works just with uppercases

            char[] c = plaintext.ToUpper().ToCharArray();

 

            for (int i = 0; i < c.Length; i++)

            {

                  if (c[i] < 'A' || c[i] > 'Z') ciphertext.Append(c[i]);

                  else

                  {

                        // shift the character accoring to key and add it to cipher text

                        ciphertext.Append(shift((int)c[i], key));

                  }

            }

            return ciphertext.ToString();

      }

 

      public static string decrypt(string ciphertext, int key)

      {

            StringBuilder decipher = new StringBuilder();

            // for simplicity this implementation works just with uppercases

            char[] c = ciphertext.ToUpper().ToCharArray();

 

            for (int i = 0; i < c.Length; i++)

            {

                  if (c[i] < 'A' || c[i] > 'Z') decipher.Append(c[i]);

                  else

                  {

                        // now minus is used with key to invert the reverted values

                        decipher.Append(shift((int)c[i], -key));

                  }

            }

            return decipher.ToString();

      }

 

      // !!! algorithm is not optimized and could be written in one line, this is JUST for sampling purposes

      private static char shift(int iC, int key)

      {

            // subtract value of the lowest character in ASCII, it is 'A'

            iC = iC - 'A';

            // add key to shift the character as is needed

            iC = iC + key;

            // check if it is out of bounds, then return a reminder which represents shift character to a new possition

            iC = iC % 26;

            // add ASCII value of 'A' character to make correct representation as on the beginning

            iC = iC + 'A';

            return (char)iC;

      }