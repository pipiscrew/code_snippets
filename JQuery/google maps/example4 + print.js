//http://www.x.com/findmap.html?FromLat=38.0510564&FromLng=23.814641499999993&ToLat=38.0586767&ToLng=23.639640699999973&Mode=undefined

//main.html
    <div class="wrapper">
        <div class="title">Επικοινωνία</div>
        <div id="contact-page-content">
            <div id="map-top">
                <input id="customerAddress" onblur="if (this.value == '') {this.value = 'Συμπληρώστε τη διεύθυνσή σας';};" 
                    onfocus="if (this.value == 'Συμπληρώστε τη διεύθυνσή σας') {this.value = '';};" value="Συμπληρώστε τη διεύθυνσή σας"/>
                <div class="map-top-right">
                    <div class="textdiv">Θα έρθετε με:</div>
                    <div class="driving"><span id="driving-icon" class="radio1 clickable-button"></span></div>
                    <div class="walking"><span id="walking-icon" class="radio2 clickable-button"></span></div>
                    <div class="transit"><span id="transit-icon" class="radio3 clickable-button"></span></div>
                </div>
            </div>
            <div class="clearboth"></div>
            <div id="map_canvas"></div> 
            <div id="directionsPanel"></div>
            <div class="prinStoreWrapper">
                <div class="printStores" onclick="printDiv(true);"><p>|| εκτύπωση</p></div>
            </div>
            <div class="clearboth"></div>
            <div class="map-bottom-wrapper">
                <div class="map-bottom">
                    <div class="map-details-top">Διεύθυνση Εργοστασίου</div>
                    <div class="map-details-bottom">Γραφεία - Εργοστάσιο: Ασπρόπυργος Αττικής</div>
                </div>
                <div class="map-bottom">
                    <div class="map-details-top">Τηλέφωνα</div>
                    <div class="map-details-bottom">Τηλ.8888</div>
                </div>
                <div class="map-bottom">
                    <div class="map-details-top">Email</div>
                    <div class="map-details-bottom">Γραμματεία: <a href="mailto:x@x.x" class="email">x@x.x</a></div>
                </div>
            </div>
            <div class="clearboth"></div>
        </div>
    </div>

//contact.js
// Document Ready Function
$(function () {
    initialize();

    $('.clickable-button').live('click', function () {
        console.log(this);
        findTrans(this);
    })


});

var directionDisplay;
var directionsService = new google.maps.DirectionsService();
var map;
var origin = null;
var geocoder;
var image = 'images/texas.png';

function initialize() {
    geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'address': 'Αθήνα' }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
        } else {
            alert("Παρουσιάστηκε κάποιο πρόβλημα. Παρακαλώ προσπαθήστε ξανά.");
        }
    });

    directionsDisplay = new google.maps.DirectionsRenderer();
    directionsDisplay.setPanel(document.getElementById("directionsPanel"));
    var headquarters = new google.maps.LatLng(38.0586767, 23.6396407);
    var myOptions = {
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: headquarters
    }
    map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

    // Add A Marker For texas Location
    var headquartersMarker = new google.maps.Marker({
        position: headquarters,
        map: map,
        animation: google.maps.Animation.DROP, 
        zIndex: 99999,
        icon: image
    });

    directionsDisplay.setMap(map);

}

function calcRoute(param, item) {
    console.log(param);
    console.log(item);
    var address = document.getElementById("customerAddress").value;
    geocoder.geocode({ 'address': address }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            origin = results[0].geometry.location;
            var mode = google.maps.DirectionsTravelMode.DRIVING;
            switch (param) {
                case "DRIVING":
                    mode = google.maps.DirectionsTravelMode.DRIVING;
                    $('.map-button-clicked').each(function () {
                        $(this).removeClass('map-button-clicked');
                    });
                    $(item).addClass('map-button-clicked');
                    break;
                case "WALKING":
                    mode = google.maps.DirectionsTravelMode.WALKING;
                    $('.map-button-clicked').each(function () {
                        $(this).removeClass('map-button-clicked');
                    });
                    $(item).addClass('map-button-clicked');
                    break;
                case "TRANSIT":
                    mode = google.maps.DirectionsTravelMode.TRANSIT;
                    $('.map-button-clicked').each(function () {
                        $(this).removeClass('map-button-clicked');
                    });
                    $(item).addClass('map-button-clicked');
                    break;
            }

            var end = new google.maps.LatLng(38.0586767, 23.6396407);
            
            var request = {
                origin: origin,
                destination: end,
                travelMode: mode
            };
            directionsService.route(request, function (response, status) {
                if (status == google.maps.DirectionsStatus.OK) {
                    response.routes[0].legs[0].duration = undefined;
                    $('#directionsPanel').show("slide", { direction: "left" }, 400);
                    $("#map_canvas").removeClass("full").addClass("small");
                    google.maps.event.trigger(map, 'resize');
                    directionsDisplay.setDirections(response);
                    $('.prinStoreWrapper').css('display', 'block');
                    $('.map-bottom-wrapper').addClass('map-bottom-wrapper-positioned');
                }
            });

        } else {
            console.log('some error occured');
            $(item).removeClass('map-button-clicked');
            jQuery('#directionsPanel').hide();
            jQuery("#map_canvas").removeClass("small").addClass("full");
            $('.prinStoreWrapper').css('display', 'none');
            $('.map-bottom-wrapper').removeClass('map-bottom-wrapper-positioned');
            google.maps.event.trigger(map, 'resize');

            var popID = "popup_name3"; //Get Popup Name
            var popURL = "#?w=548"; //Get Popup href to define size
            var widthz = 500; //Get Popup href to define size
            //Pull Query & Variables from href URL
            var query = popURL.split('?');
            var dim = query[1].split('&');
            var popWidth = dim[0].split('=')[1]; //Gets the first query string value
            $('#' + popID).fadeIn().css({ 'width': Number(widthz) }).prepend('<span  onclick="closepop();" class="closeMe">X</span>');
            var popMargTop = ($('#' + popID).height() + 80) / 2;
            var popMargLeft = ($('#' + popID).width() + 50) / 2;
            $('#' + popID).css({
                'margin-top': -popMargTop,
                'margin-left': -popMargLeft
            });

            var docHeight = $(document).height();
            var docWidth = $(document).width();

            $('body').append('<div id="fade" onclick="closepop();"></div>'); //Add the fade layer to bottom of the body tag.
            $('#fade').height(docHeight);
            $('#fade').width(docWidth);
            $('#fade').css({ 'filter': 'alpha(opacity=80)' }).fadeIn(); //Fade in the fade layer - .css({'filter' : 'alpha(opacity=80)'}) is used to fix the IE Bug on fading transparencies 

            
            return false;
        }
    });
}

function findTrans(item) {
    var button = $(item).attr('id');
    switch (button) {
        case "driving-icon":
            console.log('you clicked the driving button');
            var param = 'DRIVING';
            calcRoute(param, item);
            break;
        case "walking-icon":
            console.log('you clicked the walking button');
            var param = 'WALKING';
            calcRoute(param, item);
            break;
        case "transit-icon":
            console.log('you clicked the transit button');
            var param = 'TRANSIT';
            calcRoute(param, item);
            break;
    }
}


//findmap.html
function printDiv(internal) {
    var destination = new google.maps.LatLng(38.0586767, 23.6396407);
    console.log(destination);
    if (origin != null) {
        var url = 'findmap.html?FromLat=' + origin.lat().toString() + '&FromLng=' + origin.lng().toString() + '&ToLat=' + destination.lat().toString() + '&ToLng=' + destination.lng().toString() + '&Mode=' + jQuery("#radio input:checked").val();
        var printWin = window.open(url, "printSpecial", "width=600,height=700,titlebar=0,scrollbars=1,resizable=1");
    }
    else {
        alert("Παρακαλώ εισάγετε την διεύθυνσή σας.");
    }
}

function closepop() {
    $('#fade, .popup_block').fadeOut(function () {
        $('#fade, .closeMe').remove();  //fade them both out
    });
}

//findmap.html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html>
<head>
    <script src="https://maps.googleapis.com/maps/api/js?sensor=false&language=el" type="text/javascript" ></script>
    <script src="http://code.jquery.com/jquery-1.8.2.js" type="text/javascript" ></script>
    <script src="http://code.jquery.com/ui/1.9.1/jquery-ui.js" type="text/javascript" ></script>
    <script src="js/url.js" type="text/javascript" ></script>
    <script type="text/javascript" >
        jQuery(document).ready(function () {
            console.log('inside document ready');
            var directionDisplay;
            var map;
            var waypoints = [];
            var directionsService = new google.maps.DirectionsService();
            var myOptions = { zoom: 6, mapTypeId: google.maps.MapTypeId.ROADMAP };
            directionsDisplay = new google.maps.DirectionsRenderer();
            map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
            directionsDisplay.setMap(map);
            directionsDisplay.setPanel(document.getElementById("directionsPanel"));
            var fromLat = $.url().param('FromLat').toString();
            var fromLng = $.url().param('FromLng').toString();
            var toLat = $.url().param('ToLat').toString();
            var toLng = $.url().param('ToLng').toString();
            var origin = new google.maps.LatLng(fromLat, fromLng);
            var destination = new google.maps.LatLng(toLat, toLng);
            var mode = google.maps.DirectionsTravelMode.DRIVING;
            var request = {
                origin: origin,
                destination: destination,
                waypoints: waypoints,
                travelMode: mode
            };
            directionsService.route(request, function (response, status) {
                if (status == google.maps.DirectionsStatus.OK) {
                    jQuery("#directionsPanel").show("slide", { direction: "left" }, 400);
                    jQuery("#map_canvas").removeClass("full").addClass("small");
                    google.maps.event.trigger(map, "resize");
                    directionsDisplay.setDirections(response);
                }
            });
        });
      </script>
<title>

</title></head>
<body>
    <button id="buttonPrint" onclick="window.print();" style="">Εκτύπωση</button>
    <div id="map_canvas" style="background-color: #E5E3DF; overflow: hidden;
            position: relative; box-shadow: 3px 2px 5px #A6A6A3 inset; display: block; height: 500px;
            width: 100%;">
    </div>
    <div id="directionsPanel" style="direction: ltr; display: block; height: 500px; width: 100%;
        float: left; margin-bottom: 0px; margin-top: 30px; overflow-x: visible; overflow-y: visible;">
    </div>
</body>
</html>