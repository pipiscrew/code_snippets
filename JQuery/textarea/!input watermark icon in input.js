//http://www.java2s.com/Tutorials/HTML_CSS/Bootstrap_Example/Form/Put_Glyphicon_Inside_Input_Box.htm
			
	<style>
		.left-inner-addon {
		  position: relative;
		}

		.left-inner-addon input {
		  padding-left: 40px;
		}

		.left-inner-addon i {
		  position: absolute;
		  padding: 10px 12px;
		}
		.right-inner-addon {
		  position: relative;
		}

		.right-inner-addon input {
		  padding-right: 30px;
		}

		.right-inner-addon i {
		  position: absolute;
		  right: 0px;
		  padding: 10px 12px;
		}
	</style>

	<div class="form-group">
		<label class="control-label"><span class="icon-building"></span>Company Manager : </label>
  		<div class="left-inner-addon">
		<i class="icon-user"></i> <input type="text" class="form-control" placeholder="Manager" />
		</div>
	</div>  

	<div class="form-group">
		<label class="control-label"><span class="icon-building"></span>Company Owner : </label>
		<div class="right-inner-addon ">
			<i class="icon-user"></i> <input type="search" class="form-control" placeholder="Owner" />
		</div>
	</div> 