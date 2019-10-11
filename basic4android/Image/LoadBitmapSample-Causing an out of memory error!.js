In most cases using LoadBitmapSample instead of LoadBitmap will solve the memory issue.
-LoadBitmapSample will not help if the images are already at the right size.

tc.bitmap= LoadBitmapSample(File.DirRootExternal & "/docbrowser", folderb, 750, 1110)