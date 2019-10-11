//http://www.the-art-of-web.com/html/html5-form-validation/

Your Name: <input type="text" name="name" required>
Your Name: <input type="text" name="name2" required autofocus>

//types:
mail, url, number,  tel, date, color, date, datetime, datetime-local, month, search, tel, time, week

Website: <input type="url" name="website" required>
//We can use pattern attribute which accepts a JavaScript regular expression. So the code above becomes:
Website: <input type="url" name="website" required pattern="https?://.+">