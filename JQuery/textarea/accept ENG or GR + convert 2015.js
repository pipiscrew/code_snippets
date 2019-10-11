<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />

<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>

		<script type="text/javascript">
		
		
/**
 * @author Triantafillos Karayiannis (Trian Karayiannis)
 * @email triankar@gmail.com
 * source https://tickets.trainose.gr/dromologia/includes/_static.js.php
 */

		var go_latin=true;

		var vp_w3 = {
						fixInput : function(field, allowWhitespace) {

							if (go_latin)
								trainose.util.toUCLatin(field, allowWhitespace);
							else
								trainose.util.toUCGreek(field, allowWhitespace);
						}
					}
					
					
		if (typeof(trainose) == 'undefined') var trainose = {};

		trainose.util = {

			fixSta8moInput : function(field) {
				var val = field.val().toUpperCase();
				var newVal = '';
				for (var e = 0; e < val.length; e++) {
					var c = val.charAt(e);
					newVal += /[Α-Ω0-9]/.test(c) ? c : (typeof(this.substitutionTable[c]) != 'undefined' ? this.substitutionTable[c] : '');
				}
				newVal = newVal.replace(/^[a-zA-Z0-9]/, '');
				field.val(newVal);
			},
			toUCGreek : function(field, allowWhitespace) {
				var val = field.val().toUpperCase();
				if (typeof(allowWhitespace) != 'boolean') allowWhitespace = false;
				var regex = allowWhitespace ? /[Α-Ω]|\s|[0-9]/ : /[Α-Ω]|[0-9]/;
				var newVal = '';
				for (var e = 0; e < val.length; e++) {
					var c = val.charAt(e);
					newVal += regex.test(c) ? c : (typeof(this.substitutionTable[c]) != 'undefined' ? this.substitutionTable[c] : '');
				}
				field.val(newVal);
			},
			toUCLatin : function(field, allowWhitespace) {
				var val = field.val().toUpperCase();
				if (typeof(allowWhitespace) != 'boolean') allowWhitespace = false;
				var regex = allowWhitespace ? /[A-Z]|\s|[0-9]/ : /[A-Z]|[0-9]/;
				var newVal = '';
				for (var e = 0; e < val.length; e++) {
					var c = val.charAt(e);
					newVal += regex.test(c) ? c : (typeof(this.substitutionTableLatin[c]) != 'undefined' ? this.substitutionTableLatin[c] : '');
				}
				//newVal = newVal.replace(/^[α-ωΑ-Ω]/, '');
				field.val(newVal);
			},
			fixTrenoInput : function(field) {
				var val = field.val().toUpperCase();
				var newVal = '';
				for (var e = 0; e < val.length; e++) {
					var c = val.charAt(e);
					newVal += /[Α-Ω0-9]/.test(c) ? c : (typeof(this.substitutionTable[c]) != 'undefined' ? this.substitutionTable[c] : '');
				}
				newVal = newVal.replace(/^[a-zA-Z]/, '');
				field.val(newVal);
			},
			fixClass : function(field) {
				var val = field.val().toUpperCase();
				var nval = 'Β';
				var status = true;
				if  (val == 'a' || val == 'A' || val == 'α' || val == 'Α' || val == 1)
					nval = 'Α';
				else if (val == 'b' || val == 'B' || val == 'β' || val == 'Β' || val == 2)
					nval = 'Β';
				else
					status = false;
				field.val(nval);
				return status;
			},
			substitutionTable : {
				Q : '' , W : 'Σ', E : 'Ε', R : 'Ρ', T : 'Τ', Y : 'Υ', U : 'Θ', I : 'Ι', O : 'Ο', P : 'Π',
				A : 'Α', S : 'Σ', D : 'Δ', F : 'Φ', G : 'Γ', H : 'Η', J : 'Ξ', K : 'Κ', L : 'Λ',
				Z : 'Ζ', X : 'Χ', C : 'Ψ', V : 'Ω', B : 'Β', N : 'Ν', M : 'Μ'
			},
			substitutionTableLatin : {
				';' : 'Q' , ς : 'W', Ε : 'E', Ρ : 'R', Τ : 'T', Υ : 'Y', Θ : 'U', Ι : 'I', Ο : 'O', Π : 'P',
				Α : 'A', Σ : 'S', Δ : 'D', Φ : 'F', Γ : 'G', Η : 'H', Ξ : 'J', Κ : 'K', Λ : 'L',
				Ζ : 'Z', Χ : 'X', Ψ : 'C', Ω : 'V', Β : 'B', Ν : 'N', Μ : 'M'
			},
			shortDate : function(date) {
				date += '';
				var m = date.substr(4,2);
				var d = date.substr(6);
				return d + '/' + m;
			},
			fixWra : function(wra) {
				if (wra == '' || typeof(wra) == 'undefined') return '';
				wra += '';
				var p = wra.split('.');
				if (typeof(p[1]) == 'undefined') p[1] = '00';
				return (p[0].length < 2 ? "0" + p[0] : p[0]) + ':' + (p[1].length < 2 ? p[1] + '0' : p[1]);
			},
			numericDate2unixTS : function(date, time) {
				if (typeof(date) == 'undefined' || date == null) return null;
				if (typeof(date) != 'string') date += '';
				if (typeof(time) == 'undefined') time = '0.0';
				var date = date;
				var y = date.substr(0, 4);
				var m = date.substr(4, 2) - 1;
				var d = date.substr(6, 2);
				var time = time.split('.');
				if (time.length == 1) time[1] = 0;
				var h = time[0] == '' ? 0 : time[0];
				var e = time[1].length == 1 ? time[1] * 10 : time[1];
				var then = new Date(y, m, d, h, e, 0, 0);
				return then.getTime();
			}, // return TS in milliseconds
			
			numericDate2US : function(date, separator) {
				if (typeof(separator) != 'string')
					separator = '-'
				date += '';
				if (date.indexOf('-') != -1)
					return date;
				var y = date.substr(0, 4);
				var m = date.substr(4, 2);
				var d = date.substr(6, 2);
				
				return y + separator + m + separator + d;
			}
		}



		// Credits: http://www.quirksmode.org/js/detect.html
		trainose.util.browserDetect = {
			init: function () {
				this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
				this.version = this.searchVersion(navigator.userAgent)
					|| this.searchVersion(navigator.appVersion)
					|| "an unknown version";
				this.OS = this.searchString(this.dataOS) || "an unknown OS";
			},
			searchString: function (data) {
				for (var i=0;i<data.length;i++)	{
					var dataString = data[i].string;
					var dataProp = data[i].prop;
					this.versionSearchString = data[i].versionSearch || data[i].identity;
					if (dataString) {
						if (dataString.indexOf(data[i].subString) != -1)
							return data[i].identity;
					}
					else if (dataProp)
						return data[i].identity;
				}
			},
			searchVersion: function (dataString) {
				var index = dataString.indexOf(this.versionSearchString);
				if (index == -1) return;
				return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
			},
			dataBrowser: [
				{
					string: navigator.userAgent,
					subString: "Chrome",
					identity: "Chrome"
				},
				{string: navigator.userAgent,
					subString: "OmniWeb",
					versionSearch: "OmniWeb/",
					identity: "OmniWeb"
				},
				{
					string: navigator.vendor,
					subString: "Apple",
					identity: "Safari",
					versionSearch: "Version"
				},
				{
					prop: window.opera,
					identity: "Opera"
				},
				{
					string: navigator.vendor,
					subString: "iCab",
					identity: "iCab"
				},
				{
					string: navigator.vendor,
					subString: "KDE",
					identity: "Konqueror"
				},
				{
					string: navigator.userAgent,
					subString: "Firefox",
					identity: "Firefox"
				},
				{
					string: navigator.vendor,
					subString: "Camino",
					identity: "Camino"
				},
				{		// for newer Netscapes (6+)
					string: navigator.userAgent,
					subString: "Netscape",
					identity: "Netscape"
				},
				{
					string: navigator.userAgent,
					subString: "MSIE",
					identity: "Explorer",
					versionSearch: "MSIE"
				},
				{
					string: navigator.userAgent,
					subString: "Gecko",
					identity: "Mozilla",
					versionSearch: "rv"
				},
				{ 		// for older Netscapes (4-)
					string: navigator.userAgent,
					subString: "Mozilla",
					identity: "Netscape",
					versionSearch: "Mozilla"
				}
			],
			dataOS : [
				{
					string: navigator.platform,
					subString: "Win",
					identity: "Windows"
				},
				{
					string: navigator.platform,
					subString: "Mac",
					identity: "Mac"
				},
				{
					   string: navigator.userAgent,
					   subString: "iPhone",
					   identity: "iPhone/iPod"
				},
				{
					   string: navigator.userAgent,
					   subString: "iOS",
					   identity: "iPhone/iPod"
				},
				{
					string: navigator.platform,
					subString: "Linux",
					identity: "Linux"
				}
			]

		}
					
			$(function() {
				

				
			});
		</script>
	</head>
	
	<body>
		
		
		
		<input type="text" name="onoma" onkeyup="vp_w3.fixInput( $(this), true );">

		
		
	</body>
</html>
