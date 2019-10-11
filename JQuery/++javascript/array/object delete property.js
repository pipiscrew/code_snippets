//http://stackoverflow.com/questions/208105/how-to-remove-a-property-from-a-javascript-object

						var record = {
							Cat : $('#category :selected').text(),
							CatRef : $('#category').val(),
							Comment : $('#descr').val(),
							Logo : $('#logo').val(),
							Title : $('#title').val(),
							adminID : userID,
							company : companyTitle,
							dateStart : getUTCfromGMT(dt1),
							dateEnd : endDate,
							winnersNum : $('#winners').val(),
							causes : causeItems,
							causesCategories : causesCategoriesItems,
							approval : "0"
						};



						//delete the approval property from object!!!!! 
						delete record.approval;
						
						
//or
delete myJSONObject['regex'];
//or
var prop = "regex";
delete myJSONObject[prop];