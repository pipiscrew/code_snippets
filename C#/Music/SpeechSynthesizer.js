//https://msdn.microsoft.com/en-us/library/system.speech.synthesis.speechsynthesizer(v=vs.100).aspx

//download more voices
//https://www.microsoft.com/en-us/download/details.aspx?id=27224

// Initialize a new instance of the SpeechSynthesizer.
SpeechSynthesizer synth = new SpeechSynthesizer();

// Configure the audio output. 
synth.SetOutputToDefaultAudioDevice();

// Speak a string.
synth.Speak("This example demonstrates a basic use of Speech Synthesizer");

// Which voices are installed
foreach (var voice in speaker.GetInstalledVoices())
{
    Console.WriteLine(voice.VoiceInfo.Description);
}