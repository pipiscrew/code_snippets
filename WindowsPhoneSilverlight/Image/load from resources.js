//http://jcvonrosen.wordpress.com/2011/01/20/setting-an-image-source-in-code-on-wp7/

//the file just dropped to PRJ > img folder and Built Action = Resource
            btnFavorites.Source = (ImageSource)new ImageSourceConverter().ConvertFromString("../img/PlayerAddFavoriteMouseOver.png");
         
         
         
However, I’ve seen a few other sites say that setting an Image Source in code is more like this:

imgMyImage.Source = new BitmapImage(new Uri(“images/smiley.png”, UriKind.Relative));

That’s effectively the same thing, since BitmapImage inherits from ImageSource. 
My personal preference is to use the second approach, since we are loading plain old 
bitmapped images, and there’s no point in abstracting something that doesn’t need to be abstracted.