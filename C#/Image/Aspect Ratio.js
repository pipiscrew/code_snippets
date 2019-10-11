        internal double _width; //origin width
        internal double _height; //origin height
        
        private int AspectRatioByWidth(double newWidth)
        {
            double s = _height * (newWidth / _width);
            return Convert.ToInt32(Math.Round(s,0));
        }

        private int AspectRatioByHeight(double newHeight)
        {
            double s = (_width * (newHeight / _height));
            return Convert.ToInt32(Math.Round(s, 0));
        }