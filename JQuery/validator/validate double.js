to accept also negatives 
/^-?(\d*\.)?\d*$/

//-----------1st way
    //http://stackoverflow.com/questions/11517562/set-regex-for-decimal-number-with-jquery-validator-plugin
    //add validation for currency
    $.validator.addMethod('currency', function(value, element, regexp) {
        var re = /^\d{1,9}(\.\d{1,2})?$/;
        return this.optional(element) || re.test(value);
    }, '');
            
            
    //http://stackoverflow.com/questions/18754020/bootstrap-3-with-jquery-validation-plugin
    // validate signup form on keyup and submit
    var validatorCustomers = $("#formCustomers").validate({
        rules : {
            custName : {
                required : true,
                currency: true
            },
            custAddress3 : {
                minlength: 3,
                maxlength: 15,
                required : true
            }
        },
        messages : {
            custName : "Δεν γίνεται το πεδίο να παραμείνει κενό",
            custAddress3 : "Από 3 μέχρι 15 χαρακτήρες. Άμα δεν γνωρίζεται, πληκτρολογήστε Αθήνα!"
        },
        highlight : function(element) {
            $(element).closest('.form-group').addClass('has-error');
        },
        unhighlight : function(element) {
            $(element).closest('.form-group').removeClass('has-error');
        }
        // highlight : function(element) {
        // $(element).closest('.form-group').addClass('has-error').removeClass('form-group');
        // },
        // success : function(element) {
        // element.text('OK!').addClass('valid').closest('.form-group').addClass('form-group').emoveClass('has-error');
        // }
    });
    
//-----------2nd way
            $.validator.addMethod(
                    "regex",
                    function(value, element, regexp) {
                        var re = new RegExp(regexp);
                        return this.optional(element) || re.test(value);
                    },
                    "Please check your input."
            );
            
            
    //http://stackoverflow.com/questions/18754020/bootstrap-3-with-jquery-validation-plugin
    // validate signup form on keyup and submit
    var validatorCustomers = $("#formCustomers").validate({
        rules : {
            custName : {
                required : true,
                regex : /^\d{1,9}(\.\d{1,2})?$/
            },
            custAddress3 : {
                minlength: 3,
                maxlength: 15,
                required : true
            }
        }
    });