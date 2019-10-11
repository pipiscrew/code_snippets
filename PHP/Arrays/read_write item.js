$devices = array();
//automatically add new array items
                $devices[] = "0";
                $devices[] = "1";
                $devices[] = "2";
                $devices[] = "3";
                $devices[] = "4";
                
//adjust value of item
  for ($i = 0; $i < count($tokens); $i++) {
                    $countArr += 1;
                    $devices[$countArr] = $tokens[$i]["token"];
                    
//get value from item
                    $devices[$i]