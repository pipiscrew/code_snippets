    private String[] en_array= {"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"};
    private String[] gr_array= {"Α","Β","Ψ","Δ","Ε","Φ","Γ","Η","Ι","Ξ","Κ","Λ","Μ","Ν","Ο","Π","*","Ρ","Σ","Τ","Θ","*","Ω","Χ","Υ","Ζ"};
    
    
	String d2 = input.getText().toString();
	
	for (int i=0; i<en_array.length; i++) {
	  d2 = d2.replaceAll(en_array[i], gr_array[i]);
	}
	
	d.setText(d2);