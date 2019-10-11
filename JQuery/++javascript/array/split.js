            var vimeo = e[it]["vimeo"]
            var vimeoArray = vimeo.split(',');
            
            if (vimeoArray.length > 1)
            
//example
            var vimeo = e[it]["vimeo"]
            var vimeoArray = vimeo.split(',');
            var vimeoOutput=''; 
              var vimeoLinkAnchorTemplate = "<a href='http://www.vimeo.com/{{id}}' target='{{id}}'>{{no}} </a>";
             
              for (var vimeoItem=0; vimeoItem<vimeoArray.length; vimeoItem++){
                  if (vimeoArray[vimeoItem].trim().length == 0)
                    continue;
                    
                  vimeoOutput += vimeoLinkAnchorTemplate.replace(/{{id}}/g,vimeoArray[vimeoItem].replace(',','').trim());
                  vimeoOutput = vimeoOutput.replace('{{no}}',vimeoItem+1);
              }

            inj+="<td>"+ vimeoOutput +"</td>";
            
            

//needs -1, when we have test|test2|
						 var valsBefore = $('#causes').data('before');
						 var causesArray = valsBefore.split('|');
			              for (var c=0; c<causesArray.length-1; c++){
			              		console.log("1-" + causesArray[c]);
			                  if (causesArray[c].trim().length == 0)
									continue;
									
							  console.log("2-" + causesArray[c]);
						  }