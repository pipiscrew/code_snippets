to e?xa ki eg? aut? to pr?blhma pali?tera...

Ta xreiaste opwsdhpote ena CD me XP pou na periexei oles tis glwsses.

Ta breis to arxeio intl.i__ ? intl.inf 'h kapws etsi kai 8a to antigrapseis sto fakelo   Windows\Inf  antika8istwntas to prohgoymeno
(basika krata kai mia kopia)



meta treje to parakatw

rundll32.exe setupapi,InstallHinfSection LANGUAGE_COLLECTION.BASIC.INSTALL 00000408 %WINDIR%\inf\intl.inf




Ta sou zhthsei to CD 8a antigrapsei ta ellhnika kai 8a eisai ok meta...





exw kai entolh an xreiazesai gia to Language Bar pou suny8ws to koboun 
Regsvr32.exe msutb.dll



---

Θα χρειαστείς ένα CD με winXP που να περιέχει όλες τις γλώσσες.
Βρες το αρχείο "intl.i__" ή "intl.inf" και αντέγραψέ το στο 
φάκελο C:\Windows\Inf αντικαθιστώντας το προηγούμενο.

Μετά από την "Έναρξη-RUN" τρέξε το παρακάτω:
rundll32.exe setupapi,InstallHinfSection LANGUAGE_COLLECTION.BASIC.INSTALL 00000408 %WINDIR%\inf\intl.inf
Θα ζητήσει κάποια αρχεία. 
Αυτά βρίσκονται στο CD, ( x:\I386). Θα αντιγράψει τα Ελληνικά και είσαι εντάξει. 
Πήγαινε στο Regional Settings βάλε Ελληνικά.


---

[Locales]
00000436 = %Afrikaans%                  ,850     ,1,,0436:00000409,0409:00000409
0000041c = %Albanian%                   ,852     ,2,,041c:0000041c,0409:00000409
00000401 = %Arabic_Saudi_Arabia%        ,720     ,13,,0409:00000409,0401:00000401
00000801 = %Arabic_Iraq%                ,720     ,13,,0409:00000409,0801:00000401
00000c01 = %Arabic_Egypt%               ,720     ,13,,0409:00000409,0c01:00000401
00001001 = %Arabic_Libya%               ,720     ,13,,040c:0000040c,1001:00020401
00001401 = %Arabic_Algeria%             ,720     ,13,,040c:0000040c,1401:00020401
00001801 = %Arabic_Morocco%             ,720     ,13,,040c:0000040c,1801:00020401
00001c01 = %Arabic_Tunisia%             ,720     ,13,,040c:0000040c,1c01:00020401
00002001 = %Arabic_Oman%                ,720     ,13,,0409:00000409,2001:00000401
00002401 = %Arabic_Yemen%               ,720     ,13,,0409:00000409,2401:00000401
00002801 = %Arabic_Syria%               ,720     ,13,,0409:00000409,2801:00000401
00002c01 = %Arabic_Jordan%              ,720     ,13,,0409:00000409,2c01:00000401
00003001 = %Arabic_Lebanon%             ,720     ,13,,0409:00000409,3001:00000401
00003401 = %Arabic_Kuwait%              ,720     ,13,,0409:00000409,3401:00000401
00003801 = %Arabic_UAE%                 ,720     ,13,,0409:00000409,3801:00000401
00003c01 = %Arabic_Bahrain%             ,720     ,13,,0409:00000409,3c01:00000401
00004001 = %Arabic_Qatar%               ,720     ,13,,0409:00000409,4001:00000401
0000042b = %Armenian%                   ,437     ,17,5,042b:0000042b,0409:00000409,0419:00000419
0000042c = %Azeri_Latin%                ,857     ,6,5,042c:0000042c,082c:0000082c,0419:00000419
0000082c = %Azeri_Cyrillic%             ,866     ,5,6,082c:0000082c,042c:0000042c,0419:00000419
0000042d = %Basque%                     ,850     ,1,,042d:000040a,0409:00000409
00000423 = %Belarusian%                 ,866     ,5,,0423:00000423,0409:00000409,0419:00000419
00000402 = %Bulgarian%                  ,866     ,5,,0402:00000402,0409:00000409
00000403 = %Catalan%                    ,850     ,1,,0403:0000040a,0409:00000409
00000404 = %Chinese_Taiwan%             ,950     ,9,,0404:00000404,0404:e0080404,0404:E0010404
00000804 = %Chinese_PRC%                ,936     ,10,,0804:00000804,0804:e00e0804,0804:e0010804,0804:e0030804,0804:e0040804
00000c04 = %Chinese_Hong_Kong%          ,950     ,10,9,0409:00000409,0c04:e0080404
00001004 = %Chinese_Singapore%          ,936     ,10,,0409:00000409,0804:e00e0804,0804:e0010804,0804:e0030804,0804:e0040804
00001404 = %Chinese_Macau%              ,950     ,10,9,0409:00000409,0804:e00e0804,0404:e0020404,0404:e0080404
0000041a = %Croatian%                   ,852     ,2,,041a:0000041a,0409:00000409
00000405 = %Czech%                      ,852     ,2,,0405:00000405,0409:00000409
00000406 = %Danish%                     ,850     ,1,,0406:00000406,0409:00000409
00000465 = %Divehi%                     ,720     ,13,,0409:00000409,0465:00000465
00000413 = %Dutch_Standard%             ,850     ,1,,0413:00020409,0413:00000413,0409:00000409
00000813 = %Dutch_Belgian%              ,850     ,1,,0813:00000813,0409:00000409
00000409 = %English_United_States%      ,437     ,1,,0409:00000409
00000809 = %English_United_Kingdom%     ,850     ,1,,0809:00000809
00000c09 = %English_Australian%         ,850     ,1,,0c09:00000409
00001009 = %English_Canadian%           ,850     ,1,,1009:00000409,1009:00011009,1009:00001009
00001409 = %English_New_Zealand%        ,850     ,1,,1409:00000409
00001809 = %English_Irish%              ,850     ,1,,1809:00001809,1809:00011809
00001c09 = %English_South_Africa%       ,437     ,1,,1c09:00000409
00002009 = %English_Jamaica%            ,850     ,1,,2009:00000409
00002409 = %English_Caribbean%          ,850     ,1,,2409:00000409
00002809 = %English_Belize%             ,850     ,1,,2809:00000409
00002c09 = %English_Trinidad%           ,850     ,1,,2c09:00000409
00003009 = %English_Zimbabwe%           ,437     ,1,,3009:00000409
00003409 = %English_Philippines%        ,437     ,1,,3409:00000409
00000425 = %Estonian%                   ,775     ,3,,0425:00000425
00000438 = %Faeroese%                   ,850     ,1,,0438:00000406,0409:00000409
00000429 = %Farsi%                      ,720     ,11,,0409:00000409,0429:00000429,0429:00000401
0000040b = %Finnish%                    ,850     ,1,,040b:0000040b,0409:00000409
0000040c = %French_Standard%            ,850     ,1,,040c:0000040c,0409:00000409
0000080c = %French_Belgian%             ,850     ,1,,080c:0000080c,0409:00000409
00000c0c = %French_Canadian%            ,850     ,1,,0c0c:00011009,0409:00000409
0000100c = %French_Swiss%               ,850     ,1,,100c:0000100c,0409:00000409
0000140c = %French_Luxembourg%          ,850     ,1,,140c:0000040c,0409:00000409
0000180c = %French_Monaco%              ,850     ,1,,180c:0000040c,0409:00000409
00000456 = %Galician%                   ,850     ,1,,0456:0000040a,0409:00000409
00000437 = %Georgian%                  ,437     ,16,5,0437:00000437,0409:00000409,0419:00000419
00000407 = %German_Standard%            ,850     ,1,,0407:00000407,0409:00000409
00000807 = %German_Swiss%               ,850     ,1,,0807:00000807,0409:00000409
00000c07 = %German_Austrian%            ,850     ,1,,0c07:00000407,0409:00000409
00001007 = %German_Luxembourg%          ,850     ,1,,1007:00000407,0409:00000409
00001407 = %German_Liechtenstein%       ,850     ,1,,1407:00000407,0409:00000409
00000408 = %Greek%                      ,737     ,4,,0409:00000409,0408:00000408
00000447 = %Gujarati%                   ,437     ,15,,0409:00000409,0447:0000447,0439:00010439
0000040d = %Hebrew%                     ,862     ,12,,0409:00000409,040d:0000040d
00000439 = %Hindi%                      ,437     ,15,,0409:00000409,0439:00010439,0439:00000439
0000040e = %Hungarian%                  ,852     ,2,,040e:0000040e,0409:00000409
0000040f = %Icelandic%                  ,850     ,1,,040f:0000040f,0409:00000409
00000421 = %Indonesian%                 ,850     ,1,,0421:00000409,0409:00000409
00000410 = %Italian_Standard%           ,850     ,1,,0410:00000410,0409:00000409
00000810 = %Italian_Swiss%              ,850     ,1,,0810:00000410,0409:00000409
00000411 = %Japanese%                   ,932     ,7,,0411:e0010411
0000044b = %Kannada%                    ,437     ,15,,0409:00000409,044b:0000044b,0439:00010439
0000043f = %kazakh%                      ,866     ,5,,043f:0000043f,0409:00000409,0419:00000419
00000457 = %Konkani%                     ,437     ,15,,0409:00000409,0457:00000439
00000412 = %Korean%                     ,949     ,8,,0412:E0010412
;00000812 = %Korean_Johab%               ,1361    ,8,,0812:E0010412
00000440 = %Kyrgyz%                     ,866     ,5,,0440:00000440,0409:00000409
00000426 = %Latvian%                    ,775     ,3,,0426:00010426
00000427 = %Lithuanian%                 ,775     ,3,,0427:00010427
0000042f = %Macedonian%                 ,866     ,5,,042f:0000042f,0409:00000409
0000043e = %Malay_Malaysia%             ,850     ,1,,0409:00000409
0000083e = %Malay_Brunei_Darussalam%    ,850     ,1,,0409:00000409
0000044e = %Marathi%                    ,437     ,15,,0409:00000409,044e:0000044e,044e:00000439
00000450 = %Mongolian%                  ,866     ,5,,0450:00000450,0409:00000409
00000414 = %Norwegian_Bokmal%           ,850     ,1,,0414:00000414,0409:00000409
00000814 = %Norwegian_Nynorsk%          ,850     ,1,,0814:00000414,0409:00000409
00000415 = %Polish%                     ,852     ,2,,0415:00000415,0415:00010415,0409:00000409
00000416 = %Portuguese_Brazilian%       ,850     ,1,,0416:00000416,0409:00000409
00000816 = %Portuguese_Standard%        ,850     ,1,,0816:00000816,0409:00000409
00000446 = %Punjabi%                    ,437     ,15,,0409:00000409,0446:00000446,0439:00010439
00000418 = %Romanian%                   ,852     ,2,,0418:00000418,0409:00000409
00000419 = %Russian%                    ,866     ,5,,0419:00000419,0409:00000409
0000044f = %Sanskrit%                    ,437     ,15,,0409:00000409,044f:00000439
0000081a = %Serbian_Latin%              ,852     ,2,,081a:0000081a,0409:00000409
00000c1a = %Serbian_Cyrillic%           ,855     ,5,,0c1a:00000c1a,0409:00000409
0000041b = %Slovak%                     ,852     ,2,,041b:0000041b,0409:00000409
00000424 = %Slovenian%                  ,852     ,2,,0424:00000424,0409:00000409
0000040a = %Spanish_Traditional_Sort%   ,850     ,1,,040a:0000040a,0409:00000409
0000080a = %Spanish_Mexican%            ,850     ,1,,080a:0000080a,0409:00000409
00000c0a = %Spanish_Modern_Sort%        ,850     ,1,,0c0a:0000040a,0409:00000409
0000100a = %Spanish_Guatemala%          ,850     ,1,,100a:0000080a,0409:00000409
0000140a = %Spanish_Costa_Rica%         ,850     ,1,,140a:0000080a,0409:00000409
0000180a = %Spanish_Panama%             ,850     ,1,,180a:0000080a,0409:00000409
00001c0a = %Spanish_Dominican_Republic% ,850     ,1,,1c0a:0000080a,0409:00000409
0000200a = %Spanish_Venezuela%          ,850     ,1,,200a:0000080a,0409:00000409
0000240a = %Spanish_Colombia%           ,850     ,1,,240a:0000080a,0409:00000409
0000280a = %Spanish_Peru%               ,850     ,1,,280a:0000080a,0409:00000409
00002c0a = %Spanish_Argentina%          ,850     ,1,,2c0a:0000080a,0409:00000409
0000300a = %Spanish_Ecuador%            ,850     ,1,,300a:0000080a,0409:00000409
0000340a = %Spanish_Chile%              ,850     ,1,,340a:0000080a,0409:00000409
0000380a = %Spanish_Uruguay%            ,850     ,1,,380a:0000080a,0409:00000409
00003c0a = %Spanish_Paraguay%           ,850     ,1,,3c0a:0000080a,0409:00000409
0000400a = %Spanish_Bolivia%            ,850     ,1,,400a:0000080a,0409:00000409
0000440a = %Spanish_El_Salvador%        ,850     ,1,,440a:0000080a,0409:00000409
0000480a = %Spanish_Honduras%           ,850     ,1,,480a:0000080a,0409:00000409
00004c0a = %Spanish_Nicaragua%          ,850     ,1,,4c0a:0000080a,0409:00000409
0000500a = %Spanish_Puerto_Rico%        ,850     ,1,,500a:0000080a,0409:00000409
00000441 = %Swahili%                    ,437     ,1,,0409:00000409
0000041d = %Swedish%                    ,850     ,1,,041d:0000041d,0409:00000409
0000081d = %Swedish_Finland%            ,850     ,1,,081d:0000041d,0409:00000409
0000045a = %Syriac%                     ,720     ,13,,0409:00000409,045a:0000045a
00000449 = %Tamil%                  ,437     ,15,,0409:00000409,0449:00000449
00000444 = %Tatar%                    ,866    ,5,,0444:00000444,0409:00000409,0419:00000419
0000044a = %Telugu%                     ,437     ,15,,0409:00000409,044a:0000044a,0439:00010439
0000041e = %Thai%                       ,874     ,11,,0409:00000409,041e:0000041e
0000041f = %Turkish%                    ,857     ,6,,041f:0000041f,0409:0000041f
00000422 = %Ukrainian%                  ,866     ,5,,0422:00000422,0409:00000409
00000420 = %Urdu%                       ,720     ,13,,0420:00000420,0409:00000409
00000443 = %Uzbek_Latin%                ,857     ,6,5,0443:00000409,0843:00000843,0419:00000419
00000843 = %Uzbek_Cyrillic%             ,866     ,5,6,0843:00000843,0443:00000409,0419:00000419
0000042a = %Vietnamese%                 ,1258    ,14,,0409:00000409,042a:0000042a 