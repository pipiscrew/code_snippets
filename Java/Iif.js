if (a > b) {
     max = a;
}
else {
     max = b;
}

Setting a single variable to one of two states based on a single condition is
such a common use of if-else that a shortcut has been devised for it, the conditional
operator, ?:. Using the conditional operator you can rewrite the above example in a single
line like this:

max = (a > b) ? a : b;
 