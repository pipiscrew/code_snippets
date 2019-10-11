declare @counter int
set @counter = 0
while @counter < 10
begin
set @counter = @counter + 1
print 'The counter is ' + cast(@counter as char)
print '?????? ' + convert(varchar(1),@counter) 
end
