//http://stackoverflow.com/questions/4323411/how-can-i-write-to-console-in-php
function debug_to_console( $data ) {

    if ( is_array( $data ) )
        $output = "<script>console.log( 'Debug Objects: " . implode( ',', $data) . "' );</script>";
    else
        $output = "<script>console.log( 'Debug Objects: " . $data . "' );</script>";

    echo $output;
}


//Then you can use it like this

debug_to_console( "Test" );