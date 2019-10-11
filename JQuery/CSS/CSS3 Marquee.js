//http://jsfiddle.net/jonathansampson/XxUXD/light/

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>

<script>
	$(".toggle").on("click", function () {
	    $(".marquee").toggleClass("microsoft");
	});
</script>


<style>
	/* Make it a marquee */
	.marquee {
	    width: 450px;
	    margin: 0 auto;
	    overflow: hidden;
	    white-space: nowrap;
	    box-sizing: border-box;
	    animation: marquee 50s linear infinite;
	}
	
	.marquee:hover {
	    animation-play-state: paused
	}
	
	/* Make it move */
	@keyframes marquee {
	    0%   { text-indent: 27.5em }
	    100% { text-indent: -105em }
	}
	
	/* Make it pretty */
	.microsoft {
	    padding-left: 1.5em;
	    position: relative;
	    font: 16px 'Segoe UI', Tahoma, Helvetica, Sans-Serif;
	}
	
	/* ::before was :before before ::before was ::before - kthx */
	.microsoft:before, .microsoft::before {
	    z-index: 2;
	    content: '';
	    position: absolute;
	    top: -1em; left: -1em;
	    width: .5em; height: .5em;
	    box-shadow: 1.0em 1.25em 0 #F65314,
	        		1.6em 1.25em 0 #7CBB00,
	        		1.0em 1.85em 0 #00A1F1,
	        		1.6em 1.85em 0 #FFBB00;
	}
	
	.microsoft:after, .microsoft::after {
	    z-index: 1;
	    content: '';
	    position: absolute;
	    top: 0; left: 0;
	    width: 2em; height: 2em;
	    background-image: linear-gradient(90deg, white 70%, rgba(255,255,255,0));
	}
	
	/* Style the links */
	.vanity {
	    color: #333;
	    text-align: center;
	    font: .75em 'Segoe UI', Tahoma, Helvetica, Sans-Serif;
	}
	
	.vanity a, .microsoft a {
	    color: #1570A6;
	    transition: color .5s;
	    text-decoration: none;
	}
	
	.vanity a:hover, .microsoft a:hover {
	    color: #F65314;
	}
	
	/* Style toggle button */
	.toggle {
		display: block;
	    margin: 2em auto;
	}
</style>

<!-- Wanted to see how easily marquees could be constructed with CSS:
     - This demo uses -prefix-free to avoid vendor prefixes
     - It also requires manual setting of the end text-indent
     - Everything below the /* Make it pretty */ comment is non-essential
     - Brought to you by @jonathansampson -->
<p class="microsoft marquee">Windows 8 and Windows RT are focused on your life—your friends and family, your apps, and your stuff. With new things like the <a href="http://windows.microsoft.com/en-US/windows-8/start-screen">Start screen</a>, <a href="http://windows.microsoft.com/en-US/windows-8/charms">charms</a>, and a <a href="http://windows.microsoft.com/en-US/windows-8/microsoft-account">Microsoft account</a>, you can spend less time searching and more time doing.</p>
<button class="toggle">Toggle Beautification</button>
<p class="vanity">
    <a href="https://twitter.com/jonathansampson">@jonathansampson</a> of 
    <a href="https://twitter.com/appendTo">@appendTo</a>
</p>


