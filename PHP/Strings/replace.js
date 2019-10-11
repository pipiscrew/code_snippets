$item = "<h6><a>{{videotitle}}</a></h6>";
$item = str_replace('{{videotitle}}', 'test', $item);


//or if we have the data in string
$no_of_paginations = ceil($count / $per_page);

$msg = "<li p='$no_of_paginations'><a href='#'>Last</a></li>";
