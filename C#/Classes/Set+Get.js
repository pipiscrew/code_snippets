public class Customer
{
    private int m_id = -1;

    public int ID
    {
        get
        {
            return m_id;
        }
        set
        {
            m_id = value;
        }
    }
}

//--

//frm2
class Point {
    double x, y;
    public Point(double x, double y) {
        this.x = x;
        this.y = y;
    }
    public double X {
        get { return x; }
        set { x = value; }
    }
    public double Y {
        get { return y; }
        set { y = value; }
    }
}


//frm35 (if you have version 3.x of C#)
class Point {
    public Point(double x, double y) {
        X = x;
        Y = y;
    }
    public double X { get; set; }
    public double Y { get; set; }
}