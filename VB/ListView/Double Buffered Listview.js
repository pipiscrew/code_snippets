//http://www.codeproject.com/Tips/712085/Double-Buffered-List-View

//There's a simple way to double buffer a list view control to eliminate any flickering when adding data or images to the List View.

//When using a List View, set your main form to double buffered and create a new class called ListViewDoubleBuffered. In this class, you'll set your inherited List View to be Double Buffered. You can't set Double Buffering on the List View control when dragging and dropping the control to the form. You have to program the control yourself in code then add it to your form.


Public Class ListViewDoubleBuffered
    Inherits ListView

    Public Sub New()
        Me.DoubleBuffered = True
    End Sub
End Class 


//That's all there is to it. All you have to do now is create the List View using the class above and add it to the form.
Private lvListViewDoubleBuffered as New ListViewDoubleBuffered

lvListViewDoubleBuffered = New ListViewDoubleBuffered

With lvListViewDoubleBuffered
     'add any properties here
End With

Me.Controls.Add(lvListViewDoubleBuffered) 