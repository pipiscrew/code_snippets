        public static string ToGreekUpper(string text)
        {
            return (!string.IsNullOrEmpty(text) ? text.ToUpper().Replace("Ά", "Α").Replace("Έ", "Ε").Replace("Ή", "Η").Replace("Ί", "Ι").Replace("Ό", "Ο").Replace("Ύ", "Υ").Replace("Ώ", "Ω") : string.Empty);
        }

        public static string ConvertToGreeklish(string term)
        {
            if (string.IsNullOrEmpty(term)) return String.Empty;

            return term.ToUpper().Replace("Α", "A").Replace("Β", "B").Replace("Γ", "G").Replace("Δ", "D").Replace("Ε", "E").Replace("Ζ", "Z").Replace("Η", "I").Replace("Θ", "TH").
                Replace("Ι", "I").Replace("Κ", "K").Replace("Λ", "L").Replace("Μ", "M").Replace("Ν", "N").Replace("Ξ", "KS").Replace("Ο", "O").Replace("Π", "P").Replace("Ρ", "R").
                Replace("Σ", "S").Replace("Τ", "T").Replace("Υ", "I").Replace("Φ", "F").Replace("Χ", "X").Replace("Ψ", "PS").Replace("Ω", "O").Replace("Ί", "I").Replace("Έ", "E").
                Replace("Ό", "O").Replace("Ά", "A").Replace("Ή", "I").Replace("Ύ", "I").Replace("Ώ", "O");
        }