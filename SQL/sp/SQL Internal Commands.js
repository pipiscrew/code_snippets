Epistrefei poies baseis yparxoyn ston trexwn SQL server
Set rt = Dor.ExecProc("sp_databases")

@@IDENTITY
Declare @currProt int


INSERT INTO [Protocol]
         ( [ArithmosProt],
         [Attached])

VALUES
        ( @ArithmosProt_1,
         @Attached_15)

set @currProt = @@IDENTITY  --meta apo to insert sto @currpro epistrefei to
                            --to id ths eggrafhs poy proste8hke


epistrefei posA rows eginan update / dhmioyrgh8hkan
UPDATE authors SET au_lname = 'Jones'
WHERE au_id = '999-888-7777'
IF @@ROWCOUNT = 0
   print 'Warning: No rows were updated'


**
Execute
CREATE PROCEDURE [s_DomikimiaAithshsUPDbatch]
        (@comment_1         nvarchar(1000),
         @sectID_2         [int],
         @dokModify  [nvarchar](1000))

AS

declare @cmd nvarchar(1000)

set @cmd=' UPDATE [DomikimiaAithshs] SET  [comment]         = ''' + @comment_1 + ''', [sectID]         = ' + convert(varchar(20),@sectID_2)
set @cmd=@cmd + ' WHERE code IN (' + @dokModify +')'

exec sp_executesql @cmd
GO
