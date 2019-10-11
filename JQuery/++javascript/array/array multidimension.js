//http://stackoverflow.com/questions/966225/how-can-i-create-a-two-dimensional-array-in-javascript/

//example1
//Javascript only has 1-dimensional arrays, but you can build arrays of arrays, as others pointed out.

							function Create2DArray(rows) {
							  var arr = [];
							
							  for (var i=0;i<rows;i++) {
							     arr[i] = [];
							  }
							
							  return arr;
							}
							
							//Then you can just call:
							
							var arr = Create2DArray(100);
							
							arr[50][2] = 5;
							arr[70][5] = 7454;

//example 2
							//init an array
							var votes = [];

								//zero counter
								voteCounter = 0;
								
								//always instantiate new array to new array element
								votes[arrCounter] = []
								
								//set the episode title to array - 0 position
								votes[arrCounter][0] = episodeDetails.val().title
								
								//set the episode votes to array - 1 position
								votes[arrCounter][1] = voteCounter;

								//set the average to array - 2 position
								votes[arrCounter][2] = average;

								arrCounter += 1;