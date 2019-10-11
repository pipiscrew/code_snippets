//http://www.basic4ppc.com/forum/basic4android-updates-questions/18235-custom-font-issue.html

Dim default_font, default_font_bold, default_font_italic As Typeface
default_font=Typeface.LoadFromAssets("micross.ttf")
default_font_bold=Typeface.CreateNew(default_font,default_font.STYLE_BOLD)
default_font_italic=Typeface.CreateNew(default_font, default_font.STYLE_ITALIC)