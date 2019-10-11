//https://github.com/TimSchlechter/bootstrap-tagsinput
//http://www.pipiscrew.com/2015/03/js-bootstrap-tagsinput/

<link rel="stylesheet" href="css/bootstrap-tagsinput.css"></link>
<script src="js/bootstrap-tagsinput.min.js"></script>
//<script src="js/typeahead.bundle.min.js"></script>


<style>
	.bootstrap-tagsinput { width: 100%; }
</style>

<div class='form-group'>
	<label>Keywords (hashtags) :</label><br>
	<input name='ad_keywords' value="Amsterdam,Washington,Sydney,Beijing,Cairo" data-role="tagsinput" class='form-control'>
</div>



//by js
$('[name=ad_keywords]').tagsinput('add', 'kiwi,tomato');