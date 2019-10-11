//http://dotnet.mvps.org/dotnet/faqs/?id=listviewitemtooltips&lang=en <http://dotnet.mvps.org/dotnet/faqs/?id=listviewitemtooltips&lang=en>


        private void listV1_MouseMove(object sender, MouseEventArgs e)
        {
            ListViewItem lvi = this.listV1.GetItemAt(e.X, e.Y);
            //if ((!object.ReferenceEquals(lvi, m_HoveredItem)))

            if (lvi!=null)
            {
                if (lvi.ForeColor == Color.OrangeRed)
                {
                    if (lstvToolTip.GetToolTip(listV1) != " Allow DB Null ")
                        this.lstvToolTip.SetToolTip(listV1, " Allow DB Null ");
                }
                else
                    this.lstvToolTip.SetToolTip(listV1, "");
            }
        } 