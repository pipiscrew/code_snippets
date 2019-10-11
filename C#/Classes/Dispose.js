//http://stackoverflow.com/questions/898828/c-finalize-dispose-pattern
When implementing a sealed class that doesnt 
use unmanaged resources, you simply implement a Dispose method 
as with normal interface implementations:

public sealed class A : IDisposable
{
    public void Dispose()
    {
        // get rid of managed resources, call Dispose on member variables...
    }
}


When implementing an unsealed class, or one using unmanaged resources, 
do it like this:

public class B : IDisposable
{    
    public void Dispose()
    {
        Dispose(true);
        GC.SuppressFinalize(this);
    }

    protected virtual void Dispose(bool disposing)
    {
        if (disposing)
        {
            // get rid of managed resources
        }   
        // get rid of unmanaged resources
    }

    ~B()
    {
        Dispose(false);
    }
}