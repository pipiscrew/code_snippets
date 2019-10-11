SaveFileDialog saveFileDialog1 = new SaveFileDialog(); 
saveFileDialog1.InitialDirectory = Convert.ToString(Environment.SpecialFolder.MyDocuments); 
saveFileDialog1.Filter = "Your extension here (*.EXT)|*.ext|All Files (*.*)|*.*" ; 
//openFileDialog1.Filter = "Images (*.PNG;*.BMP;*.JPG;*.GIF)|*.PNG;*.BMP;*.JPG;*.GIF|All files (*.*)|*.*";
saveFileDialog1.FilterIndex = 1; 

if(saveFileDialog1.ShowDialog() == DialogResult.OK) 
{ 
    Console.WriteLine(saveFileDialog1.FileName);//Do what you want here
} 



//filter index

 SaveFileDialog saveFileDialog1 = new SaveFileDialog();

            saveFileDialog1.Filter = "PNG (*.png)|*.png|JPG (*.jpg)|*.jpg|GIF (*.gif)|*.gif|BMP (*.bmp)|*.bmp|TIFF (*.tiff)|*.tiff|EMF (*.emf)|*.emf|WMF (*.wmf)|*.wmf";

            if (saveFileDialog1.ShowDialog() == DialogResult.OK)
            {
                Control[] _picBOX = tabPICS.TabPages[tabPICS.SelectedIndex].Controls.Find("pictureBOX", true);
                picBOX = (PictureBox)_picBOX[0];
                
               

                ImageFormat tmpFR = null;

                switch ( saveFileDialog1.FilterIndex )
                {
                    case 1 :
                        tmpFR = ImageFormat.Png;
                        break;
                    case 2:
                        tmpFR = ImageFormat.Jpeg;
                        break;
                    case 3:
                        tmpFR = ImageFormat.Gif;
                        break;
                    case 4:
                        tmpFR = ImageFormat.Bmp;
                        break;
                    case 5:
                        tmpFR = ImageFormat.Tiff;
                        break;
                    case 6:
                        tmpFR = ImageFormat.Emf;
                        break;
                    case 7:
                        tmpFR = ImageFormat.Wmf;
                        break;
                }

                picBOX.Image.Save(saveFileDialog1.FileName, tmpFR);

            }