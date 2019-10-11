//http://www.hackchina.com/en/r/61511/Form1.cs__html
		private void StartDownload()
		{
			//将开始按纽设为不可用
			Start.Enabled=false;

			//取得要下载的文件名和URL地址
			
			string URL=srcAddress.Text;
			int n=URL.LastIndexOf("/");
			string URLAddress=URL.Substring(0,n);
			string fileName=URL.Substring(n+1,URL.Length-n-1);

			//取得存放地的路径
			string Dir=tarAddress.Text;
			string Path=Dir+"//"+fileName;

			//捕获异常,如果建立URL不成立...
			try
			{
				WebRequest myre=WebRequest.Create(URLAddress);
			}
			catch(WebException exp)
			{
				MessageBox.Show(exp.Message,"error");
			}
			try
			{
				statusBar.Text="开始下载文件......";
				client.DownloadFile(URLAddress,fileName);

				Stream str=client.OpenRead(URLAddress);
				StreamReader reader=new StreamReader(str);

				byte[] mbyte=new byte[100000];
				int allmybyte=(int)mbyte.Length;
				int startmbyte=0;
				statusBar.Text="正在接收数据......";

				while(allmybyte>0)
				{
					//m为读入缓冲区中的总字节数
					int m=str.Read(mbyte,startmbyte,allmybyte);
					if(m==0) break;
					startmbyte+=m;
					allmybyte-=m;
					/////////////////////////////////////////////////////
					progressBar1.Value=Math.Floor(startmbyte/allmybyte*100);
				}
				
				//到此,文件已经下载完,要写入本地.....
				FileStream fstr=new FileStream(Path,FileMode.OpenOrCreate,FileAccess.Write);
				fstr.Write(mbyte,0,startmbyte);
				str.Close();
				fstr.Close();

				statusBar.Text="下载完毕!!!!";
			}
			catch(WebException exp)
			{
				MessageBox.Show(exp.Message,"error");
				statusBar.Text="";
			}

			Start.Enabled=true;
		} 
		
		
		
#call
private void Start_Click(object sender, System.EventArgs e)
		{
			if(srcAddress.Text=="")
			{
				MessageBox.Show(this,"地址不能为空!");
				srcAddress.Text="";
			}
			Thread th=new Thread(new ThreadStart(StartDownload));
			th.Start();
		}