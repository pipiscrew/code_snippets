You can remove the 404 by removing the line

//@ sourceMappingURL=jquery-1.10.2.min.map
from the top part of your jQuery file.

The top part of the jQuery file will look like this.

/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-1.10.2.min.map
*/
Just change that to

/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license */



Purpose of a source map

Basically it's a way to map a combined/minified file back to an unbuilt state. When you build for production, along with minifying and combining your JavaScript files, you generate a source map which holds information about your original files. When you query a certain line and column number in your generated JavaScript you can do a lookup in the source map which returns the original location. Developer tools (currently WebKit nightly builds, Google Chrome, or Firefox 23+) can parse the source map automatically and make it appear as though you're running unminified and uncombined files. (Read more on this http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/)