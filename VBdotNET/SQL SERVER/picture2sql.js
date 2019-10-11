sthn classh:

    Public Shared GetEMBRYOS_PHOTO_1 As Image

    Public Shared GetEMBRYOS_PHOTO_2 As Image

 

sto insert/update:

            prm = cmd.Parameters.Add("@EMBRYOS_PHOTO_1", SqlDbType.Image)

            prm.Value = picture2sql(IVF2_REPORTING_A.GetEMBRYOS_PHOTO_1)

            prm = cmd.Parameters.Add("@EMBRYOS_PHOTO_2", SqlDbType.Image)

            prm.Value = picture2sql(IVF2_REPORTING_A.GetEMBRYOS_PHOTO_2)

 

sto select record:

                If IsDBNull(dr.GetValue(30)) = False Then

                    IVF2_REPORTING_A.EMBRYOS_PHOTO_1 = sql2picture(dr.GetValue(30))

                End If

                If IsDBNull(dr.GetValue(31)) = False Then

                    IVF2_REPORTING_A.EMBRYOS_PHOTO_2 = sql2picture(dr.GetValue(31))

                End If

 

 

#Region " picture2sql + sql2picture functions "

    Private Function sql2picture(ByVal arrPicture() As Byte) As System.Drawing.Image

        Try

            If arrPicture(0) = 21 And arrPicture(1) = 28 Then

 

                If arrPicture Is Nothing Then

                    Return Nothing

                Else

 

                    Dim NewArrPicture() As Byte

                    Dim offset As Integer = 79

 

                    ReDim NewArrPicture(arrPicture.Length - offset)

 

                    System.Buffer.BlockCopy(arrPicture, offset, NewArrPicture, 0, arrPicture.Length - offset)

 

                    Dim ms As New IO.MemoryStream(NewArrPicture)

 

                    Return Image.FromStream(ms)

                End If

            Else

                Dim ms As New IO.MemoryStream(arrPicture)

                Return Image.FromStream(ms)

            End If

        Catch ex As Exception

            TMS_Data.TMS_MESSAGE.DisplayMessage(51, ex.Source + ":" + ex.Message, 0, 2)

            Return Nothing

        End Try

    End Function

 

    Private Function picture2sql(ByVal pic As Image) As Byte()

        Try

            Dim arrImagePhoto() As Byte

            Dim msphoto As New IO.MemoryStream

 

            If pic Is Nothing Then

                pic = Image.FromFile(Application.StartupPath & "\IconSound\ImageNull.jpg") 'Application.StartupPath 

            End If

 

            pic.Save(msphoto, pic.RawFormat)

            arrImagePhoto = msphoto.GetBuffer

            msphoto.Close()

 

            Return arrImagePhoto

 

 

        Catch ex As Exception

            TMS_Data.TMS_MESSAGE.DisplayMessage(51, ex.Source + ":" + ex.Message, 0, 2)

            Return Nothing

        End Try

    End Function

#End Region

 
