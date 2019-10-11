//http://peterfoot.net/WindowsPhone7ThemeAware.aspx
//http://blog.adamnathan.net/CommentView,guid,51c57dfa-2851-440f-8b4e-ab345c6ad9c2.aspx
if ((Visibility)Application.Current.Resources["PhoneDarkThemeVisibility"] == Visibility.Visible)
    // Do dark theme stuff
else
    // Do light theme stuff
    
    

but generally we can set this property to white

    SolidColorBrush pfb = (SolidColorBrush)this.Resources["PhoneForegroundBrush"];
                pfb.Color = Colors.Black;

and all texts made readable.... even in Lighttheme


#VA functions

        public static Brush ContrastBrush()
        {
            Brush brush = new SolidColorBrush();

            if (((Visibility)Application.Current.Resources["PhoneLightThemeVisibility"] == Visibility.Collapsed))
            {
                brush = new SolidColorBrush(Colors.Black);
            }
            else
            {
                brush = new SolidColorBrush(Colors.White);
            }

            return brush;
        }

        public static Color ContrastBrush2()
        {
            Color brush;

            if (((Visibility)Application.Current.Resources["PhoneLightThemeVisibility"] == Visibility.Collapsed))
            {
                brush = Colors.White;
            }
            else
            {
                brush = Colors.Black;
            }

            return brush;
        }