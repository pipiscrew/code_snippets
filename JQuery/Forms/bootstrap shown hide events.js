		// MODAL FUNCTIONALITIES [START]
		//when modal closed, hide the warning messages + reset
		$('#modaloCOMPETITION').on('hidden.bs.modal', function() {
			console.log('closed');
			//when close - clear elements
			$('#formoCOMPETITION').trigger("reset");

			$("#logoPREVIEW").attr("src", "img/emptyPIC.gif");

			//select 1st item on combo Categories
			$('#category').val('-Choose-');

			//refresh multi select
			$('#causes').multiselect('refresh');
			$('#causes').multiselect('rebuild');
			//rebuild - needed when user has put a filter

			//clear validator error on form
			validatoroCOMPETITION.resetForm();

			//jqTE
			$('#descr').jqteVal('');

			//set form texts for new record
			$('#bntSave_oCOMPETITION').text('save');
			$('#lblTitle_oCOMPETITION').text('New Contest');

			//restore to 1st tab!
			$('#tabContainerCOMP a:first').tab('show');

			unCAUSESunSelectALL();

			$("#TABoffer_promo_code").show();
			
			//enable elements if comes from edit
			enableElements(true);
		});

		//functionality when the modal already shown and its long when loaded scroll to top
		$('#modaloCOMPETITION').on('shown.bs.modal', function() {
			$(this).animate({
				scrollTop : 0
			}, 'slow');
		});
		// MODAL FUNCTIONALITIES [END]
		////////////////////////////////////////