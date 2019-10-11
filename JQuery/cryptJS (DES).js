//https://code.google.com/archive/p/crypto-js/
//mirror https://github.com/sytelus/CryptoJS

//https://gist.github.com/joecliff/10948117

//transformed for DES :

	    var user = $('#user-handle').val();
	    var msg = $('#message-text').val();
	
		//encrypt
		var encrypted = CryptoJS.TripleDES.encrypt(msg, user)
		var wordArray = CryptoJS.enc.Utf8.parse(encrypted);
		var base64 = CryptoJS.enc.Base64.stringify(wordArray);
		console.log(base64);
		
		
		//decrypt
		var parsedWordArray = CryptoJS.enc.Base64.parse(base64);
		var parsedStr = parsedWordArray.toString(CryptoJS.enc.Utf8);
		
		var decrypted = CryptoJS.TripleDES.decrypt(parsedStr, user);
		console.log("parsed:", decrypted.toString(CryptoJS.enc.Utf8));