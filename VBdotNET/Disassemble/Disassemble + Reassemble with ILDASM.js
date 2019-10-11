'source
'http://fortheloveofcode.wordpress.com/2007/09/24/change-resources-inside-assembly/

'##1##
Step #1: Disassemble the assembly.

Use the following command to disassemble your .net exe or dll:

ildasm /out=assembly_name.il assembly_name.dll

(replace assembly_name.dll with your dll or exe name).

This will output plenty of data files. We are interested in these:

   1. *.resources - The binary resource files.
   2. assembly_name.res - The resources manifest.
   3. assembly_name.il - The actual MSIL code.

'##2##
Step #2: Edit the resources file(s).

'##3##
Step #3: Reassemble the assembly

Important: This will overwrite the original dll/exe !

ilasm /resource=assembly_name.res /dll /output=assembly_name.dll /key=signing_key.snk assembly_name.il

(replace assembly_name.dll with your dll or exe name and of course change the /dll to /exe if needed).

The signing key parameter is optional and is only needed if the original assembly was signed.

Of course, if it was signed by someone else to prevent tempering, you won't be able to use the modified assembly unless you provide the original signing key, which I assume you won't have. But that's just how .NET works