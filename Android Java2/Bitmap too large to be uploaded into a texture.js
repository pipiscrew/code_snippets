//http://stackoverflow.com/a/14877627

This isn't a direct answer to the question (loading images >2048), but a possible solution for anyone experiencing the error.

In my case, the image was smaller than 2048 in both dimensions (1280x727 to be exact) and the issue was specifically experienced on a Galaxy Nexus. The image was in the drawable folder and none of the qualified folders. Android assumes drawables without a density qualifier are mdpi and scales them up or down for other densities, in this case scaled up 2x for xhdpi. Moving the culprit image to drawable-nodpi to prevent scaling solved the problem.