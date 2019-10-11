//use 
		//public declaration
		private ToolTipHelper toolTips = new ToolTipHelper();


		var tt = toolTips.GetControlToolTip("button1");
		tt.SetToolTip(button1, "This is my button1 tooltip");
		tt = toolTips.GetControlToolTip("button2");
		tt.SetToolTip(button2, "This is my button2 tooltip");



//class
        public class ToolTipHelper
        {
            private readonly Dictionary<string, ToolTip> tooltips;

            /// <summary>
            /// Constructor
            /// </summary>
            public ToolTipHelper()
            {
                this.tooltips = new Dictionary<string, ToolTip>();
            }

            /// <summary>
            /// Key a tooltip by its control name
            /// </summary>
            /// <param name="controlName"></param>
            /// <returns></returns>
            public ToolTip GetControlToolTip(string controlName)
            {
                if (tooltips.ContainsKey(controlName))
                {
                    return tooltips[controlName];
                }
                else
                {
                    ToolTip tt = new ToolTip();
                    tooltips.Add(controlName, tt);
                    return tt;
                }
            }
        }