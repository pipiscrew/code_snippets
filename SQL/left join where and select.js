--normal
select Toy_Code,ToyCaption_Title from COM_Toys
left join ToyCaptions on ToyCaptions.ToyCaption_Toy_ID  = Toys.Toy_ID
where ToyCaptions.ToyCaption_Language_ID=1
 
 
--join with where inline
select Toy_Code,ToyCaption_Title from COM_Toys
left join ToyCaptions on ToyCaptions.ToyCaption_Toy_ID  = Toys.Toy_ID and ToyCaption_Language_ID=1
 
 
--join with select
select Toy_Code,ToyCaption_Title from COM_Toys as TBLA
left join (select * from ToyCaptions where ToyCaption_Language_ID=1) as TBLB ON TBLA.Toy_ID = TBLB.ToyCaption_Toy_ID
 
 
--using cross apply
select Toy_Code,TBLB.ToyCaption_Title from Toys 
Cross Apply (select top 1 ToyCaption_Title from ToyCaptions where ToyCaption_Language_ID=1 and ToyCaption_Toy_ID= Toys.Toy_ID) as TBLB