//https://www.firebase.com/docs/javascript/datasnapshot/numchildren.html

function countCountryPeople()
{
	console.log(companyCountry);
	var dbDetail = new Firebase('https://' + baseURL + '/people/');
	dbDetail.startAt(companyCountry).endAt(companyCountry).once('value', function(snapshot) {
		if (snapshot.val() === null) {
			$('#push_count_country_users').html("No registered devices!");
		}
		else {
			$('#push_count_country_users').html(snapshot.numChildren() + " device(s) in total");
		}
	});
}