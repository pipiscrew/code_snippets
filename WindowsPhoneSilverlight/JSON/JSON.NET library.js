//http://www.hanselman.com/blog/NuGetPackageOfTheWeek4DeserializingJSONWithJsonNET.aspx
//more parsers @ http://www.json.org/
#button
var jj = JsonConvert.DeserializeObject<Platinum[]>(tmp);

foreach (Platinum kk in jj)
{
	if (kk.album != null )
		MessageBox.Show(kk.album.title);
}


#class
    public class Platinum
    {
        public albumDetail album { get; set; }
    }

    public class albumDetail
    {
        public string asin { get; set; }
        public string title { get; set; }
        public string buyalbum { get; set; }
        public string label { get; set; }
        public string itunes { get; set; }
        public string year { get; set; }
        public string id { get; set; }
        public string cdcover { get; set; }

    }
    


#the JSON
[{"album": {"asin": "B004I3U7R6", "title": "Let's Break up the Band", "buyalbum": "", "label": "Hardly Art", "itunes": "", "year": "2011", "id": 63930, "cdcover": "/covers/a-f/dizzyeyes_letsbreakuptheban.jpg"}, "listfrom": "[]", "good": true, "title": "Let's Break up the Band", "artist": {"artistdisplay": "Dizzy Eyes", "id": 43276, "artistcat": "Dizzy Eyes", "artist": "Dizzy Eyes"}, "spotnum": 0, "fn": "http://3393.voxcdn.com/indie2/dizzyeyes_letsbreakuptheb_00_letsbreakuptheband.m4a", "composer": {"cat": null, "display": null, "value": "", "id": 926}, "id": 183627, "alt1": {"cat": null, "display": null, "value": null, "id": 102}, "failtake": false}, {"album": {"asin": "B004LPNB74", "title": "w h o k i l l", "buyalbum": "", "label": "4AD", "itunes": "", "year": "2011", "id": 63918, "cdcover": "/covers/t-z/tuneyards_whokill.jpg"}, "listfrom": "[]", "good": true, "title": "You Yes You", "artist": {"artistdisplay": "TUnE-yArDs", "id": 43272, "artistcat": "Tune Yards", "artist": "TUnE-yArDs"}, "spotnum": 0, "fn": "http://3393.voxcdn.com/indie2/tuneyards_whokill_08_youyesyou.m4a", "composer": {"cat": null, "display": null, "value": "", "id": 926}, "id": 183656, "alt1": {"cat": null, "display": null, "value": null, "id": 102}, "failtake": false}, {"album": {"asin": "B0049OSQ18", "title": "The King Is Dead", "buyalbum": "", "label": "Capitol", "itunes": "", "year": "2011", "id": 62633, "cdcover": "/covers/a-f/decemberiststhe_thekingisdead.jpg"}, "listfrom": "[]", "good": true, "title": "January Hymn", "artist": {"artistdisplay": "The Decemberists", "id": 2529, "artistcat": "Decemberists, The", "artist": "The Decemberists"}, "spotnum": 0, "fn": "http://3393.voxcdn.com/indie2/decemberiststhe_thekingisdead_05_januaryhymn.m4a", "composer": {"cat": null, "display": null, "value": "", "id": 926}, "id": 182103, "alt1": {"cat": null, "display": null, "value": null, "id": 102}, "failtake": false}]


#2nd example
    Dim token As JToken = response.get_Item("track").get_Item("album").get_Item("image")
    If (Not token Is Nothing) Then
        str = Extensions.Value(Of String)(token.get_Last.get_Item("#text"))
    End If
    Return str

#2nd Example the JSON
{"track":{"id":"1060840","name":"Stir It Up","mbid":"",
"url":"http:\/\/www.last.fm\/music\/Bob+Marley\/_\/Stir+It+Up","duration":"335000",
"streamable":{"#text":"1","fulltrack":"0"},"listeners":"242512",
"playcount":"1065986","artist":{"name":"Bob Marley","mbid":"ed2ac1e9-d51d-4eff-a2c2-85e81abd6360",
"url":"http:\/\/www.last.fm\/music\/Bob+Marley"},"album":{"artist":"Bob Marley","title":"One Love: The Very Best Of...","mbid":"",
"url":"http:\/\/www.last.fm\/music\/Bob+Marley\/One+Love%3A+The+Very+Best+Of...",
"image":[{"#text":"http:\/\/images.amazon.com\/images\/P\/B00005JIW8.01._SCMZZZZZZZ_.jpg","size":"small"},{"#text":"http:\/\/images.amazon.com\/images\/P\/B00005JIW8.01._SCMZZZZZZZ_.jpg","size":"medium"},{"#text":"http:\/\/images.amazon.com\/images\/P\/B00005JIW8.01._SCMZZZZZZZ_.jpg","size":"large"},{"#text":"http:\/\/images.amazon.com\/images\/P\/B00005JIW8.01._SCMZZZZZZZ_.jpg","size":"extralarge"}],"@attr":{"position":"1"}},"toptags":{"tag":[{"name":"reggae","url":"http:\/\/www.last.fm\/tag\/reggae"},{"name":"bob marley","url":"http:\/\/www.last.fm\/tag\/bob%20marley"},{"name":"roots reggae","url":"http:\/\/www.last.fm\/tag\/roots%20reggae"},{"name":"chill","url":"http:\/\/www.last.fm\/tag\/chill"},{"name":"70s","url":"http:\/\/www.last.fm\/tag\/70s"}]}}}
