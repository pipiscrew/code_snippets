//http://stackoverflow.com/questions/833997/end-date-greater-than-start-date-jquery-validation

jQuery.validator.addMethod("greaterThan", 
function(value, element, params) {

    if (!/Invalid|NaN/.test(new Date(value))) {
        return new Date(value) > new Date($(params).val());
    }

    return isNaN(value) && isNaN($(params).val()) 
        || (Number(value) > Number($(params).val())); 
},'Must be greater than {0}.');
To use it:

$("#EndDate").rules('add', { greaterThan: "#StartDate" });
or

$("form").validate({
    rules: {
        EndDate: { greaterThan: "#StartDate" }
    }
});