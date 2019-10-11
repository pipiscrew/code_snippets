//http://jsfiddle.net/KyleMit/0nevkwyn/

$("form").submit(function() {
    console.log($(this).serializeArray());
    return false;
});

<form >
    <div class="row">
        <div class="col-sm-3">Test 1 - Bootstrap</div>
        <div class="col-sm-9">
            <div class="btn-group" data-toggle="buttons">
                <label class="btn btn-default">
                    <input type="radio" id="q156" name="quality[25]" value="1" /> 1
                </label> 
                <label class="btn btn-default">
                    <input type="radio" id="q157" name="quality[25]" value="2" /> 2
                </label> 
                <label class="btn btn-default">
                    <input type="radio" id="q158" name="quality[25]" value="3" /> 3
                </label> 
                <label class="btn btn-default">
                    <input type="radio" id="q159" name="quality[25]" value="4" /> 4
                </label> 
                <label class="btn btn-default active">
                    <input type="radio" id="q160" name="quality[25]" checked="checked" value="5" /> 5
                </label>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-3">Test 2 - No Bootstrap</div>
        <div class="col-sm-9">
            <div  >
                <label >
                    <input type="radio" id="q128" name="quality[21]" value="1" /> 1
                </label> 
                <label >
                    <input type="radio" id="q129" name="quality[21]" checked="checked" value="2" /> 2
                </label> 
                <label >
                    <input type="radio" id="q130" name="quality[21]" value="3" /> 3
                </label> 
                <label >
                    <input type="radio" id="q131" name="quality[21]" value="4" /> 4
                </label> 
                <label >
                    <input type="radio" id="q132" name="quality[21]" value="5" /> 5
                </label>
            </div>
        </div>
    </div>
    <br/>
    <input type="submit" class="btn btn-primary" value="Post Form to Console"></input>
</form>
