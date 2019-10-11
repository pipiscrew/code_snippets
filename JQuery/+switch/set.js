$('[name=is_new]').bootstrapSwitch('state',1);

//or
$('[name=is_new]').bootstrapSwitch('state',true);


warning, when get values from dbase should be like :

//tested on tinyint + boolean is great!
$('[name=is_old]').bootstrapSwitch('state',parseInt(jArray[0]["is_old"]));