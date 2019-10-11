'http://social.msdn.microsoft.com/forums/en-US/sqlce/thread/7b3d4664-a49b-4874-9091-75ee5909988c/

1-
delete from us3rs

2-
ALTER TABLE us3rs ALTER COLUMN us3r_id IDENTITY (1,1)

'finally identidy clear!


'IDENTITY (1,1) shmainei :
'1=poio 8a einai to epomeno number otan ginei add new
'1=to id+? gia ta new..


**2nd use** :
ex. ama exoyme ena table  me records


1,a
2,b
3,c
4,t
5,o



kai sbhsoyme ta 4+5 meta otan kanoyme addnew 8a 3ekinhsei apo to 6
xwris delete kai me :
ALTER TABLE us3rs ALTER COLUMN us3r_id IDENTITY (4,1)

8etoyme sto table oti to epomeno 8a einai to 4! LOL!


'- ston SQL SERVER we can use :
DBCC CHECKIDENT (<tablename>,RESEED,1)