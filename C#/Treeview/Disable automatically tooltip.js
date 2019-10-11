//when a class inherits treeview
//http://stackoverflow.com/questions/1199564/sub-classing-treeview-in-winforms-for-mouse-over-tool-tips

private const int TVS_NOTOOLTIPS = 0x80;

protected override System.Windows.Forms.CreateParams CreateParams
{
    get
    {
        CreateParams p = base.CreateParams;
        p.Style = p.Style | TVS_NOTOOLTIPS;
        return p;
    }
}


http://microsoft.public.vb.controls.narkive.com/fEah2WIO/tooltip-missing-with-slider-on-usercontrol
http://www.pcreview.co.uk/forums/tooltip-treeview-control-t2892516.html