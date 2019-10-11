
    $('input').keypress(function(e) {
        // 'α + 'ώ - Ά + Ώ
       if (((e.keyCode >=940 && e.keyCode<=943) || (e.keyCode>=972 && e.keyCode<=974)) || ((e.keyCode == 902 || e.keyCode == 908) || (e.keyCode >=904 && e.keyCode<=906) || (e.keyCode >=910 && e.keyCode<=911)))
           e.preventDefault();
        
console.log(e.keyCode);
console.log("22" +         event.which);
    });
    

ά
ί
ό
ύ
ή
ώ
έ

ά
940
902
==913 

ί
943
906
==921

ό
972
908
==927

ύ
973
910
==933

ή
942
905
==919

ώ
974
911
==937

έ
941
904
==917