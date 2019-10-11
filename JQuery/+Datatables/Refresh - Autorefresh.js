//http://datatables.net/forums/discussion/75/is-it-posible-to-refresh-table/p1

//refresh
$("#Button1").click(function(){
	oTable.fnReloadAjax();
	//Also another way to do a simple refresh is to use: 
	//oTable.fnDraw(false)
});




//those of you looking to do the auto refresh, very easy:
//auto refresh 
$('#something').everyTime(10000, function() {
    oTable.fnReloadAjax(oTable.fnSettings());
});


//

