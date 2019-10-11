//http://jsfiddle.net/La8wQ/22/
//http://stackoverflow.com/questions/3896156/how-do-i-style-radio-buttons-with-images-laughing-smiley-for-good-sad-smiley/26737044#26737044

.cc-selector input{
    margin:0;padding:0;
    -webkit-appearance:none;
       -moz-appearance:none;
            appearance:none;
}

.cc-selector-2 input{
    position:absolute;
    z-index:999;
}

.visa{background-image:url(http://i.imgur.com/lXzJ1eB.png);}
.mastercard{background-image:url(http://i.imgur.com/SJbRQF7.png);}

.cc-selector-2 input:active +.drinkcard-cc, .cc-selector input:active +.drinkcard-cc{opacity: .9;}
.cc-selector-2 input:checked +.drinkcard-cc, .cc-selector input:checked +.drinkcard-cc{
    -webkit-filter: none;
       -moz-filter: none;
            filter: none;
}
.drinkcard-cc{
    cursor:pointer;
    background-size:contain;
    background-repeat:no-repeat;
    display:inline-block;
    width:100px;height:70px;
    -webkit-transition: all 100ms ease-in;
       -moz-transition: all 100ms ease-in;
            transition: all 100ms ease-in;
    -webkit-filter: brightness(1.8) grayscale(1) opacity(.7); //blur(2px)
       -moz-filter: brightness(1.8) grayscale(1) opacity(.7);
            filter: brightness(1.8) grayscale(1) opacity(.7);
}
.drinkcard-cc:hover{
    -webkit-filter: brightness(1.2) grayscale(.5) opacity(.9);
       -moz-filter: brightness(1.2) grayscale(.5) opacity(.9);
            filter: brightness(1.2) grayscale(.5) opacity(.9);
}

/* Extras */
a:visited{color:#888}
a{color:#444;text-decoration:none;}
p{margin-bottom:.3em;}


<form>
    <p>Previously:</p>
    <div>
        <input id="a1" type="radio" name="a" value="visa" />
        <label for="a1">Visa</label><br/>
        <input id="a2" type="radio" name="a" value="mastercard" />
        <label for="a2">Mastercard</label>
    </div>
    <p>Now, with CSS3: </p>
    <div class="cc-selector">
        <input id="visa" type="radio" name="credit-card" value="visa" />
        <label class="drinkcard-cc visa" for="visa"></label>
        <input id="mastercard" type="radio" name="credit-card" value="mastercard" />
        <label class="drinkcard-cc mastercard"for="mastercard"></label>
    </div>
    <p>A simple mod:</p>
    <div class="cc-selector-2">
        <input id="visa2" type="radio" name="creditcard" value="visa" />
        <label class="drinkcard-cc visa" for="visa2"></label>
        <input id="mastercard2" type="radio" name="creditcard" value="mastercard" />
        <label class="drinkcard-cc mastercard"for="mastercard2"></label>
    </div>
    
</form>
<small><a href="https://github.com/rcotrina94/icons">
    &copy; Icons by @rcotrina94 on Github</a></small>