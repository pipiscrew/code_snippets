[android] use ant to automate release process

references :
http://developer.android.com/tools/building/building-cmdline.html
http://stackoverflow.com/questions/9932498/signing-applications-automatically-with-password-in-ant
http://www.vogella.com/tutorials/ApacheAnt/article.html

1-download binary distribution from
http://ant.apache.org/bindownload.cgi

2-extract goto C:\apache-ant-1.9.3\bin, edit ant.bat, on top add (warning short name for ‘program files’) :


set JAVA_HOME=c:\Progra~1\Java\jdk1.7.0_07
3-to use ant, should have a build.xml file, goto androidSDK\tools execute :


android update project --target android-16 --subprojects --path "path to your java project"
build.xml generated!

4a-goto “path to your java project” create a file called ‘ant.properties’ write :


key.store.password=mypasswordOne
key.alias.password=mypasswordTwo
key.store=c:\\test\\private (warning must be double slashes)
key.alias=mykeystore

4b-delete the bin dir from your project! or add it as build action aka (on build.xml) :
<delete dir="bin"/>

5-goto X:\apache-ant-1.9.3\bin execute :


ant release -buildfile "path to your java project"
to avoid UTF-8 errors use :


ant -D"file.encoding=UTF-8" release -buildfile "path to your java project\build.xml"
tested and working with a PRJ has reference to project library..

FYI
Developers no longer need to add the android:debuggable attribute to the tag in the manifest — the build tools add the attribute automatically. In Eclipse/ADT, all incremental builds are assumed to be debug builds, so the tools insert android:debuggable=”true”. When exporting a signed release build, the tools do not add the attribute. In Ant, a ant debug command automatically inserts the android:debuggable=”true” attribute, while ant release does not. If android:debuggable=”true” is manually set, then ant release will actually do a debug build, rather than a release build. (source http://lfhck.com/question/236144/android-debuggable-default-value)