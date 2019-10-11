//http://mindstick.com/Forum/425/how%20to%20convert%20html%20color%20to%20rgb%20in%20c

Color colorValueFrmHex = ColorTranslator.FromHtml("#FFFF33");


//custom
                //	Display the color hex value
                string red = Convert.ToString(lblForeColor.BackColor.R, 16);
                if (red.Length < 2) red = "0" + red;
                string green = Convert.ToString(lblForeColor.BackColor.G, 16);
                if (green.Length < 2) green = "0" + green;
                string blue = Convert.ToString(lblForeColor.BackColor.B, 16);
                if (blue.Length < 2) blue = "0" + blue;