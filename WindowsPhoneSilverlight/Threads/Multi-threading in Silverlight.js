//http://www.cameronalbert.com/post/2008/03/Multi-threading-in-Silverlight.aspx

CheckAccess = same as InvokeRequired

        // This delegate enables asynchronous calls for setting
        // the text property on a TextBox control.
        delegate void TakisCallback(string streamingURL, string streamFormat);

        private void takis(string streamingURL, string streamFormat)
        {
            if (this.CheckAccess())
            {
                MessageBox.Show(streamingURL);
            }
            else
            {
                this.Dispatcher.BeginInvoke(new TakisCallback(this.takis), new object[] { streamingURL, streamFormat });
            }
        }
            
            
One thing to note about the Dispatcher is that it has a method called CheckAccess() that returns true if you can access the control on the current thread of false if you are not on the control's thread. The CheckAccess() method is decorated with a EditorBrowsableAttribute and has it's value set to Never. This prevents us from being able to see the method via intellisense in Visual Studio but does not prevent the method from being used. Not sure why the folks at MS wanted to hide this method and the documentation does not provide an explanation. The DependancyObject class also provides a CheckAccess method that is also hidden from the editor and just calls the Dispatcher method of the current object. Maybe it's not documented because it might be removed in the future, it is in beta after all.

//or use :
http://forums.silverlight.net/forums/p/155147/347080.aspx
  Dispatcher.BeginInvoke(delegate
                    {
                        carousel.ItemSources.Add(item);
                    });