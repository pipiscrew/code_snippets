//html
	<input id='title' name='title' class='form-control' style="text-transform: uppercase;" placeholder='Competition Title'>
												
//js										

				//competition title accepts only A-Ζ Α-Ω without tonoys + uppercase by CSS @ element!
				$('#title').keypress(function(e) {
					if (((e.keyCode >= 940 && e.keyCode <= 943) || (e.keyCode >= 972 && e.keyCode <= 974)) || ((e.keyCode == 902 || e.keyCode == 908) || (e.keyCode >= 904 && e.keyCode <= 906) || (e.keyCode >= 910 && e.keyCode <= 911)))
						e.preventDefault();

				});

				$("#title").focusout(function() {
					var txt = $('#title').val().toUpperCase();

					txt = replaceAll("Ά", "Α",txt);
					txt = replaceAll("Ί", "Ι",txt);
					txt = replaceAll("Ό", "Ο",txt);
					txt = replaceAll("Ύ", "Υ",txt);
					txt = replaceAll("Ή", "Η",txt);
					txt = replaceAll("Ώ", "Ω",txt);
					txt = replaceAll("Έ", "Ε",txt);					

					$('#title').val(txt);
				});

				function replaceAll(find, replace, str) {
				  return str.replace(new RegExp(find, 'g'), replace);
				}