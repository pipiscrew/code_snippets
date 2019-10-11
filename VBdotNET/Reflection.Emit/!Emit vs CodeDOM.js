'source
'http://ayende.com/Blog/archive/2006/08/13/ReflectionEmitVsCodeDOM.aspx

Both technologies allow you to generate executable code at runtime (even though CodeDOM may not have been originally intended for this). This opens up some interesting possibilities (Rhino Mocks and NHibernate, for instnace, uses Dynamic Proxy, which uses Reflection.Emit to generate proxies for object at runtime).

Reflection.Emit gives you complete control of the generated IL, while CodeDOM leaves you creating source code dynamically.

Reflection.Emit has the following advantages:

    * You can generate new classes directly into an existing assembly, this helps reduce memory consumtion.
    * You can generate new methods in a class (.Net 2.0, dynamic methods).
    * Significanty faster than any other alternative.

And disadvantages:

    * It is rocket science mixed with the black arts. The common path is merely hard, but try doing something like support out/ref values, or handling sealed methods, and you are thrown into a mire of special cases. That is completely ignoring the new stuff in .Net 2.0, like generics, which are such a fun to try to support.
    * It is not debuggable, at all.
    * It is very easy to produce invalid code, and there isn't much information about what is wrong, nor is there much information about how you should go about it.
    * Side note: Even the C# Compiler can be presuded to produce invalid code in certain instances, just to give you an idea about how hard this thing is.

CodeDOM has the following advantages:

    * Very easy to understand and use.
    * The generated code is debuggable.
    * You get a lot more information about the errors, often with how to fix them.

And disadvantages:

    * You can't incRemently add classes to assembly (important for things like Dynamic Proxy). Every time you generate code, it has its own own assembly.
    * You are limited to what you can do within the langauge. There are things you just can't do in code, which are easily possible in Reflection.Emit. There are usually other ways around it, though.
    * Slower than Reflection.Emit, because we are generating the code and then compiling it on the fly. This is usually very little code, so it doesn't really matter, and caching helps quite a bit.

Given that caching is going to be used anyway, I think that I can ignore most of the performance benefits of using Reflection.Emit, in favor of a much simpler programming model offered by CodeDOM. The only thing that really needs Reflection.Emit is dynamically adding methods to a class, and that is not something that you often need.