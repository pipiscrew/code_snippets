            Dim newID% = 0

            Dim ByteArr() As Byte

'kanoyme convert to picturebox se Byte Array
            sqlC.Image2Byte(PictureBox1.Image, ByteArr)

'>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> or direct from file
            'sqlC.ImageFile2Byte("G:\dow\snap220.png", ByteArr)
'kanoyme convert to picturebox se Byte Array
            
            sqlC.AddParameter("@movieName", txtmovieName.Text, SqlDbType.NVarChar, ParameterDirection.Input, 100)
            sqlC.AddParameter("@IMDBurl", txtIMDBurl.Text, SqlDbType.NVarChar, ParameterDirection.Input, 80)
            sqlC.AddParameter("@year", txtyear.Text, SqlDbType.NVarChar, ParameterDirection.Input, 4)
            sqlC.AddParameter("@rating", IIf(txtrating.Text.Length = 0, 0, txtrating.Text), SqlDbType.NVarChar, ParameterDirection.Input, 4)
            sqlC.AddParameter("@plot", txtplot.Text, SqlDbType.NVarChar, ParameterDirection.Input, 1000)
            sqlC.AddParameter("@time", txttime.Text, SqlDbType.NVarChar, ParameterDirection.Input, 10)

'>>>>>>>>>>>>>>>>>>>>>>>
'>>>>>>>>>>>>>>>>>>>>>>> set  the field type to 'LongVarBinary'            
            sqlC.AddParameter("@cover", IIf(ByteArr.Length = 1, DBNull.Value, ByteArr), OleDb.OleDbType.LongVarBinary, ParameterDirection.Input, ByteArr.Length)
'>>>>>>>>>>>>>>>>>>>>>>>
'>>>>>>>>>>>>>>>>>>>>>>>

            sqlC.AddParameter("@userRating", IIf(txtuserRating.Text.Length = 0, 0, txtuserRating.Text), SqlDbType.NVarChar, ParameterDirection.Input, 4)
            sqlC.AddParameter("@comments", txtcomments.Text, SqlDbType.NVarChar, ParameterDirection.Input, 1000)


            sqlC.ExecuteParameter("INSERT INTO Movies (movieName,IMDBurl,IMDByear,rating,plot,IMDBtime,cover,userRating,comments) VALUES (@movieName,@IMDBurl,@year,@rating,@plot,@time,@cover,@userRating,@comments)")


            newID = sqlC.ExecuteSQLScalar("select max(movieID) from [Movies]") ';SET @maxID = SCOPE_IDENTITY();
            FillMovies(newID)