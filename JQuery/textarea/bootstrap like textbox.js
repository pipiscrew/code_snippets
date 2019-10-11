//http://jsbin.com/IlUdikiQ/1/edit?html,css,js,output
//http://stackoverflow.com/a/21058378

<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>JS Bin</title>


<style>
div[contenteditable]:focus {
  border: 1px solid rgb(86, 180, 239);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.05) inset, 0px 0px 8px rgba(82, 168, 236, 0.6);
}

div[contenteditable] {
  width: 97%;
  max-width: 280px;
  margin-right: 10px;
  
  font-family: Arial,sans-serif;
  
  -webkit-box-shadow: inset 0 1px 3px rgba(0,0,0,.05),0 1px 0 rgba(255,255,255,.075);
  box-shadow: inset 0 1px 3px rgba(0,0,0,.05),0 1px 0 rgba(255,255,255,.075);
  
  display: inline-block;
  padding: 4px;
  margin: 0;
  outline: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 3px;
  
  font-size: 13px;
  line-height: 20px;
}
</style>

</head>
<body>
  <div contenteditable="true">Username or email</div>
</body>
</html>
