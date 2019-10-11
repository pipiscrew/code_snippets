            string result = "BUFFER\n";
            result += "progress:" + MEAudio.BufferingProgress + "\n";
            result += "time:" + MEAudio.BufferingTime + "\n";

            result += "STREAM\n";
            result += "Position:" + MEAudio.Position + "\n";
            result += "State:" + MEAudio.CurrentState + "\n";
            result += "Duration:" + MEAudio.NaturalDuration + "\n";
            
            MediaElementData.Text = result;

"\r\n"


 Environment.NewLine