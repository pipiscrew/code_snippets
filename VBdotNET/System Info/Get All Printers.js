Protected Overrides Sub ChargeImpresoras()

        Dim lPrintDoc As New Printing.PrintDocument
        Dim lPrinter As Object

        For Each lPrinter In PrinterSettings.InstalledPrinters
            cboPrinters.Items.Add(lPrinter)
        Next
End Sub