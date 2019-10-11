                ImageFormat tmpFR = null;

                switch (comboBox2.SelectedIndex)
                {
                    case 0:
                        tmpFR = ImageFormat.Png;
                        break;
                    case 1:
                        tmpFR = ImageFormat.Jpeg;
                        break;
                    case 2:
                        tmpFR = ImageFormat.Gif;
                        break;
                    case 3:
                        tmpFR = ImageFormat.Bmp;
                        break;
                    case 4:
                        tmpFR = ImageFormat.Emf;
                        break;
                    case 5:
                        tmpFR = ImageFormat.Tiff;
                        break;
                    case 6:
                        tmpFR = ImageFormat.Wmf;
                        break;
                }

                string fl = txtPath.Text + "\\snap" + DateTime.Now.ToString("Hmmssf") + "." + comboBox2.Text.ToLower();
                pictureBox1.Image.Save(fl, tmpFR);