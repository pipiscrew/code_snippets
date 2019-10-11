#warning the list box items shouldnt binded to a class

#the call from any form
        private void list_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
			Class1.AnimateListItem(this,(ListBoxItem)list.SelectedItem);
		}		
#a static class with this method or can be @ page
        public static void AnimateListItem(this PhoneApplicationPage page, ListBoxItem item)
        {
            if (item != null)
            {
                TranslateTransform transform = new TranslateTransform();
                item.RenderTransform=(transform);
                DoubleAnimation animation = new DoubleAnimation();
                animation.From=(0.0);
                animation.To=(-10.0);
                animation.Duration=(new Duration(TimeSpan.FromMilliseconds(150.0)));
                animation.AutoReverse=(true);
                CubicEase ease = new CubicEase();
                ease.EasingMode=(0);
                animation.EasingFunction=(ease);
                Storyboard.SetTarget(animation, transform);
                Storyboard.SetTargetProperty(animation, new PropertyPath(TranslateTransform.YProperty));
                Storyboard storyboard = new Storyboard();
                storyboard.Children.Add(animation);
                storyboard.Begin();
            }
        }
        