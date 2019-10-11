//http://cssdeck.com/labs/styling-html5-progress-bars

<style>
* Moving on to the styling, we'll start with the main progress bar first and then the value part of it. After that, we'll do some experiments :D */
body {
	background: #322c35;
}

progress {
	width: 400px;
	height: 14px;
	margin: 50px auto;
	display: block;
	/* Important Thing */
	-webkit-appearance: none;
	border: none;
}

/* All good till now. Now we'll style the background */
progress::-webkit-progress-bar {
	background: black;
	border-radius: 50px;
	padding: 2px;
	box-shadow: 0 1px 0px 0 rgba(255, 255, 255, 0.2);
}

/* Now the value part */
progress::-webkit-progress-value {
	border-radius: 50px;
	box-shadow: inset 0 1px 1px 0 rgba(255, 255, 255, 0.4);
	background:
		-webkit-linear-gradient(45deg, transparent, transparent 33%, rgba(0, 0, 0, 0.1) 33%, rgba(0, 0, 0, 0.1) 66%, transparent 66%),
		-webkit-linear-gradient(top, rgba(255, 255, 255, 0.25), rgba(0, 0, 0, 0.2)),
		-webkit-linear-gradient(left, #ba7448, #c4672d);
	
	/* Looks great, now animating it */
	background-size: 25px 14px, 100% 100%, 100% 100%;
	-webkit-animation: move 5s linear 0 infinite;
}

/* That's it! Now let's try creating a new stripe pattern and animate it using animation and keyframes properties  */

@-webkit-keyframes move {
	0% {background-position: 0px 0px, 0 0, 0 0}
	100% {background-position: -100px 0px, 0 0, 0 0}
}

/* Prefix-free was creating issues with the animation */

</style>

<progress max=10 value=0>0%</progress>
<progress max=100 value=25>25%</progress>
<progress max=8 value=4>50%</progress>
<progress max=100 value=75>75%</progress>
<progress max=25 value=25>100%</progress>
<progress>Unknown</progress>