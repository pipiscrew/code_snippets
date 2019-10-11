declare @test NVARCHAR(15)

set @test = NULL --'Confections'

select * from Categories 
where (@test Is NULL OR Categories.CategoryName = @test)