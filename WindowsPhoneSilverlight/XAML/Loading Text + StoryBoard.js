
    <phone:PhoneApplicationPage.Resources>
        <Storyboard RepeatBehavior="Forever" x:Name="loadingAnimation">
            <DoubleAnimationUsingKeyFrames Storyboard.TargetName="loadingText" Storyboard.TargetProperty="Opacity">
                <EasingDoubleKeyFrame KeyTime="0" Value="0"/>
                <EasingDoubleKeyFrame KeyTime="0:0:1" Value="1">
                    <EasingDoubleKeyFrame.EasingFunction>
                        <ExponentialEase EasingMode="EaseIn"/>
                    </EasingDoubleKeyFrame.EasingFunction>
                </EasingDoubleKeyFrame>
                <EasingDoubleKeyFrame KeyTime="0:0:2" Value="0">
                    <EasingDoubleKeyFrame.EasingFunction>
                        <ExponentialEase EasingMode="EaseOut"/>
                    </EasingDoubleKeyFrame.EasingFunction>
                </EasingDoubleKeyFrame>
            </DoubleAnimationUsingKeyFrames>
        </Storyboard>
    </phone:PhoneApplicationPage.Resources>


//and 1 normal textbox with the name 'loadingText'
            <TextBlock x:Name="loadingText" Text="loading..." VerticalAlignment="Bottom" HorizontalAlignment="Center" Style="{StaticResource PhoneTextExtraLargeStyle}" FontSize="{StaticResource PhoneFontSizeLarge}" Margin="12,0"/>
        </Grid>
    </Grid>
    
//on code
                loadingAnimation.Begin();
                loadingText.Visibility = Visibility.Visible;
                
                +
				
				loadingAnimation.Stop();
				loadingText.Visibility = Visibility.Collapsed;
				
				+
				//we change the text any time with :
				loadingText.Text = e.Message;