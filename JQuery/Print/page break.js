//http://davidwalsh.name/css-page-breaks


//css
@media all {
    .page-break { display: none; }
}
 
@media print {
    .page-break { display: block; page-break-before: always; }
}


//html
<h1>Page Title</h1>
<!-- content block -->
<!-- content block -->
<div class="page-break"></div>
<!-- content block -->
<!-- content block -->
<div class="page-break"></div>
<!-- content block -->
<!-- content -->