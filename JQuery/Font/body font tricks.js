//more at https://github.com/tutsplus/exploring-css-pseudo-elements/blob/master/first.html
<!DOCTYPE html>
<html>
    <head>
        <title>::first-letter and ::first-line</title>
    
        <style>
            html, body { font-family: sans-serif; font-size: 1.2em; color: #444; }
            
            p.letter::first-letter {
                font-size: 75px;
                font-weight: bold;
                font-family: fantasy;
                line-height: 0;
                margin-right: 3px;
            }
            
            p.line::first-line {
                font-weight: bold;
                color: green;
            }
        </style>
    </head>

    <body>
        <h1>::first-letter and ::first-line</h1>
        <p class="letter">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa possimus soluta saepe distinctio commodi magni laborum dolor natus, quisquam ad ipsum, alias quidem, dignissimos! Excepturi vitae cum, velit iure quae! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos deleniti est accusantium nostrum sunt nisi praesentium quaerat quos molestias, obcaecati fuga quisquam vero nobis impedit quae reiciendis quia, aspernatur molestiae!
        </p>
        <p class="line">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo autem inventore maiores placeat ea quos debitis rem in harum sapiente cum corporis, omnis consequatur sunt modi, ducimus ex suscipit optio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt eum consectetur eveniet doloremque, repudiandae dolor earum, dolores dolorum debitis omnis aliquam itaque totam. Provident dolore error dicta modi a, placeat.
        </p>
    </body>
</html>