http://stackoverflow.com/questions/12630156/how-do-you-enable-the-escape-key-close-functionality-in-a-twitter-bootstrap-moda

you should define tabindex="-1" on tag.

You can add the "tabindex" attribute to you modal to get around this issue:


		<div id="deleteModal" tabindex="-1" class="modal fade">
			<div class="modal-dialog">
				//your code here
			</div><!-- /.modal-dialog -->
		</div><!-- /.modal -->