//source http://www.skymem.com/
//author http://www.freesurveycreator.com/


 <!-- <script src="http://code.jquery.com/jquery-1.11.0.min.js"></script> -->

<style>
	.feedback-container {
	  z-index: 99 !important;
	}

	.feedback-container.dark {
	  background: #333 !important;
	  color: #fff !important;
	  border: 0 !important;
	}
	.feedback-container.light {
	  background: #f9f9f9 !important;
	  color: #333 !important;
	  border: 0 !important;
	}

	.feedback-container .success-notif {
	  height: 140px !important;
	  width: 100% !important;
	}

	.feedback-container .success-notif h3 {
	  color: #5bbd72 !important;
	  font-size: 24px !important;
	  text-align: center !important;
	  margin-bottom: 10px !important;
	  margin-top: 10px !important;
	}

	.feedback-container .success-notif p {
	  text-align: center !important;
	  font-size: 16px !important;
	}

	.feedback-container #feedback_form_839224 .m_choice {
	  margin: 0 10px 5px 10px !important;
	  padding: 5px 10px !important;
	  border-radius: 15px !important;
	}

	.feedback-container.light #feedback_form_839224 .m_choice {
	  background-color: #ddd !important;
	}

	.feedback-container.dark #feedback_form_839224 .m_choice {
	  background-color: #454545 !important;
	}

	.feedback-container #feedback_form_839224 .m_choice input[type=radio] {
	  width: 5% !important;
	  height: 14px !important;
	}

	.feedback-container #feedback_form_839224 .m_choice label {
	  width: 90% !important;
	  display: inline-block !important;
	  font-family: sans-serif, helvetica, arial !important;
	  cursor: pointer !important;
	  line-height: 20px !important;
	  height: 20px !important;
	  color: inherit !important;
	  margin-bottom: 0 !important;
	  font-weight: normal !important;
	  margin-top: 0 !important;
	}

	.feedback-container {
	  width: 320px;
	  position: fixed;
	  bottom: 0;
	  right: 100px;
	  box-sizing: border-box;
	  -moz-box-sizing: border-box;
	  border-top-right-radius: 5px;
	  border-top-left-radius: 5px;
	  font-family: sans-serif, helvetica, arial;
	  font-size: 14px;
	  box-shadow: 0px 0px 9px rgba(0, 0, 0, 0.7);
	}

	.feedback-container p {
	  font-family: sans-serif, helvetica, arial !important;
	  margin: 0 !important;
	  cursor: pointer !important;
	  text-align: center !important;
	  font-size: 14px !important;
	  padding: 10px 30px !important;
	  line-height: 20px !important;
	}

	.feedback-container.light p {
	  color: #333 !important;
	}

	.feedback-container.dark p {
	  color: #fff !important;
	}

	.feedback-container .minus {
	  position: absolute !important;
	  top: 10px !important;
	  right: 10px !important;
	  height: 20px !important;
	  cursor: pointer !important;
	  display: inline-block !important;
	  font-size: 20px !important;
	  line-height: 15px !important;
	}
	.feedback-container .interactive {
	  margin: 10px auto !important;
	  width: 290px !important;
	  display: block !important;
	  box-sizing: border-box !important;
	  -moz-box-sizing: border-box !important;
	  padding: 5px 8px !important;
	  font-size: 14px !important;
	  border-radius: 3px !important;
	  -moz-border-radius: 3px;
	  font-family: sans-serif, helvetica, arial !important;
	  color: #404040 !important;
	  border: 1px solid #bbb !important;
	  outline: none;
	  background: #f9f9f9 !important;
	}
	.feedback-container .submit-button {
	  padding: 5px 14px !important;
	  font-size: 14px !important;
	  cursor: pointer !important;
	  display: inline-block !important;
	  width: auto !important;
	  margin-left: 10px !important;
	  border-radius: 5px !important;
	  margin-bottom: 10px !important;
	  border: 0 !important;
	  line-height: 20px !important;
	}

	.feedback-container .fsc-logo {
	  font-size: 10px !important;
	  color: #999 !important;
	  position: absolute !important;
	  right: 20px !important;
	  text-decoration: none !important;
	  font-family: Helvetica, sans-serif !important;
	}

	.feedback-container .fsc-logo a {
	  color: #6989B5 !important;
	  font-size: inherit !important;
	}

	.feedback-container .submit-button:hover {
	  background: #ddd !important;
	}
	.feedback-container .submit-button:active {
	  box-shadow: inset 0px 3px 3px rgba(0, 0, 0, 0.29);
	}

	@media screen and (min-width: 320px) and (max-width: 500px) {
	  .feedback-container {
		width: 98%;
		left: 5px;
		right: 5px;
	  }

	  .feedback-container .submit-button {
		width: 290px !important;
		display: block !important;
		margin: 15px auto !important;
	  }
	}
</style>

<script>

/*
	//Loads the correct sidebar on window load,
	//collapses the sidebar on window resize.
	$(function() {
		$(window).bind("load resize", function() {
			console.log($(this).width())
			if ($(this).width() < 768) {
				$('div.sidebar-collapse').addClass('collapse')
			} else {
				$('div.sidebar-collapse').removeClass('collapse')
			}
		})
}) */

	var widgetVal = "506";
	var currentCookie = getCookie("survWidget");
	var currentUrl = window.location.href;

	if ( widgetVal != currentCookie && window.atob ) {
	  document.write("<style type=\"text/css\">\n\n.feedback-container {\n  z-index: 99 !important;\n}\n\n.feedback-container.dark {\n  background: #333 !important;\n  color: #fff !important;\n  border: 0 !important;\n}\n.feedback-container.light {\n  background: #f9f9f9 !important;\n  color: #333 !important;\n  border: 0 !important;\n}\n\n.feedback-container .success-notif {\n  height: 140px !important;\n  width: 100% !important;\n}\n\n.feedback-container .success-notif h3 {\n  color: #5bbd72 !important;\n  font-size: 24px !important;\n  text-align: center !important;\n  margin-bottom: 10px !important;\n  margin-top: 10px !important;\n}\n\n.feedback-container .success-notif p {\n  text-align: center !important;\n  font-size: 16px !important;\n}\n\n.feedback-container #feedback_form_839224 .m_choice {\n  margin: 0 10px 5px 10px !important;\n  padding: 5px 10px !important;\n  border-radius: 15px !important;\n}\n\n.feedback-container.light #feedback_form_839224 .m_choice {\n  background-color: #ddd !important;\n}\n\n.feedback-container.dark #feedback_form_839224 .m_choice {\n  background-color: #454545 !important;\n}\n\n.feedback-container #feedback_form_839224 .m_choice input[type=radio] {\n  width: 5% !important;\n  height: 14px !important;\n}\n\n.feedback-container #feedback_form_839224 .m_choice label {\n  width: 90% !important;\n  display: inline-block !important;\n  font-family: sans-serif, helvetica, arial !important;\n  cursor: pointer !important;\n  line-height: 20px !important;\n  height: 20px !important;\n  color: inherit !important;\n  margin-bottom: 0 !important;\n  font-weight: normal !important;\n  margin-top: 0 !important;\n}\n\n.feedback-container {\n  width: 320px;\n  position: fixed;\n  bottom: 0;\n  right: 100px;\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  border-top-right-radius: 5px;\n  border-top-left-radius: 5px;\n  font-family: sans-serif, helvetica, arial;\n  font-size: 14px;\n  box-shadow: 0px 0px 9px rgba(0, 0, 0, 0.7);\n}\n\n.feedback-container p {\n  font-family: sans-serif, helvetica, arial !important;\n  margin: 0 !important;\n  cursor: pointer !important;\n  text-align: center !important;\n  font-size: 14px !important;\n  padding: 10px 30px !important;\n  line-height: 20px !important;\n}\n\n.feedback-container.light p {\n  color: #333 !important;\n}\n\n.feedback-container.dark p {\n  color: #fff !important;\n}\n\n.feedback-container .minus {\n  position: absolute !important;\n  top: 10px !important;\n  right: 10px !important;\n  height: 20px !important;\n  cursor: pointer !important;\n  display: inline-block !important;\n  font-size: 20px !important;\n  line-height: 15px !important;\n}\n.feedback-container .interactive {\n  margin: 10px auto !important;\n  width: 290px !important;\n  display: block !important;\n  box-sizing: border-box !important;\n  -moz-box-sizing: border-box !important;\n  padding: 5px 8px !important;\n  font-size: 14px !important;\n  border-radius: 3px !important;\n  -moz-border-radius: 3px;\n  font-family: sans-serif, helvetica, arial !important;\n  color: #404040 !important;\n  border: 1px solid #bbb !important;\n  outline: none;\n  background: #f9f9f9 !important;\n}\n.feedback-container .submit-button {\n  padding: 5px 14px !important;\n  font-size: 14px !important;\n  cursor: pointer !important;\n  display: inline-block !important;\n  width: auto !important;\n  margin-left: 10px !important;\n  border-radius: 5px !important;\n  margin-bottom: 10px !important;\n  border: 0 !important;\n  line-height: 20px !important;\n}\n\n.feedback-container .fsc-logo {\n  font-size: 10px !important;\n  color: #999 !important;\n  position: absolute !important;\n  right: 20px !important;\n  text-decoration: none !important;\n  font-family: Helvetica, sans-serif !important;\n}\n\n.feedback-container .fsc-logo a {\n  color: #6989B5 !important;\n  font-size: inherit !important;\n}\n\n.feedback-container .submit-button:hover {\n  background: #ddd !important;\n}\n.feedback-container .submit-button:active {\n  box-shadow: inset 0px 3px 3px rgba(0, 0, 0, 0.29);\n}\n\n@media screen and (min-width: 320px) and (max-width: 500px) {\n  .feedback-container {\n    width: 98%;\n    left: 5px;\n    right: 5px;\n  }\n\n  .feedback-container .submit-button {\n    width: 290px !important;\n    display: block !important;\n    margin: 15px auto !important;\n  }\n}\n<\/style>");
	  document.write("<div class=\"feedback-container light\" id=\"widget_506\">\n  <div class=\"success-notif\" id=\"succ_notif_2971\" style=\"display: none;\">\n    <h3>Awesome<\/h3>\n    <p>Thanks for lending a hand<\/p>\n  <\/div>\n  <p class=\"action-call\" id=\"_3cl_\" onclick=\"toggleVisibility(\'feedback_form_839224\')\">Which type of data you want to extract from text?<span class=\"minus\">–<\/span><\/p>\n  <form\n    enctype=\"multipart/form-data\" onsubmit=\"AJAXSubmit(this); return false;\"\n    id=\"feedback_form_839224\"\n    style=\"display: none\"\n    method=\"post\"\n    action=\"http://www.freesurveycreator.com/domains/506/comments\"\n    name=\"a_feedback_form\"\n    data-form-id=\"506\">\n    <input\n      id=\"domain_id\"\n      name=\"comment[domain_id]\"\n      type=\"hidden\"\n      value=\"506\">\n    <input\n      id=\"comment_url\"\n      name=\"comment[url]\"\n      type=\"hidden\">\n\n      <input\n        class=\"interactive\"\n        id=\"feedback_email\"\n        name=\"comment[email]\"\n        placeholder=\"email (optional)\"\n        type=\"text\">\n      <textarea\n        class=\"interactive\"\n        id=\"feedback_text\"\n        name=\"comment[feedback]\"\n        placeholder=\"Let us know\"\n        rows=\"4\" required><\/textarea>\n\n\n    <button\n      class=\"interactive submit-button\"\n      name=\"commit\"\n      value=\"Submit\"\n      onclick=\"this.textContent = \'Submitting...\'\"\n      >Submit<\/button>\n\n      <span class=\"fsc-logo\">made with <a href=\"http://www.freesurveycreator.com\" target=\"_blank\">FSC<\/a><\/span>\n\n  <\/form>\n<\/div>");
	  window.onload = function() {
		document.getElementById('comment_url').setAttribute('value', currentUrl);
	  }
	}

	function getCookie(c_name) {
	  if (document.cookie.length > 0) {
		c_start = document.cookie.indexOf(c_name + "=");
		if (c_start != -1) {
		  c_start = c_start + c_name.length + 1;
		  c_end = document.cookie.indexOf(";", c_start);
		  if (c_end == -1) {
			c_end = document.cookie.length;
		  }
		  return unescape(document.cookie.substring(c_start, c_end));
		}
	  }
	  return "";
	}

	function createCookie(name, value, days) {
	  var expires;
	  if (days) {
		var date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		expires = "; expires=" + date.toGMTString();
	  } else {
		expires = "";
	  }
	  document.cookie = escape(name) + "=" + escape(value) + expires + "; path=/";
	}

	function AJAXSubmit (oFormElement) {
	  if (!oFormElement.action) { return; }
	  var oReq = new XMLHttpRequest();
	  oReq.onload = ajaxSuccess;
	  if (oFormElement.method.toLowerCase() === "post") {
		oReq.open("post", oFormElement.action, true);
		oReq.send(new FormData(oFormElement));
	  } else {
		var oField, sFieldType, nFile, sSearch = "";
		for (var nItem = 0; nItem < oFormElement.elements.length; nItem++) {
		  oField = oFormElement.elements[nItem];
		  if (!oField.hasAttribute("name")) { continue; }
		  sFieldType = oField.nodeName.toUpperCase() === "INPUT" ? oField.getAttribute("type").toUpperCase() : "TEXT";
		  if (sFieldType === "FILE") {
			for (nFile = 0; nFile < oField.files.length; sSearch += "&" + escape(oField.name) + "=" + escape(oField.files[nFile++].name));
		  } else if ((sFieldType !== "RADIO" && sFieldType !== "CHECKBOX") || oField.checked) {
			sSearch += "&" + escape(oField.name) + "=" + escape(oField.value);
		  }
		}
		oReq.open("get", oFormElement.action.replace(/(?:\?.*)?$/, sSearch.replace(/^&/, "?")), true);
		oReq.send(null);
	  }
	}

	function hideWidget() {
	  document.getElementById('widget_' + widgetVal).style.display = 'none';
	}

	function toggleVisibility(id) {
	   var e = document.getElementById(id);
	   if(e.style.display == 'block') {
		  e.style.display = 'none';
		}
	   else {
		  e.style.display = 'block';
		}
	}

	function ajaxSuccess () {
	  createCookie("survWidget", widgetVal, 30);
	  document.getElementById('succ_notif_2971').style.display = 'block';
	  document.getElementById('feedback_form_839224').style.display = 'none';
	  document.getElementById('_3cl_').style.display = 'none';
	  setTimeout( function() { hideWidget() }, 2000);
	}
</script>
<div class="feedback-container dark" id="widget_508"  style="display: none;">
  <div class="success-notif" id="succ_notif_2971" style="display: none;">
    <h3>Awesome</h3>
    <p>Thanks for lending a hand</p>
  </div>
  <p class="action-call" id="_3cl_" onclick="toggleVisibility('feedback_form_839224')">What are you trying to accomplish here?<span class="minus">–</span></p>
  <form enctype="multipart/form-data" onsubmit="AJAXSubmit(this); return false;" id="feedback_form_839224" style="display: block;" method="post" action="http://www.freesurveycreator.com/domains/508/comments" name="a_feedback_form" data-form-id="508">
    <input id="domain_id" name="comment[domain_id]" type="hidden" value="508">
    <input id="comment_url" name="comment[url]" type="hidden" value="http://www.skymem.com/faq">

      <input class="interactive" id="feedback_email" name="comment[email]" placeholder="email (optional)" type="text">
      <textarea class="interactive" id="feedback_text" name="comment[feedback]" placeholder="Let us know" rows="4" required=""></textarea>


    <button class="interactive submit-button" name="commit" value="Submit" onclick="this.textContent = 'Submitting...'">Submit</button>

      <span class="fsc-logo">made with <a href="http://www.freesurveycreator.com" target="_blank">FSC</a></span>

  </form>
</div>