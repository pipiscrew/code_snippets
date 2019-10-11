//http://www.codeproject.com/Articles/702051/40-important-HTML-5-Interview-questions-with-answe

To create a worker thread we need to pass the JavaScript file name and create the worker object.


var worker = new Worker("MyHeavyProcess.js");  
To send message to the worker object we need to use “PostMessage” , below is the code for the same.

 
worker.postMessage(); 
When the worker thread sends data we get it in the “OnMessage” event on the callers end.

 
worker.onmessage = function (e) 
{
document.getElementById("txt1").value = e.data;
}; 