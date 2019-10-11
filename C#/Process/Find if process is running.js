Process mysqld = Process.GetProcessesByName("mysqld").FirstOrDefault();
Process xampp = Process.GetProcessesByName("xampp-control").FirstOrDefault();

if (mysqld == null || xampp == null)
{
    Console.ForegroundColor = ConsoleColor.Red;
    Console.WriteLine("XAMPP or MYSQL not running!");
    Console.ForegroundColor = ConsoleColor.Gray;
    Environment.Exit(-1);
}