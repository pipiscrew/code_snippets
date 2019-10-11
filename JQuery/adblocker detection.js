<head>
<script>var fuckAdBlock = undefined; //the .js fill the variable :)
</script>
<script src="https://filecloud.io/banner_ads.js"></script>
</head>

<body>
</body>

<script type="text/javascript">

        var adBlockDetected = function() {

                            $('#recaptchaPanel').empty().append('<div class="alert alert-danger text-center">Please <strong>DISABLE ADBLOCK</strong> and reload this page if you wish to download this file</div><br /><div class="alert alert-warning text-center">We offer a fast 100% free service (without any premium account gimmicks)</div><br /><div class="alert alert-success text-center">Please help us keep the service free by not using adblock on this site.</div>');
                $('#downloadFooterPanel').empty().append('');
                    }
        if(typeof FuckAdBlock === 'undefined') {
            $(document).ready(adBlockDetected);
        } else {
            fuckAdBlock.on(true, adBlockDetected);
        }
    </script>