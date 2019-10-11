//if you need to get compiled
foreach($objArr as $ad) {

$template =  <<<EOT
<div class="col-sm-6">
<div class="card">
<div class="float-left" style="color:red">$ad->rss_date
<div class="float-right" style="color:red">$ad->rss_price</div>
</div>
    <div class="card-body">
    <h5 class="card-title">$ad->rss_title</h5>
    <p class="card-text">$ad->rss_descr</p>
    <a href="$ad->rss_link" class="btn btn-primary">Details</a>
    </div>
</div>
</div>
EOT;

echo $template;

}

//without hassle
$sData = <<<'DATA'
        <li class="span3">
        <div class='thumbnail'>
            <img data-src="holder.js/300x200" alt="300x200"  src="http://img.youtube.com/vi/{{videoid}}/mqdefault.jpg">
            <div class="caption">
                <h6><a href="">{{videotitle}}</a></h6>
                <p>
                    {{descr}}
                </p>
            </div>
        </div>
    </li>
DATA;


//2nd way https://stackoverflow.com/a/1848974
    $itemTemplate = <<<EOD
                                <li class="span3">
                                    <div class="thumbnail">
                                        <img data-src="holder.js/300x200" alt="300x200"  src="http://img.youtube.com/vi/{{videoid}}/mqdefault.jpg">
                                        <div class="caption">
                                            <h6><a href="">{{videotitle}}</a></h6>
                                            <p>
                                                {{descr}}
                                            </p>
                                        </div>
                                    </div>
                                </li>
EOD;