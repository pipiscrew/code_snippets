//where $causes is the array!

		 foreach ( $causes as $causeVAL )
		 {
			 $message .= '\t'.$causeVAL .'<br>';
		 }
		 
		 
//when has 2xFOR
   foreach ($this->routes as $route => $path) {
        $continue = 0;

        ...

        // Continue if route and segment count do not match.
        if (count($route_segments) != $count) {
            $continue = 12;
            continue;
        }

        // Continue if no segment match is found.
        for($i=0; $i < $count; $i++) {
            if ($route_segments[$i] != $segments[$i] && ! preg_match('/^\x24[0-9]+$/', $route_segments[$i])) {
                $continue = 34;
       -->         continue;
            }
        }

        echo $continue; die(); // Prints out 34
        
        
needs to use:
continue 2;

//http://stackoverflow.com/a/4270127/1320686