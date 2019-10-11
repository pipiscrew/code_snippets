//http://www.pipiscrew.com/2015/07/js-google-maps/
//http://www.freshpatisserie.gr/stores
//http://www.limnivouliagmenis.gr/

<!DOCTYPE html>
<html>
  <head>
    <title>Showing pixel and tile coordinates</title>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
    <meta charset="utf-8">
    <style>
      html, body, #map {
        height: 100%;
        margin: 0;
        padding: 0;
      }

    </style>
    <script src="https://maps.googleapis.com/maps/api/js?v=3.exp"></script>
    <script src="jquery-1.11.0.min.js"></script>
    
    <script>
var marker_map;

    	$(function() {
			var coordinate_map;
			coordinate_map=new google.maps.LatLng(37.8077905, 23.7857412);
			var mapOptions= 
			{
				zoom: 15,
				center: coordinate_map,
				scaleControl: true,
				streetViewControl: false,
				mapTypeControl: false,
				panControl: false,
				zoomControl: true,
				scrollwheel: false,
				zoomControlOptions: {  style: google.maps.ZoomControlStyle.SMALL}, 
				mapTypeControlOptions: { mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style'] }
			}; 
					
			var styles = [	{	"stylers": [{"saturation": -100	}]	}	];
    
			var styledMap = new google.maps.StyledMapType(styles, {name: "Styled Map"});
			var map = new google.maps.Map(document.getElementById('map'),mapOptions);
			map.mapTypes.set('map_style', styledMap);
			map.setMapTypeId('map_style');
			
			
			//use of public variable - the marker itself
			marker_map = new google.maps.Marker({
					position: new google.maps.LatLng(37.8077905, 23.7857412),
					animation:  google.maps.Animation.DROP,
					map: map,
					icon: 'marker.png'
				});
				
			//---------------------------when marker clicked #bounce#
			//use of public variable
			google.maps.event.addListener(marker_map, 'click', toggleBounce);
			//---------------------------when marker clicked #bounce#
		
				//button click
				$('#btn').on('click', function(e) {
						var allLocs = [{"lat":"37.9060197527","lng":"23.7515864000"},{"lat":"37.8605266640","lng":"23.7554984730"},{"lat":"38.0868786218","lng":"23.8164957270"},{"lat":"37.9772695000","lng":"23.7368496000"},{"lat":"37.9777561860","lng":"23.7425824577"},{"lat":"37.9477112582","lng":"23.7150144270"},{"lat":"37.9674859000","lng":"23.7492797000"},{"lat":"37.9634163000","lng":"23.7249817000"},{"lat":"38.0304100169","lng":"23.8020953693"},{"lat":"38.0196767696","lng":"23.7942414914"},{"lat":"37.9992306362","lng":"23.7707444847"},{"lat":"38.0038740823","lng":"23.7753516921"}];
						var i = new google.maps.LatLng(37.8077905, 23.7857412)
						
						var e = document.getElementById("map");
				        var o = {
				            center: i,
				            zoom: 11,
				            mapTypeId: google.maps.MapTypeId.ROADMAP
				        };
				        var map = new google.maps.Map(e, o);
				        var panLeft = -350;
				        
					    for (var r in allLocs) {
					        var s = allLocs[r].lat,
					            l = allLocs[r].lng;
					        ll = new google.maps.LatLng(s, l), marker = new google.maps.Marker({
					            position: ll,
					            map: map,
					            icon: "marker2.png"
					        })
					    }
					    map.panBy(panLeft, -160)
				});
				

		})//jQ

		//use of public variable
		function toggleBounce() {
		  if (marker_map.getAnimation() != null) {
			marker_map.setAnimation(null);
		  } else {
			marker_map.setAnimation(google.maps.Animation.BOUNCE);
		  }
		}

    </script>
  </head>
  <body>
		<button id="btn">
			Add more markers
		</button>
    <div id="map"></div>
  </body>
</html>