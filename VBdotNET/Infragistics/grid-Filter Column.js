Private Sub LIST_GRID_InitializeLayout(ByVal sender As Object, ByVal e As Infragistics.Win.UltraWinGrid.InitializeLayoutEventArgs) Handles LIST_GRID.InitializeLayout
' Enable the the filter row user interface by setting the FilterUIType to FilterRow.
e.Layout.Override.FilterUIType = Infragistics.Win.UltraWinGrid.FilterUIType.FilterRow
' FilterEvaluationTrigger specifies when UltraGrid applies the filter criteria typed
' into a filter row. Default is OnCellValueChange which will cause the UltraGrid to
' re-filter the data as soon as the user modifies the value of a filter cell. This
' property is exposed off the the column as well so it can be set on a per column basis.
e.Layout.Override.FilterEvaluationTrigger = Infragistics.Win.UltraWinGrid.FilterEvaluationTrigger.OnCellValueChange
e.Layout.Bands(0).Columns(1).FilterEvaluationTrigger = Infragistics.Win.UltraWinGrid.FilterEvaluationTrigger.OnCellValueChange '= Infragistics.Win.UltraWinGrid.FilterEvaluationTrigger.OnEnterKeyOrLeaveCell
' By default the UltraGrid selects the type of the filter operand editor based on
' the column's DataType. For DateTime and boolean columns it uses the column's editors.
' For other column types it uses the Combo. You can explicitly specify the operand
' editor style by setting the FilterOperandStyle on the override or the individual
' columns. This property is exposed on the column as well.
e.Layout.Override.FilterOperandStyle = Infragistics.Win.UltraWinGrid.FilterOperandStyle.Edit
e.Layout.Bands(0).Columns(1).FilterOperandStyle = Infragistics.Win.UltraWinGrid.FilterOperandStyle.Edit
' By default UltraGrid displays user interface for selecting the filter operator.
' You can set the FilterOperatorLocation to hide this user interface. This
' property is available on column as well so it can be controlled on a per column
' basis. Default is WithOperand. This property is exposed off the column as well.
e.Layout.Override.FilterOperatorLocation = Infragistics.Win.UltraWinGrid.FilterOperatorLocation.WithOperand
e.Layout.Bands(0).Columns(1).FilterOperatorLocation = Infragistics.Win.UltraWinGrid.FilterOperatorLocation.Hidden
' By default the UltraGrid uses StartsWith as the filter operator. You use
' the FilterOperatorDefaultValue property to specify a different filter operator
' to use. This is the default or the initial filter operator value of the cells
' in filter row. If filter operator user interface is enabled (FilterOperatorLocation
' is not set to Hidden) then that ui will be initialized to the value of this
' property. The user can then change the operator via the operator ui. This
' property is exposed off the column as well.
e.Layout.Override.FilterOperatorDefaultValue = Infragistics.Win.UltraWinGrid.FilterOperatorDefaultValue.StartsWith
e.Layout.Bands(0).Columns(1).FilterOperatorDefaultValue = Infragistics.Win.UltraWinGrid.FilterOperatorDefaultValue.StartsWith
' FilterOperatorDropDownItems property can be used to control the options provided
' to the user for selecting the filter operator. By default UltraGrid bases
' what operator options to provide on the column's data type. This property is
' avaibale on the column as well. Note that FilterOperatorDropDownItems is a flagged
' enum and thus multiple options can be combined using bitwise or operation.
e.Layout.Override.FilterOperatorDropDownItems = Infragistics.Win.UltraWinGrid.FilterOperatorDropDownItems.All
e.Layout.Bands(0).Columns(1).FilterOperatorDropDownItems = Infragistics.Win.UltraWinGrid.FilterOperatorDropDownItems.Equals 'Or Infragistics.Win.UltraWinGrid.FilterOperatorDropDownItems.NotEquals
' By default UltraGrid displays a clear button in each cell of the filter row
' as well as in the row selector of the filter row. When the user clicks this
' button the associated filter criteria is cleared. You can use the
' FilterClearButtonLocation property to control if and where the filter clear
' buttons are displayed.
e.Layout.Override.FilterClearButtonLocation = Infragistics.Win.UltraWinGrid.FilterClearButtonLocation.RowAndCell
' By default the UltraGrid performs case in-sensitive comparisons for filtering. You can
' use the FilterComparisonType property to change this behavior and perform case sensitive
' comparisons. This property is exposed off the column as well so it can be set on a
' per column basis.
e.Layout.Override.FilterComparisonType = Infragistics.Win.UltraWinGrid.FilterComparisonType.CaseInsensitive
e.Layout.Bands(0).Columns(1).FilterComparisonType = Infragistics.Win.UltraWinGrid.FilterComparisonType.CaseInsensitive
End Sub
