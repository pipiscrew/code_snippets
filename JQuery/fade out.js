//http://jsfiddle.net/Z6QJt/3/

<div id="Voicemail">
<input class="vinput" type="text" id="cid_name" />
<label class="vlabel">Your Number</label>
<input class="vinput" type="text" id="cid_number" />
<input class="light_button custom_button" type="submit" name="Voicemail" 
       onclick="send_call()" value="Leave A Voicemail" />
</div>
<div id="success-call" style="display:none;">
<p>You will receive a call momentarily</p>
</div>

<script>
    function send_call(){
        $("#Voicemail,#success-call").fadeToggle(1000);
    }
</script>





///or
function send_call(){
    $("#Voicemail,#success-call").fadeToggle();
    // other stuff
}