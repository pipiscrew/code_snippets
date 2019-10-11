Public Shared Sub Main(ByVal args As String())
    Console.ForegroundColor = ConsoleColor.Blue
    Console.WriteLine("   ________________________________________________________________________")
    Console.WriteLine("______________________________________________________________________________")
    Console.ForegroundColor = ConsoleColor.Red
    Console.WriteLine(".NET___________.__               __________                __                 ")
    Console.WriteLine("    \__    ___/|__| ____ ___.__. \______   \_____    ____ |  | __ ___________ ")
    Console.WriteLine("      |    |   |  |/    <   |  |  |     ___/\__  \ _/ ___\|  |/ // __ \_  __ \")
    Console.WriteLine("      |    |   |  |   |  \___  |  |    |     / __ \\  \___|    <\  ___/|  | \/")
    Console.WriteLine("      |____|   |__|___|  / ____|  |____|    (____  /\___  >__|_ \\___  >__|   ")
    Console.WriteLine("                       \/\/                      \/     \/     \/    \/       ")
    Console.ForegroundColor = ConsoleColor.Blue
    Console.WriteLine("__________________________________________________________By Dr.Pc Putte______")
    Console.WriteLine("   ________________________________________________________________________")
    Console.WriteLine(Environment.NewLine)
    Console.ForegroundColor = ConsoleColor.White
    If (args.Length = 0) Then
        Console.WriteLine("Fatal error: No inputs specified")
        Console.WriteLine("Usage: Tiny <input assembly file> <output assembly file>")
    Else
	endif
end sub