//functions 1
  function GetCookie(cookie_name)
  {
    if (document.cookie.length>0)
      {
      cookie_start=document.cookie.indexOf(cookie_name + "=");
      if (cookie_start!=-1)
        { 
        cookie_start=cookie_start + cookie_name.length+1; 
        cookie_end=document.cookie.indexOf(";",cookie_start);
        if (cookie_end==-1) cookie_end=document.cookie.length;
        return unescape(document.cookie.substring(cookie_start,cookie_end));
        } 
      }
    return "";
  }
  
  /**
  * Setzt die Cookiewerte im Formular
  */
  function SetCookieValues()
  {
   document.DAFORM.asd.value = GetCookie("asd");


  }


  /**
  * Liest die Informationen aus dem Formular und speichert diese    
  */
  function SetCookies()
  {
   cookie_asd = 'asd=' + escape(document.DAFORM.asd.value);
   document.cookie = cookie_asd;

      
  }
  
  
//functions 2
var currentCookie = getCookie("survWidget");
var widgetVal = "506";
if ( widgetVal != currentCookie && window.atob ) { 
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