    static Random _r = new Random();
    static void F()
    {
	// Use class-level Random so that when this
	// method is called many times, it still has
	// good Randoms.
	int n = _r.Next(5);
	// Can return 0, 1, 2, 3, or 4

	// If this declared a local Random, it would
	// repeat itself.
	Console.WriteLine(n);
    }
    
#2
Random random = new Random();
int randomNumber = random.Next(0. 100);
tRandom.Text = randomNumber.ToString();
