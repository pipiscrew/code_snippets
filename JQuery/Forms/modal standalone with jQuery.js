//https://github.com/tutsplus/exploring-css-pseudo-elements/blob/master/backdrop.html
<!DOCTYPE html>
<html>
    <head>
        <title>::backdrop</title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    
        <style>
            html, body { font-family: sans-serif; font-size: 1.2em; color: #444; }
            button:focus { outline: 0; }
            .btnModal, .modalClose {
                padding: 10px;
                background-color: darkgreen;
                color: white;
                border: none;
                border-radius: 8px;
            }
            
            .container { width: 600px; margin: 0 auto; }
            
            dialog::backdrop {
                position: fixed;
                top: 0px; right: 0px; bottom: 0px; left: 0px;
                background: rgba(255, 0, 0, 0.8);
            }
        </style>
        
    </head>

    <body>
       <dialog id="dialog">
           <p>The ::backdrop Pseudo Element</p>
           <button class="modalClose">Close Modal</button>
       </dialog>
        <div class="container">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non quaerat, odio aut aperiam omnis praesentium voluptatem, a itaque eaque ea officiis alias, quis necessitatibus suscipit aspernatur officia corporis provident doloribus.</p>
            <p>Quasi, porro, pariatur! Ipsum, obcaecati error aliquam? Debitis qui ipsa nihil sint, iste autem optio. Eligendi mollitia itaque minus, unde aut libero laudantium? Iure quia, inventore eaque eius! Reprehenderit, officia.</p>
            <button class="btnModal">Open Modal Dialog</button>   
        </div>
    </body>
</html>

<script>
    var modal = document.getElementById("dialog");
    
    $(".btnModal").click(function() {
        modal.showModal();
    });
    
    $(".modalClose").click(function() {
        modal.close();
    });
</script>