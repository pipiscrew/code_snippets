PRJ Properties at General > Conditional compilation settings
//we writing as :
LOG4NET;NET_2_0

//if the variable defined at code 
#if LOG4NET
                
                if (dsf) {
                    Logger.ChannelSyncing.Info("SupportNonRfc enabled");
                } else {
                    Logger.ChannelSyncing.Info("SupportNonRfc disabled");
                }
#endif
