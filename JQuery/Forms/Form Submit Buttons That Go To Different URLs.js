//https://css-tricks.com/separate-form-submit-buttons-go-different-urls/
//https://www.w3schools.com/Tags/att_button_formaction.asp

<form name="form">

  <!-- inputs and stuff -->

  <input type="submit" onclick="javascript: form.action='/submit';">
  <input type="submit" onclick="javascript: form.action='/submit-2';"> 

</form>	

//or

<form action="/submit">
  
  <input type="submit" value="Submit">
  
  <input type="submit" value="Go Elsewhere" formaction="/elsewhere">
  
</form>