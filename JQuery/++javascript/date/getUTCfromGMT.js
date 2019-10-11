//val is date
			function getUTCfromGMT(val) {
				var newDay = new Date();
				var t = new Date(val);
				var time1 = Math.round(t / 1000);
				return (time1);
			}