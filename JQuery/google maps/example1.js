//http://jsfiddle.net/j10q3gop/
<!-- www.limnivouliagmenis.gr -->
<div class="wpb_wrapper">
			<div id='wrap_map_55aa5596d6cc9' class='ac-map-wrapper ' style='height:350px;'>
                <div id='map_55aa5596d6cc9' data-map_override='0' class='ac_google_map wpb_content_element page_margin_top' style='width:100%;height:350px;'>
            	</div>
            </div>
</div> 

<script>
		(function($) {
			'use strict';
		var map_map_55aa5596d6cc9 = null;
		var coordinate_map_55aa5596d6cc9;
		var acmapIsTouchDevice = 'ontouchstart' in document.documentElement;
		var draggable = !acmapIsTouchDevice;
				
		try
		{			
			var map_map_55aa5596d6cc9 = null;
			var coordinate_map_55aa5596d6cc9;
			coordinate_map_55aa5596d6cc9=new google.maps.LatLng(37.8077905, 23.7857412);
			var mapOptions= 
			{
				zoom: 15,
				center: coordinate_map_55aa5596d6cc9,
				scaleControl: true,
				streetViewControl: false,
				mapTypeControl: false,
				panControl: false,
				zoomControl: true,
				scrollwheel: false,
				draggable: draggable,
				zoomControlOptions: {
				  style: google.maps.ZoomControlStyle.SMALL
				}, mapTypeControlOptions: {
				  		mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
					}}; var styles = [
  {
    "stylers": [
      { "saturation": 0 }
    ]
  }
];
					var styledMap = new google.maps.StyledMapType(styles,
				    	{name: "Styled Map"});
					 var map_map_55aa5596d6cc9 = new google.maps.Map(document.getElementById('map_55aa5596d6cc9'),mapOptions);map_map_55aa5596d6cc9.mapTypes.set('map_style', styledMap);
							 map_map_55aa5596d6cc9.setMapTypeId('map_style');
				var marker_map_55aa5596d6cc9 = new google.maps.Marker({
					position: new google.maps.LatLng(37.8077905, 23.7857412),
					animation:  google.maps.Animation.DROP,
					map: map_map_55aa5596d6cc9,
					icon: 'http://www.limnivouliagmenis.gr/wp-content/uploads/2015/01/map-marker-2.png'
				});
				google.maps.event.addListener(marker_map_55aa5596d6cc9, 'click', toggleBounce);
		}
		catch(e){};
		jQuery(document).ready(function($){
			if(typeof google != 'undefined') {
				google.maps.event.trigger(map_map_55aa5596d6cc9, 'resize');
				$(window).resize(function(){
					google.maps.event.trigger(map_map_55aa5596d6cc9, 'resize');
					if(map_map_55aa5596d6cc9!=null)
						map_map_55aa5596d6cc9.setCenter(coordinate_map_55aa5596d6cc9);
				});				
			}
		});
		jQuery(window).load(function($){
			if(typeof google != 'undefined') {			
				google.maps.event.trigger(map_map_55aa5596d6cc9, 'resize');
				if(map_map_55aa5596d6cc9!=null)
					map_map_55aa5596d6cc9.setCenter(coordinate_map_55aa5596d6cc9);
			}
		});
		function toggleBounce() {
		  if (marker_map_55aa5596d6cc9.getAnimation() != null) {
			marker_map_55aa5596d6cc9.setAnimation(null);
		  } else {
			marker_map_55aa5596d6cc9.setAnimation(google.maps.Animation.BOUNCE);
		  }
		}
		})(jQuery);
		
</script>
		
		