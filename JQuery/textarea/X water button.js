//http://stackoverflow.com/questions/20062218/how-do-i-clear-a-search-box-with-an-x-in-bootstrap-3
//http://plnkr.co/edit/c2710u?p=preview

//CSS
  <style>
    #searchinput {
      width: 200px;
    }

    #searchclear {
      position: absolute;
      right: 5px;
      top: 0;
      bottom: 0;
      height: 14px;
      margin: auto;
      font-size: 14px;
      cursor: pointer;
      color: #ccc;
    }
  </style>
  
//html
  <div class="btn-group">
    <input id="searchinput" type="search"
           class="form-control"
           placeholder="Type something..."
           value="">
    <span id="searchclear" class="glyphicon glyphicon-remove-circle"></span>
  </div>
  
  
//JS
 $(document).ready(function() {
 ////seach X button
      $('#client_users_search_txt').keyup(function() {
        $('#searchclear').toggle(Boolean($(this).val()));
      });
      $('#searchclear').toggle(Boolean($("#client_users_search_txt").val()));
      $('#searchclear').click(function() {
        $('#client_users_search_txt').val('').focus();
        $(this).hide();
      });
////seach X button
}