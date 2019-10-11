//http://peterkellner.net/2010/11/24/efficiently-generating-sha256-checksum-for-files-using-csharp/

        private static string GetChecksum(string file)
        {
            using (FileStream stream = File.OpenRead(file))
            {
                var sha = new SHA1Managed();
                byte[] checksum = sha.ComputeHash(stream);
                return BitConverter.ToString(checksum).Replace("-", String.Empty);
            }
        }
        
//original article
using System;
using System.Diagnostics;
using System.IO;
using System.Security.Cryptography;

namespace ConsoleApplicationMD5test
{
    internal class Program
    {
        private static void Main(string[] args)
        {
            //const string fileName = @"g:\tempjunk\BlobSyncClient.zip";
            const string fileName = 
            @"g:\msdn\en_visual_studio_2008_service_pack_1_x86_dvd_x15-12962.iso";

            var stopwatch1 = new Stopwatch();
            stopwatch1.Start();
            string str1 = ""; // GetChecksum(fileName);
            stopwatch1.Stop();

            var stopwatch2 = new Stopwatch();
            stopwatch2.Start();
            var fileStream = new FileStream(fileName, FileMode.OpenOrCreate,
                FileAccess.Read);
            string str2 = GetChecksumBuffered(fileStream);
            stopwatch2.Stop();

            Console.WriteLine(str1 + " " + stopwatch1.ElapsedMilliseconds);
            Console.WriteLine(str2 + " " + stopwatch2.ElapsedMilliseconds);

            Console.ReadLine();
        }

        private static string GetChecksum(string file)
        {
            using (FileStream stream = File.OpenRead(file))
            {
                var sha = new SHA256Managed();
                byte[] checksum = sha.ComputeHash(stream);
                return BitConverter.ToString(checksum).Replace("-", String.Empty);
            }
        }

        private static string GetChecksumBuffered(Stream stream)
        {
            using (var bufferedStream = new BufferedStream(stream, 1024 * 32))
            {
                var sha = new SHA256Managed();
                byte[] checksum = sha.ComputeHash(bufferedStream);
                return BitConverter.ToString(checksum).Replace("-", String.Empty);
            }
        }
    }
}	