//http://stackoverflow.com/questions/368813/html-form-readonly-select-tag-input

//readonly - after selection
$('#selection').css('pointer-events','none');

^bug after selection can use the cursors!

//truly
$('div').find('input, textarea, select').attr('readonly', true);