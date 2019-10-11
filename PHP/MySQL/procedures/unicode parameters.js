//on phpMyAdmin, we find the procedure in tree > click it!
//on options combo, choose UTF8


//by default is ascii
//when a parameter needed to be Unicode, we add 'CHARSET utf8'
CREATE PROCEDURE ADD_CAUSECOMPANY26 (IN `fb_idVAR` VARCHAR(50), IN `mailVAR` VARCHAR(100), IN `addressVAR` VARCHAR(100) CHARSET utf8, IN `countryVAR` VARCHAR(2), IN `country_idVAR` VARCHAR(100), IN `logoVAR` VARCHAR(100), IN `telVAR` VARCHAR(100), IN `titleVAR` VARCHAR(100) CHARSET utf8, IN `fb_user_idVAR` VARCHAR(100), IN `ngoVAR` VARCHAR(100), IN `twitterVAR` VARCHAR(100) CHARSET utf8, IN `facebookVAR` VARCHAR(100) CHARSET utf8, IN `ccategoriesVAR` TEXT, IN `competitionsVAR` TEXT, IN `causesVAR` TEXT)
BEGIN 

  DECLARE x INT; 
  select id into x from fb_causescompanies where fb_id = fb_idVAR;

  IF (x > 0 ) THEN
	UPDATE fb_causescompanies
	SET mail = mail
		,address = addressVAR
		,country = countryVAR
		,country_id = country_idVAR
		,logo = logoVAR
		,tel = telVAR
		,title = titleVAR
		,fb_user_id = fb_user_idVAR
		,ngo = ngoVAR
		,twitter = twitterVAR
		,facebook = facebookVAR
		,ccategories = ccategoriesVAR
		,competitions = competitionsVAR
		,causes = causesVAR
	WHERE id = x;

ELSE
  
	INSERT INTO fb_causescompanies (
		fb_id
		,mail
		,address
		,country
		,twitter
		,logo
		,tel
		,title
		,fb_user_id
		,ngo
		,facebook
		,country_id
		,ccategories
		,competitions
		,causes
		)
	VALUES (
		fb_idVAR
		,mailVAR
		,addressVAR
		,countryVAR
		,twitterVAR
		,logoVAR
		,telVAR
		,titleVAR
		,fb_user_idVAR
		,ngoVAR
		,facebookVAR
		,country_idVAR
		,ccategoriesVAR
		,competitionsVAR
		,causesVAR
		);

  END IF;
  
END