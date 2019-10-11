For example, a ScoreCounter class might meet the contract specified by the Counting interface:

interface Counting
{
abstract void increment();
abstract int getValue();
}

So might a Stopwatch, although it might have a totally different internal representation. Both would have increment() and getValue() methods, but the bodies of these methods might look quite different. For example, a ScoreCounter for a basketball game might implement increment() so that it counts by 2 points each time, while a Stopwatch might call its own increment() method even if no one else does.

A class that implements a particular interface must declare this explicitly:

class ScoreCounter implements Counting {
....
}

If a class implements an interface, an instance of that class can also be treated as though its type were that interface. For example, it can be labeled with a name whose declared type is that interface. For example, an instance of class ScoreCounter can be labeled with a name of type Counting. It will also answer true when asked whether it's an instanceof that interface type: if myScoreCounter is a ScoreCounter, then myScoreCounter instanceof Counting is true. Similarly, you can pass or return a ScoreCounter whenever a Counting is required by a method signature.

The generality of interfaces and the inclusion of multiple implementations within a single (interface) type is an extremely powerful feature. For example, you can use a name of type Counting to label either an instance of ScoreCOunter or an instance of Stopwatch (and use its increment() and getValue() methods) without even knowing which one you've got.

