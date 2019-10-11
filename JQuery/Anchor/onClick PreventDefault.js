//http://stackoverflow.com/a/8614559

function delete_image(e,fl){
	e.preventDefault();
    $.post("tab_event_testimonial_image_delete.php", {fl:fl}, function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
    });
}

<a href="#" onclick="delete_image(event,'x.jpg')">Delete</a>