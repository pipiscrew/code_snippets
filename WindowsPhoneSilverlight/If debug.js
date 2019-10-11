#if DEBUG
            this.credentials = new Mp3TunesCredentials
            {
                UserName = "demo@mp3tunes.com",
                Password = "demo"
            };
            SecurityProvider.SaveCredentials(this.credentials);
#endif