//http://codemirror.net/
//http://github.com/codemirror/CodeMirror/

//all referenced files include on github zip^

//sample [get / set value]
		<title>CodeMirror Demo</title>
		<meta charset="utf-8"/>
		 
		<link rel="stylesheet" href="codemirror.css">
		<script src="codemirror-compressed.js"></script>
		<script src="active-line.js"></script>
		<script src="javascript.js"></script>
		<script src="htmlembedded.js"></script>
		<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
		 
		        <script type="text/javascript">
		 
		            $(function() {
		 
		                //button click
		                $('#btn').on('click', function(e) {
		                    console.log(editor.getValue()); //get plain text
		                    //clear
		                    editor.setValue("");
		                    editor.clearHistory();
		                    //clear undo+redo
		                    console.log(editor.getValue()); //verify is cleared
		                });
		 
		            });
		        </script>
		 
		<h2>Demo</h2>
		        <button id="btn">
		            Read code & reset
		        </button>
		 
		<form><textarea id="code" name="code">
		    <head>
		    <h2>Demo</h2>
		    </head>
		 
		    function Grid(width, height) {
		      this.width = width;
		      this.height = height;
		      this.cells = new Array(width * height);
		    }
		</textarea></form>
		 
		//on page render
		    <script type="text/javascript">
		      var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
		      lineNumbers: true,
		      styleActiveLine: true,
		      matchBrackets: true
		    });
		    </script>