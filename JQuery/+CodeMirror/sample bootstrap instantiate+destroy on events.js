<script>
 
//on modal shown instantiate codemirror
var page_flow_code_1;
var page_flow_code_2;
//on modal closed destroy (convert to textarea)
 
function destroy_codemirror(editor){
        //http://stackoverflow.com/a/16605148
        editor.setValue("");
        editor.clearHistory();
 
        //http://stackoverflow.com/a/18829236
        editor.toTextArea(); //convert back to textarea
}
 
//jQ - on render
$(function (){
    ////////////////////////////////////////
    // MODAL FUNCTIONALITIES [START]
    //when modal closed, hide the warning messages + reset
    $('#modalPAGE_FLOW_ELEMENTS').on('hidden.bs.modal', function() {
        //when close - clear elements
        $('#formPAGE_FLOW_ELEMENTS').trigger("reset");
 
        //clear validator error on form
        validatorPAGE_FLOW_ELEMENTS.resetForm();
 
        //reset codemirror
        destroy_codemirror(page_flow_code_1);
        destroy_codemirror(page_flow_code_2);
    });
 
    //functionality when the modal already shown and its long, when reloaded scroll to top
    $('#modalPAGE_FLOW_ELEMENTS').on('shown.bs.modal', function() {
        $(this).animate({
            scrollTop : 0
        }, 'slow');
 
        page_flow_code_1 = CodeMirror.fromTextArea(document.getElementById("page_flow_code_1"), {
            lineNumbers: true,
            styleActiveLine: true,
            matchBrackets: true
        }); 
 
        page_flow_code_2 = CodeMirror.fromTextArea(document.getElementById("page_flow_code_2"), {
            lineNumbers: true,
            styleActiveLine: true,
            matchBrackets: true
        });
    });
    // MODAL FUNCTIONALITIES [END]
    ////////////////////////////////////////
    
    //jQ submit form
	$('#formPAGE_FLOW_ELEMENTS').submit(function(e) {
	    e.preventDefault();
	 
	    ////////////////////////// validation
	    var form = $(this);
	    form.validate();
	 
	    if (!form.valid())
	        return;
	    ////////////////////////// validation
	 
	    var postData = $(this).serializeArray();
	    var formURL = $(this).attr("action");
	 	
	 	postData.push({name: "code1", value : JSON.stringify(page_flow_code_1.getValue())});
	 	postData.push({name: "code2", value : JSON.stringify(page_flow_code_2.getValue())});
	 	.
	 	.
	 }
	 
	//edit button - read record
	function query_PAGE_FLOW_ELEMENTS_modal(rec_id){
		loading.appendTo(document.body);
		
	    $.ajax(
	    {
	        url : "tab_page_flow_elements_fetch.php",
	        type: "POST",
	        data : { page_flow_element_id : rec_id },
	        success:function(data, textStatus, jqXHR)
	        {
				loading.remove();
				
	        	if (data!='null')
				{
					$('[name=page_flow_code_1]').val(JSON.parse(data.page_flow_code_1));
					$('[name=page_flow_code_2]').val(JSON.parse(data.page_flow_code_2));
		.
		.
		.
	}
					
<body>
<form id="formPAGE_FLOW_ELEMENTS" method="post" action="x_save.php">
    <textarea id="page_flow_code_1" name="page_flow_code_1"></textarea>
    <textarea id="page_flow_code_2" name="page_flow_code_2"></textarea>
</form>
</body>