//http://www.codeproject.com/Articles/13125/Multilingual-Application-Made-Easier-in-C
//http://msdn.microsoft.com/en-us/library/ms866170.aspx (locale codes)

//edit all resources file in parallel (cool)
//http://zetaresourceeditor.codeplex.com/
//also is the paid
//http://www.jollans.com/tiki2/tiki-index.php

1-
you should set @ form properties
Localizable=True

now each time you change language, u can write on all ctrls caption the text for this language

VS automatically the RESX for each language ex. if we have a form named form1 and write Africans captions will produce
>>>>>>>>>Form1.af.resx

2-
for the multilanguage text in code (warning u must do the first step first) :
VS Explorer > New Item > Resources File.

name as u want (here I name it Strings.resx), this resource file will be for english.

to have also Africans


VS Explorer > New Item > Resources File > Filename > 
>>>>>>>>>Strings.af.resx

3-
now when double click the Strings.resx on first column I write the KeyName and the Value for the selected language
also I do the same for Strings.af.resx.

I create an entry TEST with value "1" (Strings.resx)
I create an entry TEST with value "2" (Strings.af.resx)

4-
now in Code I just type :
MessageBox.Show(String.TEST);

I got 1!

5-
on program.cs, I type :
            Application.EnableVisualStyles();
            Application.SetCompatibleTextRenderingDefault(false);
			//
            Thread.CurrentThread.CurrentUICulture = CultureInfo.GetCultureInfo("af-ZA");
            Thread.CurrentThread.CurrentCulture = Thread.CurrentThread.CurrentUICulture;
			//
            Application.Run(new Form1());
            
6-
now on 
MessageBox.Show(String.TEST);

I got 2!