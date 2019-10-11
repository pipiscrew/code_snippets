ektos apo thn CType function gia force convertion use :

            Dim tc As System.ComponentModel.TypeConverter = System.ComponentModel.TypeDescriptor.GetConverter(GetType(Font))
            Dim newFont As Font = DirectCast(tc.ConvertFromString(dataS.Tables(0).Rows(i).Item(5)), Font)
            ReportSchema.dataTEXTFONT = newFont

            '**Backcolor Convert**
            Dim tc2 As System.ComponentModel.TypeConverter = System.ComponentModel.TypeDescriptor.GetConverter(GetType(Color))
            Dim newColor As Color
            newColor = DirectCast(tc2.ConvertFromString(dataS.Tables(0).Rows(i).Item(6)), Color)
            ReportSchema.dataTEXTbackColor = newColor



DATAROW to TAG!
        Dim tmpRecord As DataRow
        tmpRecord = DirectCast(childNode.Tag, DataRow)