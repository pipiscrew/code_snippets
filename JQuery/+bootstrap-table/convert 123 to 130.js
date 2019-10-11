//v1.3.0
function queryParamsWP_POSTS(params)
{
    var q = {
        "limit": params.limit,
        "offset": params.offset,
        "search": params.search,
        "name": params.sort,
        "order": params.order
    };
 
    return q;
}


//v1.2.3
function queryParamsWP_POSTS(params)
{
    var q = {
        "limit": params.pageSize,
        "offset": params.pageSize * (params.pageNumber - 1),
        "search": params.searchText,
        "name": params.sortName,
        "order": params.sortOrder
    };
 
    return q;
}

