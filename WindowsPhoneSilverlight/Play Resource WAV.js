//http://www.designersilverlight.com/2011/01/10/embedding-a-sound-file-in-windows-phone-7-app-silverlight/
using  Microsoft.Xna.Framework;

StreamResourceInfo streamInfo = Application.GetResourceStream(
new Uri("/MyProjectName;component/Sound/Coyote.wav",
UriKind.Relative));
SoundEffect se = SoundEffect.FromStream(streamInfo.Stream);
SoundEffectInstance soundInstance = se.CreateInstance();
soundInstance.Play();