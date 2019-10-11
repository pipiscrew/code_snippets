		<script type="text/javascript" src="js/mustache.js"></script>
       //table rows
        var this_content = "<tr><td>{{episode_title}}</td><td>{{voteCounter}}</td><td>{{average}}</td><td>" +
        "<button id='btn_edit' data-name='{{recID}}' class='btn-flat primary' style='margin-right:3px'>edit</button><button id='btn_delete' 
        data-name='{{recID}}' data-ename='{{episode_title}}' class='btn-flat gray' style='margin-right:3px'>delete</button><button id='btn_stat'
        data-name='{{recID}}' class='btn-flat danger' style='margin-right:3px'>statistics</button><div id='switchEPISODE' data-name='{{recID}}'
        class='make-switch'><input type='checkbox' " + (episodeDetails.val().enabled == "1" ? " checked " : " unchecked ") + " /></div></td></tr>";

        var params = {
            episode_title : episodeDetails.val().title,
            episode_descr : episodeDetails.val().description,
            voteCounter : voteCounter,
            average : average,
            recID : recID
        };

        new_contents = Mustache.render(this_content, params) + new_contents;