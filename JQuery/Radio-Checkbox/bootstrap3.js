//http://stackoverflow.com/a/25920026
//http://getbootstrap.com/javascript/#buttons
//Bootstrap 3 has options to create toggle buttons based on checkboxes or radio buttons: http://getbootstrap.com/javascript/#buttons

//Checkboxes
<div class="btn-group" data-toggle="buttons">
  <label class="btn btn-primary active">
    <input type="checkbox" checked> Option 1 (pre-checked)
  </label>
  <label class="btn btn-primary">
    <input type="checkbox"> Option 2
  </label>
  <label class="btn btn-primary">
    <input type="checkbox"> Option 3
  </label>
</div>


//Radio buttons
<div class="btn-group" data-toggle="buttons">
  <label class="btn btn-primary active">
    <input type="radio" name="options" id="option1" checked> Option 1 (preselected)
  </label>
  <label class="btn btn-primary">
    <input type="radio" name="options" id="option2"> Option 2
  </label>
  <label class="btn btn-primary">
    <input type="radio" name="options" id="option3"> Option 3
  </label>
</div>
For these to work you must initialize .btns with Bootstrap's Javascript:

$('.btn').button();


//get value
//http://stackoverflow.com/a/29655400
$('label > input[type=checkbox]').on('change', function () {
    console.log($(this).is(':checked'));
});