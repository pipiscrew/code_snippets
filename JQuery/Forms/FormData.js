        // you dont need to have a form to submit use FormData 
        // prepare FormData
        var formData = new FormData();
        formData.append('myfile', file);
        formData.append('ftp_filename', ftp_filename);
        formData.append('overwrite', overwrite); 
 
        xhr.send(formData);