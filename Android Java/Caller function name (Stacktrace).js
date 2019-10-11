//http://stackoverflow.com/questions/4065518/java-how-to-get-the-caller-function-name

StackTraceElement[] stacktrace = Thread.currentThread().getStackTrace();
StackTraceElement e = stacktrace[2];//maybe this number needs to be corrected
String methodName = e.getMethodName();

//A StackTraceElement has getClassName(), getFileName(), getLineNumber() and getMethodName()