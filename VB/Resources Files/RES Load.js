        If Pack(Card).Face = False Then
            cardGraphics.Picture1.Picture = LoadResPicture(Back + 59, vbResBitmap)
        Else
            cardGraphics.Picture1.Picture = LoadResPicture(Pack(Card).Value + 1, vbResBitmap)
        End If



2nd example ::

Private m_snd() As Byte

Public Function PlaySoundResource1(ByVal SndID As Long) As Long
   Const Flags = SND_RESOURCE Or SND_ASYNC Or SND_NODEFAULT
   PlaySoundResource1 = PlaySound(CStr("#" & SndID), App.hInstance, Flags)
End Function

Public Function PlaySoundResource(ByVal SndID As Long) As Long
   Const Flags = SND_MEMORY Or SND_ASYNC Or SND_NODEFAULT
   m_snd = LoadResData(SndID, "WAVE")
   PlaySoundResource = PlaySoundData(m_snd(0), 0, Flags)
End Function