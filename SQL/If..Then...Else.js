IF @REQid_1 <> 0
BEGIN
 select @cNo= counter from counterdokimia (TABLOCKX )
 where codeait= @ccode

 select @cNo= @cNo +1
 update counterdokimia set  counter = @cNo
 where codeait= @ccode

 select @cNoDokimioy=@NoAit + '-' + convert(nvarchar(5),@cNo)
END
else select @cNoDokimioy = ''

if @bool > 0
begin
 {
     commands
 }
end
else
begin
 {
     commands
 }
end