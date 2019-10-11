//http://blogs.msdn.com/b/jnak/archive/2007/12/10/specifying-a-toolbox-icon-for-a-control-in-the-wpf-designer.aspx

u drop a png file to project, name it namespace.class usercontrol name (ex ImportMapperClientWPF.ImporterView.png)
set the Buildaction = EmbeddedResource done!

//http://stackoverflow.com/questions/7426318/how-can-i-change-the-access-modifier-of-a-window-from-public-to-internal
Make a windows internal, in XAML add the ClassModifier aatribute + on code intenral
<Window x:Class="ImportMapperClientWPF.frmTSQL" x:ClassModifier="internal"