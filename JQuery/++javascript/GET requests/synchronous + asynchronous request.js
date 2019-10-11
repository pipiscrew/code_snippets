//https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Synchronous_and_Asynchronous_Requests

//HTTP synchronous request
	var request = new XMLHttpRequest();
	request.open('GET', '/bar/foo.txt', false);  // `false` makes the request synchronous
	request.send(null);
	
	if (request.status === 200) {
	  console.log(request.responseText);
	}
	
	
//JQ AJAX asynchronous  request
				$.ajax({
					"type" : "GET",
					"url" : "http://www.random.org/integers/?num=1&min=" + from + "&max=" + to + "&col=1&base=10&format=plain&rnd=new",
					"success" : function(data, status, xhr) {
						//send_the_number_to_a_handler( parseInt( data ) );
					}
				});
				
				
//HTTP asynchronous  request
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "/bar/foo.txt", true);
	xhr.onload = function (e) {
	  if (xhr.readyState === 4) {
	    if (xhr.status === 200) {
	      console.log(xhr.responseText);
	    } else {
	      console.error(xhr.statusText);
	    }
	  }
	};
	xhr.onerror = function (e) {
	  console.error(xhr.statusText);
	};
	xhr.send(null);