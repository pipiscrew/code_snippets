Toast.makeText(MainActivity.this, "Disconnected from Firebase", Toast.LENGTH_SHORT).show();


Toast.makeText(this, "No Network", 3000).show(); 

//to diff context
Toast.makeText(getApplicationContext(), "JSON saved!", Toast.LENGTH_LONG).show();