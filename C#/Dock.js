//http://stackoverflow.com/questions/154543/panel-dock-fill-ignoring-other-panel-dock-setting
Docking layout depends on the order of sibling controls. A docked controls only take 
the layout of previous docked siblings into account. Hence the control with Dock=Fill should be last in the sibling order, if you want it to take the other docked controls into account, and not just be overlapped by them.

This can be confusing because the sibling-order is not necessarily the same as the visual
 order, and the sibling order is not always apparent from the design view.

The Document outline window (View -> Other Windows -> Document outline) gives a useful 
tree-view over the control hierarchy and order, and allows you to change the sibling order of controls.