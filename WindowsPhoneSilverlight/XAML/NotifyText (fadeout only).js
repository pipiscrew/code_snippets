@ xaml
    <UserControl.Resources>
        <Storyboard x:Name="EventFader">
            <DoubleAnimationUsingKeyFrames
                Storyboard.TargetName="LastEvent"
                Storyboard.TargetProperty="Opacity">
                <LinearDoubleKeyFrame Value="1" KeyTime="0:0:0" />
                <LinearDoubleKeyFrame Value="0.75" KeyTime="0:0:3" />
                <LinearDoubleKeyFrame Value="0" KeyTime="0:0:4" />
            </DoubleAnimationUsingKeyFrames>
        </Storyboard>
    </UserControl.Resources>
    
    <TextBlock Name="LastEvent" TextWrapping="Wrap"/>
    
    
@ code
we call
Notify("AdReceived");

        private void Notify(string message)
        {
            LastEvent.Text = message;
            EventFader.Seek(TimeSpan.Zero);
            EventFader.Begin();
        }