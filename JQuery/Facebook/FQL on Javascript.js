//http://stackoverflow.com/questions/2966015/facebook-get-list-of-pages-that-a-user-is-admin-of
FB.api({method: 'fql.multiquery',
        access_token: <access_token>,
        queries: {
            query1: 'select page_id from page_admin where uid = ' + <uid>,
            query2: 'select page_id, name, page_url from page where page_id in (select page_id from #query1)'
        }
       }, function(queries){
           var pages = queries[1].fql_result_set;
       }}