//http://stackoverflow.com/a/17852480

/**
 * Truncates the given string at the specified length.
 *
 * @param string $str The input string.
 * @param int $width The number of chars at which the string will be truncated.
 * @return string
 */
function truncate($str, $width) {
    return strtok(wordwrap($str, $width, "...\n"), "\n");
}