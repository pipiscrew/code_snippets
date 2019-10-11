//ex1
                SQLiteCommand CMD = new SQLiteCommand();
                SQLiteParameterCollection Params = CMD.Parameters ;
                parentID = int.Parse(TR.SelectedNode.Name);

                Params.Add("@nodename", CatName);
                Params.Add("@isfolder", "True");
                Params.Add("@parentnode", parentID);

                int lastID;

                CMD.CommandText=("insert into codes (nodename,isfolder,parentnode) values (@nodename,@isfolder,@parentnode)");

                CMD.CommandType = CommandType.Text;
                CMD.Connection = General.Conne.GetConnection();
                CMD.Prepare();
                CMD.ExecuteScalar();
                
//ex2

                        SQLiteCommand CMD = new SQLiteCommand();
                        SQLiteParameterCollection Params = CMD.Parameters;

                        int parentID;

                        if (TR.SelectedNode.ImageIndex == 2) //user on code
                            parentID = int.Parse(TR.SelectedNode.Parent.Name);
                        else
                            parentID = int.Parse(TR.SelectedNode.Name);

                        Params.Add("@nodename", CodeName);
                        Params.Add("@isfolder", 0);
                        Params.Add("@parentnode", parentID);
                        Params.Add("@nodecode", txtIDE.Text);
                        Params.Add("@privacy", General.nodeAttachments.privacy ? 1 : 0);
                        Params.Add("@dateupd", DateTime.Now.ToOADate().ToString().Replace(",","."));
                        Params.Add("@updid", Guid.NewGuid().ToString());

                        if (General.nodeAttachments.attachment != null)
                        {
                            Params.Add("@attachment", DbType.Binary);
                            Params[Params.Count - 1].Value = General.nodeAttachments.attachment;

                            Params.Add("@attachmentfilename", General.nodeAttachments.attachmentFilename);
                        }
                        else
                        {
                            Params.Add("@attachment", DBNull.Value);
                            Params.Add("@attachmentfilename", null);
                        }

                        if (General.nodeAttachments.attachmentScreenshot != null)
                        {
                            Params.Add("@screenshot", DbType.Binary);
                            Params[Params.Count - 1].Value = General.nodeAttachments.attachmentScreenshot;
                        }
                        else
                            Params.Add("@screenshot", DBNull.Value);


                        //privacy
                        //todo : int?
                        Params.Add("@privacy", General.nodeAttachments.privacy ? 1 : 0);

                        int lastID;

                        CMD.CommandText = ("insert into codes (nodename,isfolder,parentnode,nodecode,Attachment,ScreenShot " +
                                           ",AttachFilename,Privacy,DateUPD,updID) values (@nodename,@isfolder,@parentnode,@nodecode,@attachment," +
                                           "@screenshot,@attachmentfilename,@privacy,@dateupd,@updid)");

                        CMD.CommandType = CommandType.Text;
                        CMD.Connection = General.Conne.GetConnection();
                        CMD.Prepare();
                        CMD.ExecuteScalar();

                        //get the new ID
                        lastID = int.Parse(General.Conne.ExecuteSQLScalar("select last_insert_rowid();").ToString());