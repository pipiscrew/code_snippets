npm install cheerio

//example1 - locally
	var cheerio = require('cheerio'),
	    $ = cheerio.load('<h2 class="title">Hello world</h2>');
	
	$('h2.title').text('Hello there!');
	$('h2').addClass('welcome');
	
	$.html();
	//=> <h2 class="title welcome">Hello there!</h2>
	

//example2 - use request to grab source html and use cheerio selectors
//http://www.codeproject.com/Tips/701689/How-to-scrape-data-from-the-Web-using-Node-js
	request('http://www.reddit.com/', function(err,resp,body)
	{
		if(!err && resp.statusCode == 200)
		{
			var $ = cheerio.load(body);
			$('a.title', '#siteTable').each(function(){
				
				var url = this.attr('href');
				if(url.indexOf('i.imgur.com')!=-1)
				{
				urls.push(url);
				}
			}); 
	
	        for (var i=0;i<urls.length;i++)
			{
				request(urls[i]).pipe(fs.createWriteStream('img/' + i +'.jpg'));
			}
		// now we will close the curly braces and end our program	
		}
	}); 
	
//example3
//http://www.codeproject.com/Tips/702699/Web-scraping-with-Node-js

	var request = require('request');
	var cheerio = require('cheerio');
	
	var url = "http://www.imdb.com/chart/";
	
	  request({
	            "uri": url
	        }, function(err, resp, body){
			  var $ = cheerio.load(body);
			  
			  var strContent = "";
	          $('th:contains(Gross)').parents('table').find('tr').each(function(index,item){
	           if(index>0)
	           {
	              var tds = $(item).find('td');
	              strContent += $(tds.eq(1)).find('a').text().trim() + "," 
				  + tds.eq(2).text().trim() + "," + tds.eq(3).text().trim()+ "\r\n";
	           }
	           });
			   
	           console.log(strContent);
			}); 