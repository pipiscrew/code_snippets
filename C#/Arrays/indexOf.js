//http://www.dotnetperls.com/array-indexof

	//
	// Example integer array is declared.
	//
	int[] array = new int[6];
	array[0] = 1;
	array[1] = 3;
	array[2] = 5;
	array[3] = 7;
	array[4] = 8;
	array[5] = 5;

	//
	// Find index of element with value 5.
	//
	int index1 = Array.IndexOf(array, 5);

	//
	// Find index of value 3.
	//
	int index2 = Array.IndexOf<int>(array, 3);

	//
	// Find last index of 5.
	//
	int index3 = Array.LastIndexOf(array, 5);

	//
	// Write the results.
	//
	Console.WriteLine(index1);
	Console.WriteLine(index2);
	Console.WriteLine(index3);