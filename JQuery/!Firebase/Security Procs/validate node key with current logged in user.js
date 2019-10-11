        "$user": {
              ".read": "$user == auth.id", //user can read his record only
              ".write": "$user == auth.id" //user can write his record only
        }