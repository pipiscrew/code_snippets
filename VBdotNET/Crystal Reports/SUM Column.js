se ena textbox r-click 'edit formula' (afoy exei ginei add apo de3ia sto 'Formula fields'
sum({DataTable1.agoresa3ia}) - sum({DataTable1.pwlhseisa3ia})

^^^^^^^^^^^^^report fields^^^^^^^^^^^^^

gia na kanoyme sum ena column 
1-prepei to field na einai numeric (double etc.)
2-r-click sto report footer insert summary
3-epilegoyme to numeric report field kai meta SUM sto 2o combo





crystal syntax:
source:
http://www.codeproject.com/KB/aspnet/Crystal_Reports_in_net.aspx?fid=358698&df=90&mpp=25&noise=3&sort=Position&view=Quick&select=2100242&fr=26

Global NumberVar TotalAmount;
IF {ml_pic1md.FDISP}="1" Then
    TotalAmount := TotalAmount + {fieldname};