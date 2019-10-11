This might help get you started: 
1. Add an UltraToolbarsManager to your Form
2. Right-click on the toolbars manager in the component tray and select 'Customize...'
3. Click the 'Tools' tab in the customize dialog.
4. Click the 'New' button and add a in the tool type combo, select 'Popup Menu'
5. Specify a key to identify the menu (don't worry about the caption as it will not be seen) and click 'Add'
6. Change the tool type to 'Button' (or any other type of item you want in your drop down).
7. Add the tools you want to be seen in your drop down the same way you added the popup menu.
8. Click 'Close' on the 'New Tool' dialog
9. Select the 'PopupMenuTool Designer' tab on the customize dialog.
10. In the 'Current Menu' drop down, select the popup menu added in step 5.
11. Drag the tools you want in your drop down from the 'Available Tools' section to the section on the left.
12. Click 'Close' in the customize dialog
13. Add an UltraDropDownButton to the Form and select the new button.
14. In the VS property grid, drop down the arrow for the PopupItem property and select the popup menu added in step 5.
Basically, steps 1-12 deal with defining a drop down menu. The last two steps deal with how to use that menu in a separate drop down control.
