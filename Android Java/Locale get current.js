//http://stackoverflow.com/a/3660245
String locale = c.getResources().getConfiguration().locale.getDisplayCountry();
aka United States

////////////

		Locale current = getResources().getConfiguration().locale;
		current.toString();

//as function
	public static String getPhoneLocale(Context c)
	{
		Locale current = c.getResources().getConfiguration().locale;
		
		String lng = current.toString().toUpperCase();
		
		if (lng.startsWith("EN"))
			lng="EN";
		else 
			lng=lng.substring(3);
		
		return lng;
	
	}
	
//http://stackoverflow.com/questions/7973023/what-is-the-list-of-supported-languages-locales-on-android
//https://bugzilla.mozilla.org/show_bug.cgi?id=596004

Language / Locale                 Supported since version

English, US (en_US)               1.1
German, Germany (de_DE)           1.1
Chinese, PRC (zh_CN)              1.5
Chinese, Taiwan (zh_TW)           1.5
Czech, Czech Republic (cs_CZ)     1.5
Dutch, Belgium (nl_BE)            1.5
Dutch, Netherlands (nl_NL)        1.5
English, Australia (en_AU)        1.5
English, Britain (en_GB)          1.5
English, Canada (en_CA)           1.5
English, New Zealand (en_NZ)      1.5
English, Singapore(en_SG)         1.5
French, Belgium (fr_BE)           1.5
French, Canada (fr_CA)            1.5
French, France (fr_FR)            1.5
French, Switzerland (fr_CH)       1.5
German, Austria (de_AT)           1.5
German, Liechtenstein (de_LI)     1.5
German, Switzerland (de_CH)       1.5
Italian, Italy (it_IT)            1.5
Italian, Switzerland (it_CH)      1.5
Japanese (ja_JP)                  1.5
Korean (ko_KR)                    1.5
Polish (pl_PL)                    1.5
Russian (ru_RU)                   1.5
Spanish (es_ES)                   1.5
Arabic, Egypt (ar_EG)             2.3
Arabic, Israel (ar_IL)            2.3
Bulgarian, Bulgaria (bg_BG)       2.3
Catalan, Spain (ca_ES)            2.3
Croatian, Croatia (hr_HR)         2.3
Danish, Denmark(da_DK)            2.3
English, India (en_IN)            2.3
English, Ireland (en_IE)          2.3
English, Zimbabwe (en_ZA)         2.3
Finnish, Finland (fi_FI)          2.3
Greek, Greece (el_GR)             2.3
Hebrew, Israel (iw_IL)*           2.3
Hindi, India (hi_IN)              2.3
Hungarian, Hungary (hu_HU)        2.3
Indonesian, Indonesia (in_ID)*    2.3
Latvian, Latvia (lv_LV)           2.3
Lithuanian, Lithuania (lt_LT)     2.3
Norwegian-Bokmol, Norway(nb_NO)   2.3
Portuguese, Brazil (pt_BR)        2.3
Portuguese, Portugal (pt_PT)      2.3
Romanian, Romania (ro_RO)         2.3
Serbian (sr_RS)                   2.3
Slovak, Slovakia (sk_SK)          2.3
Slovenian, Slovenia (sl_SI)       2.3
Spanish, US (es_US)               2.3
Swedish, Sweden (sv_SE)           2.3
Tagalog, Philippines (tl_PH)      2.3
Thai, Thailand (th_TH)            2.3
Turkish, Turkey (tr_TR)           2.3
Ukrainian, Ukraine (uk_UA)        2.3
Vietnamese, Vietnam (vi_VN)       2.3