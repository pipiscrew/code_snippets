//http://www.w3resource.com/mysql/string-functions/mysql-substring-function.php

select push_title, SUBSTRING(push_text, 1, 100) as push_text, user_count, date_created from pushes order by date_created DESC