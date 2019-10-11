//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString

//the old way :
function date_formatter(value, row) {
    var t = value.split(/[- :]/);
    var dt = new Date(t[0], t[1]-1, t[2], t[3]||0, t[4]||0, t[5]||0);
    return dt.getDate() + "/" + (dt.getMonth() + 1) + "/" + dt.getFullYear();
}


//the new way :
function date_formatter(value, row) {
    if (value==null)
        return "";
 
    var date = new Date(value);
    var options = {
        year: "numeric", month: "2-digit",
        day: "2-digit", hour: "2-digit", minute: "2-digit", hour12: false
    };
 
    return(date.toLocaleString("en-GB", options));
}

locales:
af-ZA
ca-CA
cs-CZ
da-DK
de-CH
de-DE
el-GR
en-GB
en-US
es-AR
es-ES
es-VE
et-EE
fi-FI
fr-FR
he-IL
hu-HU
it-IT
ja-JP
nl-NL
no-NO
pl-PL
pt-BR
pt-PT
ru-RU
sk-SK
sl-SI
sv-SE
tr-TR
uk-UA
zh-CH