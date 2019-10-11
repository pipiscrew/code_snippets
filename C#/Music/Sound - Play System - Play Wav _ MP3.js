  System.Media.SystemSounds.Exclamation.Play(); 
  
  //http://www.daniweb.com/software-development/csharp/code/217151

#region Play WAV
        /// <summary>
        /// Plays a .wav File with the Option to Repeat.
        /// </summary>
        /// <param name="Location">The Location to the Sound File.</param>
        /// <param name="Repeat">True to Repeat, False to Play Once.</param>
        public static void PlayWAV(String Location, Boolean Repeat)
        {
            //Declare player as a new SoundPlayer with SoundLocation as the sound location
            System.Media.SoundPlayer player = new System.Media.SoundPlayer(Location);
            //If the user has Repeat equal to true
            if (Repeat == true)
            {
                //Play the sound continuously
                player.PlayLooping();
            }
            else
            {
                //Play the sound once
                player.Play();
                System.Media.SystemSound sound = System.Media.SystemSounds.Beep;
                sound.Play();
            }
        }
        #endregion

        #region Play MP3
        /// <summary>
        /// Plays a .mp3 File.
        /// </summary>
        /// <param name="Location">The Location to the Sound File.</param>
        public static void PlayMP3(String Location)
        {
            music = new Microsoft.DirectX.AudioVideoPlayback.Audio(Location);
            music.Play();
        }
        #endregion

        #region Play MIDI
        /// <summary>
        /// Plays a .mid File.
        /// </summary>
        /// <param name="Location">The Location to the Sound File.</param>
        public static void PlayMIDI(String Location)
        {
            music = new Microsoft.DirectX.AudioVideoPlayback.Audio(Location);
            music.Play();
        }
        #endregion

        #region Play Other
        /// <summary>
        /// Plays any other sound File.
        /// </summary>
        /// <param name="Location">The Location to the Sound File.</param>
        public static void PlayOther(String Location)
        {
            music = new Microsoft.DirectX.AudioVideoPlayback.Audio(Location);
            music.Play();
        }
        #endregion