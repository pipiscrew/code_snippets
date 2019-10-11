using System.Diagnostics;
 
var timer = new Stopwatch();
timer.Start();
 
// do something you want to profile
 
timer.Stop();
var ms = timer.ElapsedMilliseconds;
 
// write timing to logs

//OR
var timer = Stopwatch.StartNew();
var ms = timer.ElapsedMilliseconds;

//Just 2 Lines and no ugly indenting of my code. There is really no need to stop the Stopwatch. No resources will be freed if you do, it just stops counting.

/////////////
//http://pietschsoft.com/post/2015/12/17/Code-Tip-Simpler-Performance-Timer-Logging-in-C
/////////////

While the above example is fairly simple, your code can start to get messy. So, lets make it better by encapsulating it into a special class to make it as easy to use as possible.

First, here's the usage example of the performance timing logging class that will be listed below:

using (new PerfTimerLogger("name of code being profiled"))
{
    // do something you want to profile
}
Now, as you can see the above code is MUCH simpler to implement within your code and not very intrusive. Basically, 2 lines of code, instead of 4; and not extra variables to keep track of.

Here's an implementation of the PerfTimerLogger class that allows it to be used as the above example demonstrates:


using System.Diagnostics;
 
public class PerfTimerLogger : IDisposable
{
    public PerfTimerLogger(string message)
    {
        this._message = message;
        this._timer = new Stopwatch();
        this._timer.Start();
    }
 
    string _message;
    Stopwatch _timer;
 
    public void Dispose()
    {
        this._timer.Stop();
        var ms = this._timer.ElapsedMilliseconds;
 
        // log the performance timing with the Logging library of your choice
        // Example:
        // Logger.Write(
        //     string.Format("{0} - Elapsed Milliseconds: {1}", this._message, ms)
        // );
    }
}