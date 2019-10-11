''''''''''''''''''''''''in a module
Public Type ReservationRoom ' ΠΕΡΙΓΡΑΦΗ ΠΕΔΙΟ ΠΙΝΑΚΑΣ
RoomType As String 'ΤΥΠΟΣ ΔΩΜΑΤΙΟΥ TgUniqueField HotelRoomTypes
ResRoomNo As String 'ΑΡΙΘΜΟΣ ΔΩΜΑΤΙΟΥ RoomNumber HotelRooms
ResRoomTg As Long 'ΚΩΔΙΚΟΣ ΔΩΜΑΤΙΟΥ TgUniqueField HotelRooms
ReservationTG As Long 'ΚΩΔΙΚΟΣ ΚΡΑΤΗΣΗΣ TgUniqueField HotelReservations
ReservationRoomsTG As Long 'ΚΩΔΙΚΟΣ ΔΩΜΑΤΙΟΥ ΚΡΑΤΗΣΗΣ TgUniqueField 
HotelReservationRooms
Persons As Integer 'ΑΤΟΜΑ ΔΩΜΑΤΙΟΥ Persons HotelReservationRooms
Charge As Currency 'ΧΡΕΩΣΗ ΔΩΜΑΤΙΟΥ Charge HotelReservationRooms
DateIn As Date 'ΕΝΑΡΞΗ ΚΡΑΤΗΣΗΣ ΔΩΜΑΤΙΟΥ DateIn HotelReservationRooms
DateOut As Date 'ΛΗΞΗ ΚΡΑΤΗΣΗΣ ΔΩΜΑΤΙΟΥ DateOut HotelReservationRooms
Names() As String 'ΟΝΟΜΑΤΑ ΔΩΜΑΤΙΟΥ (ΟΛΕΣ ΟΙ ΕΓΓΡΑΦΕΣ ΓΙΑ ΤΟ ΔΩΜΑΤΙΟ 
HotelResNamesByRoom)
InUse As Boolean 'ΚΑΘΟΡΙΖΕΙ ΑΝ RUN_TIME ΤΟ ΔΩΜΑΤΙΟ ΕΙΝΑΙ ΣΕ ΙΣΧΥ
End Type

'Ο ΤΥΠΟΣ ΔΗΛΩΝΕΤΑΙ PUBLIC ΓΙΑ ΝΑ ΤΟΝ ΒΛΕΠΟΥΝ ΚΙ ΑΛΛΕΣ ΦΟΡΜΕΣ ΕΚΤΟΣ ΑΥΤΗΣ 
ΤΩΝ ΚΡΑΤΗΣΕΩΝ
Public ResRooms() As ReservationRoom

''''''''''''''''''''''''form code
'sample code
k = UBound(ResRooms)
k = k + 1

ReDim Preserve ResRooms(k)

ResRooms(k).InUse = True
ResRooms(k).RoomType = rs("Type")
ResRooms(k).ResRoomNo = rs("RoomNumber")
ResRooms(k).Persons = rs("NumOfBeds")
ResRooms(k).ResRoomTg = UniqueField
ResRooms(k).Charge = RoomCharge
ResRooms(k).ReservationTG = ActiveTable.GetUniqueField

'sample code2
For k = 0 To UBound(ResRooms)
'IA AAOC OI GRID
If ResRooms(k).ResRoomTg = nVal(GridRooms.value(Row, 4)) Then
'AEA IA ANAE OCI AAANAOC ?IO EA AICIANUOAE
ResRooms(k).RoomType = rs.Fields("Type")
ResRooms(k).ResRoomNo = rs.Fields("RoomNumber")
ResRooms(k).Persons = rs.Fields("NumOfBeds")
ResRooms(k).ResRoomTg = UniqueField
ResRooms(k).Charge = RoomCharge
ResRooms(k).ReservationTG = ActiveTable.GetUniqueField
End If
Next k