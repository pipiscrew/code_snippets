//http://www.linuxtopia.org/online_books/android/devguide/guide/practices/design/android_performance_use_final.html

static final int intVal = 42;
static final String strVal = "Hello, world!";
The class no longer requires a <clinit> method, because the constants go into classfile
 static field initializers, which are handled directly by the VM. Code accessing intVal
 will use the integer value 42 directly, and accesses to strVal will use a relatively
 inexpensive "string constant" instruction instead of a field lookup.