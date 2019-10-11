//http://www.conic.se/blog/posts/12/
Well, not exactly inline. But yesterday I found a way to execute arbitrary x86 code as a function call in C#. I actually thought it would be much harder but it turned out to be only a couple of lines (in addition to the assembly code).

What make it work is the UnmanagedFunctionPointer attribute which creates a delegate from a C-style function pointer. The only thing you need to know is the address of the function in memory.

The actual assembly code is stored in a byte array, which we can get a pointer to using unsafe C# code.

I don't know how fast these delegates are; any performance you make up by writing optimized assembly code, you might loose in the overhead of the delegate call. But, I'm optimistic and perhaps I'll get the time to profile this some day.

In this simple example, the assembly code adds two integers (8,9) and returns the value (17):

using System;
using System.Text;
using System.Runtime.InteropServices;

class X86AssemblyExec {
    [UnmanagedFunctionPointer(CallingConvention.Cdecl)]
    private delegate int TheDelegate();

    public static void Main(string[] args) {
        // C:
        // int eax = 8;
        // int ebx = 9;
        // eax += ebx;
        // return eax;

        // x86 assembly:
        // mov eax 8        B8 08 00 00 00
        // mov ebx 9        BB 09 00 00 00
        // add eax ebx      01 d8
        // ret              C3

        // opcode
        byte [] code = new byte[14];
        code[0] = (byte) 0xB8;
        code[1] = (byte) 0x08;
        code[2] = (byte) 0x00;
        code[3] = (byte) 0x00;
        code[4] = (byte) 0x00;
        
        code[5] = (byte) 0xBB;
        code[6] = (byte) 0x09;
        code[7] = (byte) 0x00;
        code[8] = (byte) 0x00;
        code[9] = (byte) 0x00;
        
        code[10] = (byte)0x01;
        code[11] = (byte)0xd8;
        
        code[12] = (byte)0xC3;
        
        code[13] = 0;

        unsafe {
            fixed (void *ptr = code) {
            
                // create the delegate
                TheDelegate del = (TheDelegate) Marshal.GetDelegateForFunctionPointer(
                    new IntPtr(ptr), typeof(TheDelegate));
                
                // call the function
                int x = del();
                
                // outputs 17
                Console.WriteLine(x);
            }
        }
    }
}