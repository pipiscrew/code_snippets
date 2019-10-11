//The second div is position: static (the default) so the z-index does not apply to it.
//You need to position (set the position property to anything other than static, 
//you probably want relative in this case) anything you want to give a z-index to.
//http://stackoverflow.com/a/14483631

//ex
<div style="display: inline-block;position:relative ; margin-left: 110px;margin-bottom: 20px;z-index:1;">
	<img src="images/x.png">
</div>

<img src="images/trademark.png" style="position: absolute;right: 0px;bottom: 0px;">


z-index: -1;
An element with greater stack order is always in front of an element with a lower stack order.