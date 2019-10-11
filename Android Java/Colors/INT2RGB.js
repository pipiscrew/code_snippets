//http://stackoverflow.com/questions/7427141/how-to-get-rgb-value-from-hexadecimal-color-code-in-java
Color color =  Color.decode("0xFF0000");
int red = color.getRed();
int blue = color.getBlue();
int green = color.getGreen();