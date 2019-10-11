//http://www.csharp-station.com/Articles/Thumbnails.aspx
//http://msdn.microsoft.com/en-us/library/system.drawing.image.getthumbnailimage.aspx
//
//set lstv spacing:
//http://stackoverflow.com/questions/1101149/displaying-thumbnail-icons-128x128-pixels-or-larger-in-a-grid-in-listview
//
//3rd lib can read PSD etc.
//http://www.codeproject.com/KB/dotnet/ImageMagick_in_VBNET.aspx

//set listview tile view

            lstv.BeginUpdate();

            System.IO.DirectoryInfo dir = new System.IO.DirectoryInfo(txtFolder.Text);
            foreach (System.IO.FileInfo f in dir.GetFiles())
            {
                if (f.Extension == ".png" || f.Extension == ".jpg")
                {
                    Image.GetThumbnailImageAbort myCallback = new Image.GetThumbnailImageAbort(ThumbnailCallback);

                    // create an image object, using the filename we just retrieved
                    System.Drawing.Image image = System.Drawing.Image.FromFile(f.FullName);

                    // create the actual thumbnail image
                    System.Drawing.Image thumbnailImage = image.GetThumbnailImage(64, 64, new System.Drawing.Image.GetThumbnailImageAbort(myCallback), IntPtr.Zero);


                    imageList1.Images.Add(thumbnailImage);

                    lstv.Items.Add("Youwave_Android" + "\r\n" + image.Size.Width + "x" + image.Size.Height + " " + f.Extension.Replace(".", "") + " \r\n" + image.PixelFormat.ToString().Replace("Format", ""), imageList1.Images.Count - 1);
                }
            }
            lstv.EndUpdate();