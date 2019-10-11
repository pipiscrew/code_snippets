							$("select#category option").each(function() {
								this.selected = (this.text == snapshot.val().Cat);
							});