//http://stackoverflow.com/questions/13812014/binding-generic-collection-list-to-property-grid
//http://stackoverflow.com/questions/4091888/properties-generated-at-runtime-propertygrid-selectedobject
/http://www.codeproject.com/Articles/4448/Customized-display-of-collection-data-in-a-Propert
//http://stackoverflow.com/questions/3491556/how-to-display-a-dynamic-object-in-property-grid
//http://blog.csharphelper.com/2010/05/07/make-a-type-converter-to-let-the-propertygrid-display-and-edit-compound-properties-in-c.aspx
//http://msdn.microsoft.com/en-us/library/aa302326.aspx


            PropertyGrid OptionsPropertyGrid = new PropertyGrid();
            OptionsPropertyGrid.Size = new Size(300, 250);
            OptionsPropertyGrid.Location = new Point(300, 250);
         
            this.Controls.Add(OptionsPropertyGrid);
            this.Text = "Options Dialog";

            OptionsPropertyGrid.SelectedObject = result; //list<t>
            OptionsPropertyGrid.BringToFront();