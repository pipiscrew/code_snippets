//https://gist.github.com/mcaskill/45c02c7366ca7ccc94ec91ad286c6de7

    function is_blank($var)
    {
        return empty($var) && !is_numeric($var);
    }