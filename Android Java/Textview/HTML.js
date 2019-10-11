tv1.setText(Html.fromHtml(arr[2]));

As you can see in the Html class source code, Html.fromHtml(String) does not support all HTML tags. This is a list of allowed HTML tags:

br
p
div
em
b
strong
cite
dfn
i
big
small
font
blockquote
tt
monospace
a
u
sup
sub

HTML:

String s = "<b>Bolded text</b>, <i>italic text</i>, even <u>underlined</u>!"
TextView tv = (TextView)findViewById(R.id.THE_TEXTVIEW_ID);
tv.setText(Html.fromHtml(s));
Option 2:

Use a Spannable; it is more complicated, but you can dynamically modify the text attributes (not only bold/italic, also colors).
