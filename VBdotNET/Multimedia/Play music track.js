My.Computer.Audio.Play


                    Case MsgBoxStyle.Information
                        My.Computer.Audio.Play("c:\windows\media\notify.wav")
                    Case MsgBoxStyle.Critical
                        My.Computer.Audio.Play("c:\windows\media\tada.wav")
                    Case MsgBoxStyle.Exclamation
                        My.Computer.Audio.Play("c:\windows\media\ding.wav")
                    Case Else
                        My.Computer.Audio.Play("c:\windows\media\ding.wav")