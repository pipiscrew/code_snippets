//http://stackoverflow.com/questions/5248583/how-to-get-a-color-from-hexadecimal-color-string
colors[0]=Color.rgb(Integer.parseInt(barcolor.split(",")[0]),Integer.parseInt(barcolor.split(",")[1]),Integer.parseInt(barcolor.split(",")[2]));


	private int RGB2INT(String RGB)
	{
		return Color.rgb(Integer.parseInt(RGB.split(",")[0]),Integer.parseInt(RGB.split(",")[1]),Integer.parseInt(RGB.split(",")[2]));
	}
		