        public delegate void URLReturn(string value);
        public event URLReturn URLResponse;
        
        
        //use
			if (URLResponse !=null)
				URLResponse(System.Web.HttpUtility.UrlDecode(result));