//http://www.codeproject.com/Articles/203621/Call-HTTPhandler-from-jQuery-Pass-data-and-retriev

//client
function CallHandler() {
    $.ajax({
        url: "Handler/MyHandler.ashx",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: { 'Id': '10000' },
        responseType: "json",
        success: OnComplete,
        error: OnFail
    });
    return false;
}

function OnComplete(result) {
    alert([result.Id, result.Name, result.Age, result.Department]);
}
function OnFail(result) {
    alert('Request Failed');
}


//server
public class MyHandler : IHttpHandler {

    public void ProcessRequest (HttpContext context) {

        var employee = GetData(Convert.ToInt32(context.Request["Id"]));

        //Do the operation as required

        JavaScriptSerializer javaScriptSerializer = new JavaScriptSerializer();
        string serEmployee = javaScriptSerializer.Serialize(employee);
        context.Response.ContentType = "text/html";\
        context.Response.Write(serEmployee);
    }

    public bool IsReusable {
        get {
            return false;
        }
    }

    private Employee GetData(int Id)
    {
        var employee = new Employee();
        employee.Id = Id;
        employee.Name = "Brij";
        employee.Age = 27;
        employee.Department = "Research and Development";

        //Write your logic here

        return employee;
    }
}