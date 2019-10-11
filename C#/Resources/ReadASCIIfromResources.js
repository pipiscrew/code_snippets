            string PR;
            string rowTemplate = General.ReadASCIIfromResources("DBManager.ResourceSQLServer.proc_form_template_from_row.txt");
            string rowTemplateAppender ="";
            
            foreach (DataRow item in dT.Rows)
            {

               PR = item["PARAMETER_NAME"].ToString().Substring(1);
               rowTemplateAppender += rowTemplate.Replace("{{paramname}}", PR);
                
            }
            
        public static string ReadASCIIfromResources(string filename)
        {
            byte[] Buffer;
            using (Stream stream = Assembly.GetExecutingAssembly().GetManifestResourceStream(filename))
            {
                Buffer = new byte[stream.Length];
                stream.Read(Buffer, 0, Buffer.Length);
            }

            return Encoding.ASCII.GetString(Buffer);
        }