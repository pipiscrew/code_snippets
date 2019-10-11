//http://proguard.sourceforge.net/index.html#manual/usage.html

-flattenpackagehierarchy [package_name]
Specifies to repackage all packages that are renamed, by moving them into the single given parent package. Without argument or with an empty string (''), the packages are moved into the root package. This option is one example of further obfuscating package names. It can make the processed code smaller and less comprehensible. Only applicable when obfuscating.

-repackageclasses [package_name]
Specifies to repackage all class files that are renamed, by moving them into the single given package. Without argument or with an empty string (''), the package is removed completely. This option option overrides the -flattenpackagehierarchy option. It is another example of further obfuscating package names. It can make the processed code even smaller and less comprehensible. Its deprecated name is -defaultpackage. Only applicable when obfuscating.
Counter-indication: classes that look for resource files in their package directories will no longer work properly if they are moved elsewhere. When in doubt, just leave the packaging untouched by not using this option.


just use 
-repackageclasses

to obfuscate more!!!