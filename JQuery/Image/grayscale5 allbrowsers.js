//http://www.karlhorky.com/2012/06/cross-browser-image-grayscale-with-css.html

img.grayscale {
    filter: url("data:image/svg+xml;utf8,&lt;svg xmlns=\'http://www.w3.org/2000/svg\'&gt;&lt;filter id=\'grayscale\'&gt;&lt;feColorMatrix type=\'matrix\' values=\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\'/&gt;&lt;/filter&gt;&lt;/svg&gt;#grayscale"); /* Firefox 10+, Firefox on Android */
    filter: gray; /* IE6-9 */
    -webkit-filter: grayscale(100%); /* Chrome 19+, Safari 6+, Safari 6+ iOS */
}

//To disable the effect again, apply:

img.grayscale.disabled {
    filter: url("data:image/svg+xml;utf8,&lt;svg xmlns=\'http://www.w3.org/2000/svg\'&gt;&lt;filter id=\'grayscale\'&gt;&lt;feColorMatrix type=\'matrix\' values=\'1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 1 0\'/&gt;&lt;/filter&gt;&lt;/svg&gt;#grayscale");
    -webkit-filter: grayscale(0%);
}