                        protected void rptrCart_ItemDataBound(object sender, RepeaterItemEventArgs e)
                        {
                            if (e.Item.ItemType != ListItemType.Item && e.Item.ItemType != ListItemType.AlternatingItem) return;

                            HtmlGenericControl spanUpdateQuantity = e.Item.FindControl("spanUpdateQuantity") as HtmlGenericControl;
                            if (spanUpdateQuantity != null) spanUpdateQuantity.Attributes.Add("onclick", "updateCartItemQuantity('" + txtQuantity.ClientID + "', '" + jss.Serialize(cartItem) + "');return false;");
                        }
                        
<asp:Repeater ID="rptrCart" OnItemDataBound="rptrCart_ItemDataBound" runat="server">
	<ItemTemplate>
				<span id="spanUpdateQuantity" class="input-refresh-icon" clientidmode="Static" runat="server"></span>
	</ItemTemplate>
</asp:Repeater>
