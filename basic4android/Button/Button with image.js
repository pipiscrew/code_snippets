//http://www.basic4ppc.com/forum/basic4android-getting-started-tutorials/12616-putting-images-buttons.html#post71062

Tip:
we set the button width and height equal to image file dimensions
or is better to maximize a little bit for ex.
an image 
46x32 I do it 100x70

Under Button properties you have by default:
- Drawable : DefaultDrawable

You should click on DefaultDrawable and then select StatelistDrawable in the list.
Then you get three different states:
- Enabled Drawable
- Disabled Drawable
- Pressed Drawable

For each of these you have by default ColorDrawable.
Clicking on ColorDrawable gives you the choice between:
- ColorDrawable
- GradientDrawable
- BitmapDrawable

Select BitmapDrawable in the list and you'll get the Image file field.