//http://social.msdn.microsoft.com/Forums/en-US/csharpgeneral/thread/8cd47a24-4ba4-48af-aa91-2cd4f289ded2/

        private void Buzz()
        {
            Point WinLoc = default(Point);
            Point WinLocDef = default(Point);

            WinLocDef = this.Location;
            WinLoc = this.Location;

            for (int i = 0; i <= 10; i++) //was 50
            {
                for (int x = 0; x <= 4; x++)
                {
                    switch (x)
                    {
                        case 0:
                            WinLoc.X = WinLocDef.X + 10;
                            break;
                        case 1:
                            WinLoc.X = WinLocDef.X - 10;
                            break;
                        case 2:
                            WinLoc.Y = WinLocDef.Y - 10;
                            break;
                        case 3:
                            WinLoc.Y = WinLocDef.Y + 10;
                            break;
                        case 4:
                            WinLoc = WinLocDef;
                            break;
                    }
                    this.Location = WinLoc;
                }
                //Me.Refresh() // if needed for more form refresh event
            }
            this.Location = WinLocDef;
            this.Refresh();
        }