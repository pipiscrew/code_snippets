//http://stackoverflow.com/questions/2825856/html-button-to-not-submit-form

That button needs to be of type "button" in order to not submit.
(otherwise without type, the form triggers $("#formadbook_companiesFORM").submit(function(e))
<button type='button'>My Button</button>


//where the submit
<button id="btn_company_details_save"  class="btn btn-default btn-danger" type="submit" name="submit"><span class="glyphicon glyphicon-floppy-disk"></span> αποθήκευση</button>