//http://stackoverflow.com/a/13162319
function thousandSep(val) {
    return String(val).split("").reverse().join("")
                  .replace(/(\d{3}\B)/g, "$1,")
                  .split("").reverse().join("");
}
//working when 7540.00 done 7,540.00


//http://stackoverflow.com/questions/13162186/javascript-add-thousand-seperator-and-retain-decimal-place

function format(n, sep, decimals) {
    sep = sep || "."; // Default to period as decimal separator
    decimals = decimals || 2; // Default to 2 decimals

    return n.toLocaleString().split(sep)[0]
        + sep
        + n.toFixed(decimals).split(sep)[1];
}

//ex format(4567354.677623); // 4,567,354.68


