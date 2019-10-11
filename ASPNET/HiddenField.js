//html
<asp:HiddenField ID="hidden_BankDeposit_selected" ClientIDMode="Static" runat="server" />
<input name='btSelectItem' id='btSelectItem' onclick='set_selected_bank(this.id);' value='test1' type='radio'>
<input name='btSelectItem' id='btSelectItem' onclick='set_selected_bank(this.id);' value='test2' type='radio'>

//code
order.Comments += "\r\n" + this.hidden_BankDeposit_selected.Value;

//js
function set_selected_bank(id) {
    console.log(id);
    $("#hidden_BankDeposit_selected").val($("#"+id).val());
}