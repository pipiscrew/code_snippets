window.history.go(-1);


/////////////////run once
    //go back after 5sec
    setTimeout(function(){
        window.location="x_details.php?showcontracts=1&id=<?= $_GET['id'] ?>";
    }, 5000); 