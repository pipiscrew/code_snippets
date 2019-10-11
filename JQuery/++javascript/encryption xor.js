//http://th.atguy.com/mycode/xor_js_encryption/

XOR Key: <input type="text" name="xor_key" value="6" size="4">
String to encrypt: <input type="text" name="str" size="16"></td><td colspan="2"><input type="button" onClick="xor_str()" value="Encrypt">
Encrypted string:&nbsp;&nbsp;<input type="text" name="res" size="16"></td><td><input type="button" onClick="decrypt_str()" value="Decrypt">

function xor_str()
{
	var to_enc = document.forms['the_form'].elements["str"].value;

	var xor_key=document.forms['the_form'].elements.xor_key.value
	var the_res="";//the result will be here
	for(i=0;i<to_enc.length;++i)
	{
		the_res+=String.fromCharCode(xor_key^to_enc.charCodeAt(i));
	}
	document.forms['the_form'].elements.res.value=the_res;
}

function decrypt_str()
{
	var to_dec=document.forms['the_form'].elements.res.value
	document.forms['the_form'].elements.dec_res.value="";

	var xor_key=document.forms['the_form'].elements.xor_key.value
	for(i=0;i<to_dec.length;i++)
	{
		document.forms['the_form'].elements.dec_res.value+=String.fromCharCode(xor_key^to_dec.charCodeAt(i));
	}
}