//http://www.pipiscrew.com/2015/03/js-bootstrap-tagsinput/
//https://github.com/bassjobsen/Bootstrap-3-Typeahead
<script src="js/bootstrap3-typeahead.min.js"></script>

-dont add the taginput markup
-use

$('[name=aud_countries]').tagsinput({
  typeahead: {
    source: ['Amsterdam', 'Washington', 'Sydney', 'Beijing', 'Cairo']
  },
  freeInput: true
});


<div class='form-group'>
	<label>Countries :</label>
	<input type="text" name='aud_countries' class='form-control'>
</div>