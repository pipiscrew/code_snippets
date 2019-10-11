//http://blog.dmbcllc.com/cross-browser-javascript-copy-and-paste/

Trapping CTRL-C and CTRL-V
function keyBoardListener(evt) {
    if (evt.ctrlKey) {
        switch(evt.keyCode) {
            case 67: // c
                copy(evt.target);
                break;
            case 86: // v
                paste(evt.target);
                break;
        }
    }
}
 
document.getElementById('element1')
    .addEventListener('keydown', keyBoardListener);
document.getElementById('element2')
    .addEventListener('keydown', keyBoardListener);

function paste(target) {
   if (window.clipboardData) {
        target.innerText = window.clipboardData
            .getData('Text');
        return;
    }
}
 
function copy(target) {
    // standard way of copying
    var textArea = document.createElement('textarea');
    textArea.setAttribute
        ('style','width:1px;border:0;opacity:0;');
    document.body.appendChild(textArea);
    textArea.value = target.innerHTML;
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
}