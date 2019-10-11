//http://msdn.microsoft.com/en-us/library/gg442303(v=vs.92).aspx#Y3500

@ App.xaml
	xmlns:unsupported="clr-namespace:Microsoft.Phone.Controls.Unsupported"
	
	@	 <Application.Resources> tag
<Style x:Key="CustomIndeterminateProgressBar" TargetType="ProgressBar"> 
    <Setter Property="Foreground" Value="{StaticResource PhoneAccentBrush}"/> 
    <Setter Property="Background" Value="{StaticResource PhoneAccentBrush}"/> 
    <Setter Property="Maximum" Value="100"/> 
    <Setter Property="IsHitTestVisible" Value="False"/> 
    <Setter Property="Padding" Value="{StaticResource PhoneHorizontalMargin}"/> 
    <Setter Property="Template"> 
        <Setter.Value> 
            <ControlTemplate TargetType="ProgressBar"> 
                <unsupported:RelativeAnimatingContentControl HorizontalContentAlignment="Stretch" VerticalContentAlignment="Stretch"> 
                    <unsupported:RelativeAnimatingContentControl.Resources> 
                        <ExponentialEase EasingMode="EaseOut" Exponent="1" x:Key="ProgressBarEaseOut"/> 
                        <ExponentialEase EasingMode="EaseOut" Exponent="1" x:Key="ProgressBarEaseIn"/> 
                    </unsupported:RelativeAnimatingContentControl.Resources> 
                    <VisualStateManager.VisualStateGroups> 
                        <VisualStateGroup x:Name="CommonStates"> 
                            <VisualState x:Name="Determinate"/> 
                            <VisualState x:Name="Indeterminate"> 
                                <Storyboard RepeatBehavior="Forever" Duration="00:00:04.4"> 
                                    <ObjectAnimationUsingKeyFrames Storyboard.TargetProperty="Visibility" Storyboard.TargetName="IndeterminateRoot"> 
                                        <DiscreteObjectKeyFrame KeyTime="0"> 
                                            <DiscreteObjectKeyFrame.Value> 
                                                <Visibility>Visible</Visibility> 
                                            </DiscreteObjectKeyFrame.Value> 
                                        </DiscreteObjectKeyFrame> 
                                    </ObjectAnimationUsingKeyFrames> 
                                    <ObjectAnimationUsingKeyFrames Storyboard.TargetProperty="Visibility" Storyboard.TargetName="DeterminateRoot"> 
                                        <DiscreteObjectKeyFrame KeyTime="0"> 
                                            <DiscreteObjectKeyFrame.Value> 
                                                <Visibility>Collapsed</Visibility> 
                                            </DiscreteObjectKeyFrame.Value> 
                                        </DiscreteObjectKeyFrame> 
                                    </ObjectAnimationUsingKeyFrames> 
                                    <DoubleAnimationUsingKeyFrames BeginTime="00:00:00.0" Storyboard.TargetProperty="X" Storyboard.TargetName="R1TT"> 
                                        <LinearDoubleKeyFrame KeyTime="00:00:00.0" Value="0.1"/> 
                                        <EasingDoubleKeyFrame KeyTime="00:00:00.5" Value="33.1" EasingFunction="{StaticResource ProgressBarEaseOut}"/> 
                                        <LinearDoubleKeyFrame KeyTime="00:00:02.0" Value="66.1"/> 
                                        <EasingDoubleKeyFrame KeyTime="00:00:02.5" Value="100.1" EasingFunction="{StaticResource ProgressBarEaseIn}"/> 
                                    </DoubleAnimationUsingKeyFrames> 
                                    <DoubleAnimationUsingKeyFrames BeginTime="00:00:00.2" Storyboard.TargetProperty="X" Storyboard.TargetName="R2TT"> 
                                        <LinearDoubleKeyFrame KeyTime="00:00:00.0" Value="0.1"/> 
                                        <EasingDoubleKeyFrame KeyTime="00:00:00.5" Value="33.1" EasingFunction="{StaticResource ProgressBarEaseOut}"/> 
                                        <LinearDoubleKeyFrame KeyTime="00:00:02.0" Value="66.1"/> 
                                        <EasingDoubleKeyFrame KeyTime="00:00:02.5" Value="100.1" EasingFunction="{StaticResource ProgressBarEaseIn}"/> 
                                    </DoubleAnimationUsingKeyFrames> 
                                    <DoubleAnimationUsingKeyFrames BeginTime="00:00:00.4" Storyboard.TargetProperty="X" Storyboard.TargetName="R3TT"> 
                                        <LinearDoubleKeyFrame KeyTime="00:00:00.0" Value="0.1"/> 
                                        <EasingDoubleKeyFrame KeyTime="00:00:00.5" Value="33.1" EasingFunction="{StaticResource ProgressBarEaseOut}"/> 
                                        <LinearDoubleKeyFrame KeyTime="00:00:02.0" Value="66.1"/> 
                                        <EasingDoubleKeyFrame KeyTime="00:00:02.5" Value="100.1" EasingFunction="{StaticResource ProgressBarEaseIn}"/> 
                                    </DoubleAnimationUsingKeyFrames> 
                                    <DoubleAnimationUsingKeyFrames BeginTime="00:00:00.6" Storyboard.TargetProperty="X" Storyboard.TargetName="R4TT"> 
                                        <LinearDoubleKeyFrame KeyTime="00:00:00.0" Value="0.1"/> 
                                        <EasingDoubleKeyFrame KeyTime="00:00:00.5" Value="33.1" EasingFunction="{StaticResource ProgressBarEaseOut}"/> 
                                        <LinearDoubleKeyFrame KeyTime="00:00:02.0" Value="66.1"/> 
                                        <EasingDoubleKeyFrame KeyTime="00:00:02.5" Value="100.1" EasingFunction="{StaticResource ProgressBarEaseIn}"/> 
                                    </DoubleAnimationUsingKeyFrames> 
                                    <DoubleAnimationUsingKeyFrames BeginTime="00:00:00.8" Storyboard.TargetProperty="X" Storyboard.TargetName="R5TT"> 
                                        <LinearDoubleKeyFrame KeyTime="00:00:00.0" Value="0.1"/> 
                                        <EasingDoubleKeyFrame KeyTime="00:00:00.5" Value="33.1" EasingFunction="{StaticResource ProgressBarEaseOut}"/> 
                                        <LinearDoubleKeyFrame KeyTime="00:00:02.0" Value="66.1"/> 
                                        <EasingDoubleKeyFrame KeyTime="00:00:02.5" Value="100.1" EasingFunction="{StaticResource ProgressBarEaseIn}"/> 
                                    </DoubleAnimationUsingKeyFrames> 
                                    <DoubleAnimationUsingKeyFrames BeginTime="00:00:00.0" Storyboard.TargetProperty="Opacity" Storyboard.TargetName="R1"> 
                                        <DiscreteDoubleKeyFrame KeyTime="0" Value="1"/> 
                                        <DiscreteDoubleKeyFrame KeyTime="00:00:02.5" Value="0"/> 
                                    </DoubleAnimationUsingKeyFrames> 
                                    <DoubleAnimationUsingKeyFrames BeginTime="00:00:00.2" Storyboard.TargetProperty="Opacity" Storyboard.TargetName="R2"> 
                                        <DiscreteDoubleKeyFrame KeyTime="0" Value="1"/> 
                                        <DiscreteDoubleKeyFrame KeyTime="00:00:02.5" Value="0"/> 
                                    </DoubleAnimationUsingKeyFrames> 
                                    <DoubleAnimationUsingKeyFrames BeginTime="00:00:00.4" Storyboard.TargetProperty="Opacity" Storyboard.TargetName="R3"> 
                                        <DiscreteDoubleKeyFrame KeyTime="0" Value="1"/> 
                                        <DiscreteDoubleKeyFrame KeyTime="00:00:02.5" Value="0"/> 
                                    </DoubleAnimationUsingKeyFrames> 
                                    <DoubleAnimationUsingKeyFrames BeginTime="00:00:00.6" Storyboard.TargetProperty="Opacity" Storyboard.TargetName="R4"> 
                                        <DiscreteDoubleKeyFrame KeyTime="0" Value="1"/> 
                                        <DiscreteDoubleKeyFrame KeyTime="00:00:02.5" Value="0"/> 
                                    </DoubleAnimationUsingKeyFrames> 
                                    <DoubleAnimationUsingKeyFrames BeginTime="00:00:00.8" Storyboard.TargetProperty="Opacity" Storyboard.TargetName="R5"> 
                                        <DiscreteDoubleKeyFrame KeyTime="0" Value="1"/> 
                                        <DiscreteDoubleKeyFrame KeyTime="00:00:02.5" Value="0"/> 
                                    </DoubleAnimationUsingKeyFrames> 
                                </Storyboard> 
                            </VisualState> 
                        </VisualStateGroup> 
                    </VisualStateManager.VisualStateGroups> 
                    <Grid> 
                        <Grid x:Name="DeterminateRoot" Margin="{TemplateBinding Padding}" Visibility="Visible"> 
                            <Rectangle x:Name="ProgressBarTrack" Fill="{TemplateBinding Background}" Height="4" Opacity="0.1"/> 
                            <Rectangle x:Name="ProgressBarIndicator" Fill="{TemplateBinding Foreground}" HorizontalAlignment="Left" Height="4"/> 
                        </Grid> 
                        <Border x:Name="IndeterminateRoot" Margin="{TemplateBinding Padding}" Visibility="Collapsed"> 
                            <Grid HorizontalAlignment="Left"> 
                                <Rectangle Fill="{TemplateBinding Foreground}" Height="4" IsHitTestVisible="False" Width="4" x:Name="R1" Opacity="0" CacheMode="BitmapCache"> 
                                    <Rectangle.RenderTransform> 
                                        <TranslateTransform x:Name="R1TT"/> 
                                    </Rectangle.RenderTransform> 
                                </Rectangle> 
                                <Rectangle Fill="{TemplateBinding Foreground}" Height="4" IsHitTestVisible="False" Width="4" x:Name="R2" Opacity="0" CacheMode="BitmapCache"> 
                                    <Rectangle.RenderTransform> 
                                        <TranslateTransform x:Name="R2TT"/> 
                                    </Rectangle.RenderTransform> 
                                </Rectangle> 
                                <Rectangle Fill="{TemplateBinding Foreground}" Height="4" IsHitTestVisible="False" Width="4" x:Name="R3" Opacity="0" CacheMode="BitmapCache"> 
                                    <Rectangle.RenderTransform> 
                                        <TranslateTransform x:Name="R3TT"/> 
                                    </Rectangle.RenderTransform> 
                                </Rectangle> 
                                <Rectangle Fill="{TemplateBinding Foreground}" Height="4" IsHitTestVisible="False" Width="4" x:Name="R4" Opacity="0" CacheMode="BitmapCache"> 
                                    <Rectangle.RenderTransform> 
                                        <TranslateTransform x:Name="R4TT"/> 
                                    </Rectangle.RenderTransform> 
                                </Rectangle> 
                                <Rectangle Fill="{TemplateBinding Foreground}" Height="4" IsHitTestVisible="False" Width="4" x:Name="R5" Opacity="0" CacheMode="BitmapCache"> 
                                    <Rectangle.RenderTransform> 
                                        <TranslateTransform x:Name="R5TT"/> 
                                    </Rectangle.RenderTransform> 
                                </Rectangle> 
                            </Grid> 
                        </Border> 
                    </Grid> 
                </unsupported:RelativeAnimatingContentControl> 
            </ControlTemplate> 
        </Setter.Value> 
    </Setter> 
</Style>


@ our page on grid tag :

<ProgressBar 
   IsIndeterminate="true"
   x:Name="customIndeterminateProgressBar"
   Style="{StaticResource CustomIndeterminateProgressBar}"
/>

//here is a code sample to putted on a button_click
customIndeterminateProgressBar.IsIndeterminate = !(customIndeterminateProgressBar.IsIndeterminate);

if (customIndeterminateProgressBar.Visibility == Visibility.Collapsed)
{
   customIndeterminateProgressBar.Visibility = Visibility.Visible;
}
else
{
   customIndeterminateProgressBar.Visibility = Visibility.Collapsed;
}


--

u can use a timer to stop it!

http://forums.silverlight.net/forums/p/203742/512575.aspx

private DispatcherTimer _timer;

@ load event
            _timer = new DispatcherTimer();
            _timer.Tick += new EventHandler(_timer_Tick);
            _timer.Interval = TimeSpan.FromMilliseconds(100);
            


        void _timer_Tick(object sender, EventArgs e)
        {
            if (listBox1.Items.Count > 0) 
            {
                customIndeterminateProgressBar.IsIndeterminate = false;
                customIndeterminateProgressBar.Visibility = Visibility.Collapsed;
                _timer.Stop();
            }

        }