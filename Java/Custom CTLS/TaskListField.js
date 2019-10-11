//http://stackoverflow.com/questions/1872160/how-to-customize-list-field-in-blackberry

//Remember the milk for BB
//http://code.google.com/p/rtm4bb/source/browse/trunk/src/org/emerick/rtm/ui/lists/TaskListField.java

//use:
//add(new TaskListField());

class TaskListField extends ListField implements ListFieldCallback {
 private Vector rows;
 private Bitmap p1;
 private Bitmap p2;
 private Bitmap p3;

 public TaskListField() {
  super(0, ListField.MULTI_SELECT);
  setRowHeight(80);
  setEmptyString("Hooray, no tasks here!", DrawStyle.HCENTER);
  setCallback(this);

  p1 = Bitmap.getBitmapResource("1.png");
  p2 = Bitmap.getBitmapResource("2.png");
  p3 = Bitmap.getBitmapResource("3.png");

  rows = new Vector();

  for (int x = 0; x < 10; x++) {
   TableRowManager row = new TableRowManager();

   // SET THE PRIORITY BITMAP FIELD
   // if high priority, display p1 bitmap
   if (x % 2 == 0) {
    row.add(new BitmapField(p1));
   }
   // if priority is 2, set p2 bitmap
   else if (x % 3 == 0) {
    row.add(new BitmapField(p2));
   }
   // if priority is 3, set p3 bitmap
   else {
    row.add(new BitmapField(p3));
   }

   // SET THE TASK NAME LABELFIELD
   // if overdue, bold/underline
   LabelField task = new LabelField("Task #" + String.valueOf(x),
     DrawStyle.ELLIPSIS);
   // if due today, bold
   if (x % 2 == 0) {
    task.setFont(Font.getDefault().derive(
      Font.BOLD | Font.UNDERLINED));
    System.out.println("OVERDUE");
   } else {
    task.setFont(Font.getDefault().derive(Font.BOLD));
    System.out.println("TODAY");
   }

   row.add(task);

   // SET THE LIST NAME
   row.add(new LabelField("List Name #" + String.valueOf(x),
     DrawStyle.ELLIPSIS) {
    protected void paint(Graphics graphics) {
     graphics.setColor(0x00878787);
     super.paint(graphics);
    }
   });

   // SET THE DUE DATE/TIME
   row.add(new LabelField("Due Date #" + String.valueOf(x),
     DrawStyle.ELLIPSIS | LabelField.USE_ALL_WIDTH
       | DrawStyle.RIGHT) {
    protected void paint(Graphics graphics) {
     graphics.setColor(0x00878787);
     super.paint(graphics);
    }
   });
   rows.addElement(row);
  }
  setSize(rows.size());

 }

 // ListFieldCallback Implementation
 public void drawListRow(ListField listField, Graphics g, int index, int y,
   int width) {
  TaskListField list = (TaskListField) listField;
  TableRowManager rowManager = (TableRowManager) list.rows
    .elementAt(index);
  rowManager.drawRow(g, 0, y, width, list.getRowHeight());
 }

 private class TableRowManager extends Manager {
  public TableRowManager() {
   super(0);
  }

  // Causes the fields within this row manager to be layed out then
  // painted.
  public void drawRow(Graphics g, int x, int y, int width, int height) {
   // Arrange the cell fields within this row manager.
   layout(width, height);

   // Place this row manager within its enclosing list.
   setPosition(x, y);

   // Apply a translating/clipping transformation to the graphics
   // context so that this row paints in the right area.
   g.pushRegion(getExtent());

   // Paint this manager's controlled fields.
   subpaint(g);

   g.setColor(0x00CACACA);
   g.drawLine(0, 0, getPreferredWidth(), 0);

   // Restore the graphics context.
   g.popContext();
  }

  // Arrages this manager's controlled fields from left to right within
  // the enclosing table's columns.
  protected void sublayout(int width, int height) {
   // set the size and position of each field.
   int fontHeight = Font.getDefault().getHeight();
   int preferredWidth = getPreferredWidth();

   // start with the Bitmap Field of the priority icon
   Field field = getField(0);
   layoutChild(field, 32, 32);
   setPositionChild(field, 0, 0);

   // set the task name label field
   field = getField(1);
   layoutChild(field, preferredWidth - 16, fontHeight + 1);
   setPositionChild(field, 34, 3);

   // set the list name label field
   field = getField(2);
   layoutChild(field, 150, fontHeight + 1);
   setPositionChild(field, 34, fontHeight + 6);

   // set the due time name label field
   field = getField(3);
   layoutChild(field, 150, fontHeight + 1);
   setPositionChild(field, preferredWidth - 152, fontHeight + 6);

   setExtent(preferredWidth, getPreferredHeight());
  }

  // The preferred width of a row is defined by the list renderer.
  public int getPreferredWidth() {
   return Graphics.getScreenWidth();
  }

  // The preferred height of a row is the "row height" as defined in the
  // enclosing list.
  public int getPreferredHeight() {
   return getRowHeight();
  }
 }

 public Object get(ListField listField, int index) {
  // TODO Auto-generated method stub
  return null;
 }

 public int getPreferredWidth(ListField listField) {
  // TODO Auto-generated method stub
  return 0;
 }

 public int indexOfList(ListField listField, String prefix, int start) {
  // TODO Auto-generated method stub
  return 0;
 }

}