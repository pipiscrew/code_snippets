//http://social.msdn.microsoft.com/Forums/en/mktplace/thread/546e7f24-ad7f-4399-a1c8-72dc80803aa1

using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Animation;
using System.Windows.Shapes;
using Microsoft.Phone.Controls;
using Microsoft.Web.Media.SmoothStreaming;

      Microsoft.Phone.Tasks.MediaPlayerLauncher radio = new Microsoft.Phone.Tasks.MediaPlayerLauncher();
      radio.Controls = Microsoft.Phone.Tasks.MediaPlaybackControls.All;

      radio.Location = Microsoft.Phone.Tasks.MediaLocationType.Install;
      radio.Media = new System.Uri("http://www.all4phones.de/attachments/13620d1227387672-der-error-song-computer-mp3-klingelton-der-error-song-computer-.mp3");
      radio.Show();