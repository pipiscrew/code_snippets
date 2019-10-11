//http://www.basic4ppc.com/forum/basic4android-getting-started-tutorials/17647-supporting-multiple-screens-tips-best-practices.html
//Conditions in the designer script are currently not supported.

btnRight.Right = 100%x 

btnDown.Bottom = 100%y
btnDown.Width = 100%x

EditText1.Width = 100%x
EditText1.Bottom = btnDown.Top - 5dip

ListView1.Width = 100%x
ListView1.SetTopAndBottom(btnLeft.Bottom, EditText1.Top)


scvList.Height=100%y
prdList.Height=100%y

ToggleButton1.HorizontalCenter = 50%x
ToggleButton1.VerticalCenter = 50%y

scvList.Width=100%x
prdList.Height=100%y-scvList.Height