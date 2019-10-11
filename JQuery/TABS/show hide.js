//html
				<ul class='nav nav-tabs' id='tabContainerCOMP'>
					<li class='active'>
						<a href='#competitionDetail' data-toggle='tab'>Details</a>
					</li>
					<li>
						<a href='#competitionCauses' data-toggle='tab'>Causes</a>
					</li>
					<li>
						<a href='#offer_promo_code' id="TABoffer_promo_code" data-toggle='tab'>Promo Codes</a>
					</li>
				</ul>
				.
				.
					<!-- PROMO CODES -->
					<div class="tab-pane fade" id="offer_promo_code">
						<br>
						<button id="btn_generate_promo_codes" class="btn btn-success">
							Generate Codes
						</button>

						<br>
						<br>
						<div id="myTabContentPromo" style="height: 620px; overflow: auto;">
							<textarea id='txt_promo_codes' style="width:100%; padding:5px;height: 100%"></textarea>
						</div>
					</div>
				
				
//js
		$("#isOffer").click(function() {
			console.log("cheecked offer");
			$("#TABoffer_promo_code").show();
		});

		$("#isContest").click(function() {
			console.log("cheecked contest");
			$("#TABoffer_promo_code").hide();
		});