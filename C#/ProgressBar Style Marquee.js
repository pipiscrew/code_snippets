//http://stackoverflow.com/questions/312936/windows-forms-progressbar-easiest-way-to-start-stop-marquee

To start:
progressBar1.Style = ProgressBarStyle.Marquee;
progressBar1.MarqueeAnimationSpeed = 30;


To stop:
progressBar1.Style = ProgressBarStyle.Continuous;
progressBar1.MarqueeAnimationSpeed = 0;