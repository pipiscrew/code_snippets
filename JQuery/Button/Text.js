//set button text
						$('#btn_editModalsave').text('update');
						
//read button text
					if ($('#btn_editModalsave').text() == 'save') {
						console.log()
						//normalize for dbase node (ID)
						episode = title.replace(/[^a-zA-Z0-9\\s]/g, "-").toLowerCase();
					}
					
//html
						<button id="btn_editModalsave" class="btn btn-lg btn-primary">
							update
						</button>
						
//or
					 	var x = $("#bntmodalLOGOUT_emergency").text().trim();
					 	if (x=="emergency"){