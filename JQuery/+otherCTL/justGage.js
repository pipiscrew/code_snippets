//reference
//http://justgage.com
//http://raphaeljs.com
//http://www.pipiscrew.com/2014/10/javascript-justgage-w-raphael-reference/


<script type="text/javascript" src="js/raphael.2.1.0.min.js"></script>
<script type="text/javascript" src="js/justgage.1.0.1.min.js"></script>
 
<script type="text/javascript">
      var g1;
 
      window.onload = function(){
          var g1 = new JustGage({
            id: "g1",
            value: 350,
            min: 0,
            max: 600,
            title: "Test",
            label: "",    
 
          });
        }
 
      //when somewhere later use as :
      g1.refresh(101);
</script>
 
<div id="g1"></div>