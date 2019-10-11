CREATE PROCEDURE [s_REQADD]
 (@PelPel_1  [int],
  @PelProter_2  [int],
  @PelEidos_3  [int])

AS
Declare @ccode int
Declare @cyear [nvarchar](4)
Declare @creq [nvarchar](15)
--Dhlwnoyme 3metablhtes

--selectaroyme ta code/etos kai ta bazoyme se aytes
select @ccode=code , @cyear = etos from CounterAithseis (TABLOCKX ) -- gia na mhn einai MuLTI

select @ccode =@ccode +1
update CounterAithseis set code=@ccode
select @creq =  convert(nvarchar(15),@ccode)  + '/' + @cyear
--kanoyme convert to @ccode se nvarchar

INSERT INTO [Requests]
  ( [PelPel],
  [PelProter],
  [PelEidos],
  [KwdAit])

VALUES
 ( @PelPel_1,
  @PelProter_2,
  @PelEidos_3,
  @creq)
GO