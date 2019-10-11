//http://stackoverflow.com/questions/17293861/how-to-make-input-type-file-accept-only-these-types	
//http://stackoverflow.com/questions/17992586/allow-only-pdf-doc-docx-format-for-file-upload

//pdf/doc/docx/excel/powerpoint + images (needed for firefox compatibility)
<input class='form-control' type="file" name="datafile" size="40" accept="application/pdf,application/msword, application/vnd.ms-excel,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.slideshow,application/vnd.openxmlformats-officedocument.presentationml.presentation,,application/vnd.openxmlformats-officedocument.wordprocessingml.document , text/plain, application/pdf, image/*" required>


**warning, simple set the file extensions to common dialog, nohing else!!