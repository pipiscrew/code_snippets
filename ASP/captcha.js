//https://github.com/mjpclab/AspDigitalCaptcha

//contact page
<form name="RegistrationForm" id="RegistrationForm" method="post" action="Default.asp?Static=41">
	<tr>
		<td colspan="4" height="4"></td>
	</tr>
	<tr>
		<td>Security Code</td>
		<td><input type="text" class="account_input" id="txtcaptcha" name="txtcaptcha" value=""/></td>
		<td>
	<%
	Randomize()
	Session("captcha") = (Rnd*10 mod 10) & (Rnd*10 mod 10) & (Rnd*10 mod 10) & (Rnd*10 mod 10)
	%>
	<img src="captcha.asp" />
		</td>
		<td></td>
	</tr>
	<tr>
		<td colspan="4" height="4"></td>
	</tr>

</form>

//submit form page
	if Session("captcha") <> Request.Form("txtcaptcha") then 
		Response.write "<br><br>Λάθος security code, παρακαλώ πατήστε πίσω για επιστροφή. <br><br> <a href='#' onclick='javascript:window.history.go(-1);'>Πίσω</a>"
		Response.end
	else 
		'email - double record - check
		'''''''''''''''''''''''''''''''''''''
		Dim rs_email_validation
		
		set rs_email_validation = Conn.Execute ("Select USER_Email From COM_USERS Where (USER_Email = '" & Prepare_String_For_SQL(Request.Form("Email")) & "')")
		
		if not rs_email_validation.Eof then
			Response.write "<meta http-equiv='Content-Type' content='text/html; charset=utf-8' /><br><br>Το email υπάρχει ήδη, παρακαλώ ξαναπροσπαθήστε. <br><br> <a href='#' onclick='javascript:window.history.go(-1);'>Πίσω</a>"
			Response.end
		end if 
    end if
   

	


-----------------------------------

//example.php 
<%
	Randomize()
	Session("captcha") = (Rnd*10 mod 10) & (Rnd*10 mod 10) & (Rnd*10 mod 10) & (Rnd*10 mod 10)
%>

<!DOCTYPE html>
<html>
<head>
	<title>Captcha Example</title>
</head>
<body>
	<p>
		<span>Captcha: </span>
		<img src="captcha.asp" />
	</p>
	<p>
		<span>Answer: </span>
		<span><%=Session("captcha") %></span>
	</p>
</body>
</html>


//captcha.asp THE LIB
<%
'Captcha bitmap display module
'2004-2007 MJ PC Lab
'http://mjpclab.net/


const i_padding=3
const i_offsetrange=6
const i_textcolor="666666"		'fore color RGB
const i_bgcolor="ffffff"		'bg color RGB
const i_noisecolor="999999"
const i_noisefrequency=0.07		'between 0 and 1
const i_offsetcolor=20

const i_mingridwidth=0
const i_maxgridwidth=0
const i_mingridheight=0
const i_maxgridheight=0



i_captcha=cstr(session("captcha"))		'the captcha to display

'Construct number pixels' grid array
'===============================================
const alpha_width=10
const alpha_height=14

'bitmap grid, each array element value represents one bitmap row of character
'in their binary form, 0 means empty pixel, 1 means pixel filled with font color
dim alpha_px(9,13)

'Num 0 grid
alpha_px(0,0)=252
alpha_px(0,1)=390
alpha_px(0,2)=771
alpha_px(0,3)=771
alpha_px(0,4)=771
alpha_px(0,5)=771
alpha_px(0,6)=771
alpha_px(0,7)=771
alpha_px(0,8)=771
alpha_px(0,9)=771
alpha_px(0,10)=771
alpha_px(0,11)=771
alpha_px(0,12)=390
alpha_px(0,13)=252

'Num 1 grid
alpha_px(1,0)=48
alpha_px(1,1)=56
alpha_px(1,2)=60
alpha_px(1,3)=48
alpha_px(1,4)=48
alpha_px(1,5)=48
alpha_px(1,6)=48
alpha_px(1,7)=48
alpha_px(1,8)=48
alpha_px(1,9)=48
alpha_px(1,10)=48
alpha_px(1,11)=48
alpha_px(1,12)=48
alpha_px(1,13)=252

'Num 2 grid
alpha_px(2,0)=252
alpha_px(2,1)=390
alpha_px(2,2)=771
alpha_px(2,3)=771
alpha_px(2,4)=768
alpha_px(2,5)=768
alpha_px(2,6)=480
alpha_px(2,7)=56
alpha_px(2,8)=12
alpha_px(2,9)=6
alpha_px(2,10)=3
alpha_px(2,11)=771
alpha_px(2,12)=771
alpha_px(2,13)=1023

'Num 3 grid
alpha_px(3,0)=510
alpha_px(3,1)=771
alpha_px(3,2)=771
alpha_px(3,3)=768
alpha_px(3,4)=384
alpha_px(3,5)=192
alpha_px(3,6)=112
alpha_px(3,7)=192
alpha_px(3,8)=384
alpha_px(3,9)=768
alpha_px(3,10)=768
alpha_px(3,11)=771
alpha_px(3,12)=771
alpha_px(3,13)=510

'Num 4 grid
alpha_px(4,0)=224
alpha_px(4,1)=224
alpha_px(4,2)=240
alpha_px(4,3)=240
alpha_px(4,4)=216
alpha_px(4,5)=216
alpha_px(4,6)=204
alpha_px(4,7)=204
alpha_px(4,8)=198
alpha_px(4,9)=195
alpha_px(4,10)=1023
alpha_px(4,11)=192
alpha_px(4,12)=192
alpha_px(4,13)=192

'Num 5 grid
alpha_px(5,0)=1023
alpha_px(5,1)=3
alpha_px(5,2)=3
alpha_px(5,3)=3
alpha_px(5,4)=3
alpha_px(5,5)=255
alpha_px(5,6)=391
alpha_px(5,7)=771
alpha_px(5,8)=768
alpha_px(5,9)=768
alpha_px(5,10)=768
alpha_px(5,11)=771
alpha_px(5,12)=387
alpha_px(5,13)=254

'Num 6 grid
alpha_px(6,0)=252
alpha_px(6,1)=390
alpha_px(6,2)=771
alpha_px(6,3)=771
alpha_px(6,4)=3
alpha_px(6,5)=3
alpha_px(6,6)=255
alpha_px(6,7)=391
alpha_px(6,8)=771
alpha_px(6,9)=771
alpha_px(6,10)=771
alpha_px(6,11)=771
alpha_px(6,12)=390
alpha_px(6,13)=252

'Num 7 grid
alpha_px(7,0)=1023
alpha_px(7,1)=771
alpha_px(7,2)=771
alpha_px(7,3)=384
alpha_px(7,4)=384
alpha_px(7,5)=192
alpha_px(7,6)=96
alpha_px(7,7)=96
alpha_px(7,8)=48
alpha_px(7,9)=48
alpha_px(7,10)=48
alpha_px(7,11)=24
alpha_px(7,12)=24
alpha_px(7,13)=24

'Num 8 grid
alpha_px(8,0)=252
alpha_px(8,1)=390
alpha_px(8,2)=771
alpha_px(8,3)=771
alpha_px(8,4)=771
alpha_px(8,5)=390
alpha_px(8,6)=252
alpha_px(8,7)=390
alpha_px(8,8)=771
alpha_px(8,9)=771
alpha_px(8,10)=771
alpha_px(8,11)=771
alpha_px(8,12)=390
alpha_px(8,13)=252

'Num 9 grid
alpha_px(9,0)=252
alpha_px(9,1)=390
alpha_px(9,2)=771
alpha_px(9,3)=771
alpha_px(9,4)=771
alpha_px(9,5)=771
alpha_px(9,6)=902
alpha_px(9,7)=1020
alpha_px(9,8)=768
alpha_px(9,9)=768
alpha_px(9,10)=771
alpha_px(9,11)=771
alpha_px(9,12)=390
alpha_px(9,13)=252
'===============================================


'analyze options
'===============================================
if i_textcolor="" then i_textcolor="000000"
if i_bgcolor="" then i_bgcolor="FFFFFF"
if i_noisecolor="" then i_noisecolor="000000"

i_textcolor_red=cbyte("&H" & mid(i_textcolor,1,2))
i_textcolor_green=cbyte("&H" & mid(i_textcolor,3,2))
i_textcolor_blue=cbyte("&H" & mid(i_textcolor,5,2))

i_bgcolor_red=cbyte("&H" & mid(i_bgcolor,1,2))
i_bgcolor_green=cbyte("&H" & mid(i_bgcolor,3,2))
i_bgcolor_blue=cbyte("&H" & mid(i_bgcolor,5,2))

i_noisecolor_red=cbyte("&H" & mid(i_noisecolor,1,2))
i_noisecolor_green=cbyte("&H" & mid(i_noisecolor,3,2))
i_noisecolor_blue=cbyte("&H" & mid(i_noisecolor,5,2))

i_width=(len(i_captcha)+1)*i_padding + len(i_captcha)*alpha_width + len(i_captcha)*2*i_offsetrange
i_height=2*i_padding + alpha_height + 2*i_offsetrange

i_enablegrid=(i_mingridwidth>=1 and i_maxgridwidth>=1 and i_mingridheight>=1 and i_maxgridheight>=1 and i_mingridwidth<=i_maxgridwidth and i_mingridheight<=i_maxgridheight)
'===============================================



'Create BMP data stream & bmp header(core code)
'Copyright MJ PC Lab 2004-2005 [http://mjpclab.net]
'All rights reserved
'===============================================
randomize

'<Init Grid>
dim ReverseNum
dim GridWidth(),GridHeight()
dim GridCountX,GridCountY
dim GridPosX,GridPosY
dim XInGrid,YInGrid

if i_enablegrid then
	ReverseNum=CLng(Rnd*1000000000) mod 2

	'Init Random Grid Size
	redim GridWidth(i_width\i_mingridwidth+1)
	redim GridHeight(i_height\i_mingridheight+1)
	
	tmp_width=i_width
	tmp_height=i_height
	
	GridCountX=0
	GridCountY=0
	
	for i=LBound(GridWidth) to UBound(GridWidth)
		GridWidth(i)=Fix(Rnd*(i_maxgridwidth-i_mingridwidth+1))+i_mingridwidth
		if tmp_width>0 then
			tmp_width=tmp_width-GridWidth(i)
			if tmp_width<0 then GridWidth(i)=GridWidth(i)+tmp_width
			GridCountX=GridCountX+1
		else
			exit for
		end if
	next
	
	for j=LBound(GridHeight) to UBound(GridHeight)
		GridHeight(j)=Fix(Rnd*(i_maxgridheight-i_mingridheight+1))+i_mingridheight
		if tmp_height>0 then
			tmp_height=tmp_height-GridHeight(j)
			if tmp_height<0 then GridHeight(j)=GridHeight(j)+tmp_height
			GridCountY=GridCountY+1
		else
			exit for
		end if
	next
end if

GridPosX=0 : GridPosY=0
XInGrid=0 : YInGrid=1
'</Init Grid>

dim i,i1,j,row,k,bitpos,bmpStream,tempstream,curNum,zerocount,rndtemp
dim offsetx(),offsety()
redim offsetx(len(i_captcha)-1),offsety(len(i_captcha)-1)

bmpStream=""
tempstream=""
zerocount=(4-(i_width*3 mod 4)) mod 4

for i=lbound(offsetx) to ubound(offsetx)		'Create alpha offset random distance
	offsetx(i)=fix((i_offsetrange*2+1)*rnd)
	offsety(i)=fix((i_offsetrange*2+1)*rnd)
next

'Draw bottom padding
'***********************************
for i=1 to i_padding
	tempstream=""
	for j=1 to i_width
		tempstream = tempstream & createbgcolor()
	next
	bmpStream=bmpStream & tempstream & getstr(0,zerocount)
next
'***********************************


for row=i_offsetrange*2+alpha_height-1 to 0 step -1
	tempstream=""

	for k=0 to len(i_captcha)-1
		curNum=cint(mid(i_captcha,k+1,1))
		
		'Draw left padding
		'***********************************
		for j=1 to i_padding
			tempstream = tempstream & createbgcolor()
		next
		'***********************************
		
		
		'Draw number
		'***********************************
		for j=1 to offsetx(k)		'Draw random offset X(left)
			tempstream = tempstream & createbgcolor()			
		next
		
		
		if row+1<=offsety(k) then	'Draw random offset Y(top)
			for j=1 to alpha_width
				tempstream = tempstream & createbgcolor()
			next
		elseif row>=offsety(k)+alpha_height then	'Draw random offset Y(bottom) [row+1>=offsety(k)+alpha_height+1]
			for j=1 to alpha_width
				tempstream = tempstream & createbgcolor()
			next
		elseif row-offsety(k)>ubound(alpha_px,2) then	'if subscript is too early to over
			for j=1 to alpha_width
				tempstream = tempstream & createbgcolor()
			next
		else						'Draw number pixels
			for bitpos=0 to alpha_width-1
				if clng(alpha_px(curNum,row-offsety(k)) and clng(2^bitpos)) <> 0 then
					rndtemp=rnd
					tempstream=tempstream & createtextcolor()
				else
					tempstream = tempstream & createbgcolor()
				end if
			next
		end if

		for j=1 to i_offsetrange*2-offsetx(k)		'Draw random offset X(right)
			tempstream = tempstream & createbgcolor()			
		next
		'***********************************
	next


	'Draw right padding
	'***********************************
	for j=1 to i_padding
		tempstream = tempstream & createbgcolor()
	next
	'***********************************

	bmpStream=bmpStream & tempstream & getstr(0,zerocount)
next


'Draw top padding
'***********************************
for i=1 to i_padding
	tempstream=""
	for j=1 to i_width
		tempstream = tempstream & createbgcolor()
	next
	bmpStream=bmpStream & tempstream & getstr(0,zerocount)
next
'***********************************


dim bmpHeader
bmpHeader=chrB(&H42) & chrB(&H4D)		'位图类型 BM
bmpHeader=bmpHeader & getstr(&H36 + lenB(bmpStream),4)	'文件长度(bmpHeader+bitstream)
bmpHeader=bmpHeader & chrB(0) & chrB(0) & chrB(0) & chrB(0)	'保留
bmpHeader=bmpHeader & getstr(&H36,4)		'实际数据偏移
bmpHeader=bmpHeader & getstr(&H28,4)		'位图信息头长度(win 3.x/9x/NT)
bmpHeader=bmpHeader & getstr(i_width,4)		'位图宽度
bmpHeader=bmpHeader & getstr(i_height,4)		'位图高度
bmpHeader=bmpHeader & getstr(1,2)		'位面数(常数)
bmpHeader=bmpHeader & getstr(24,2)	'每象素位数
bmpHeader=bmpHeader & chrB(0) & chrB(0) & chrB(0) & chrB(0)	'压缩：不压缩
bmpHeader=bmpHeader & getstr(lenB(bmpStream),4)	'位图数据大小,舍入为4的倍数
bmpHeader=bmpHeader & chrB(&H12) & chrB(&H0B) & chrB(0) & chrB(0)	'水平分辨率：象素/米
bmpHeader=bmpHeader & chrB(&H12) & chrB(&H0B) & chrB(0) & chrB(0)	'垂直分辨率：象素/米
bmpHeader=bmpHeader & chrB(0) & chrB(0) & chrB(0) & chrB(0)	'使用颜色数(0=全部)
bmpHeader=bmpHeader & chrB(0) & chrB(0) & chrB(0) & chrB(0)	'重要颜色数(0=全部)
'=====================================================

Response.ContentType="image/bmp"
Response.Expires = -1
Response.AddHeader "Pragma","no-cache"
Response.AddHeader "Cache-Control","no-cache, must-revalidate"

Response.BinaryWrite bmpHeader
Response.BinaryWrite bmpStream
Response.End




'-----------------------------------------------------
function createbgcolor
	dim rvalue
	'randomize
	
	if rnd<=i_noisefrequency then	'Draw noise
		rvalue = ToggleColor(2)	'createcolor(i_noisecolor_blue,i_noisecolor_green,i_noisecolor_red)
	else
		rvalue = ToggleColor(0)	'createcolor(i_bgcolor_blue,i_bgcolor_green,i_bgcolor_red)
	end if
	
	createbgcolor=rvalue
end function

function createtextcolor
	createtextcolor = ToggleColor(1)	'createcolor(i_textcolor_blue,i_textcolor_green,i_textcolor_red)
end function

function ToggleColor(byval ColorType)	'ColorType:		0=BackColor,1=TextColor,2=NoiseColor
	if i_enablegrid then
		XInGrid=XInGrid+1
		if XInGrid>GridWidth(GridPosX) then
			XInGrid=1
			GridPosX=GridPosX+1
		end if
		
		if GridPosX>GridCountX-1 then
			GridPosX=0
			YInGrid=YInGrid+1
			if YInGrid>GridHeight(GridPosY) then
				YInGrid=1
				GridPosY=GridPosY+1
			end if
		end if
	
		Select Case ColorType
			Case 0		'Original should be BackColor
				if CLng(GridPosX+GridPosY) mod 2 = ReverseNum then
					ToggleColor=createcolor(i_bgcolor_blue,i_bgcolor_green,i_bgcolor_red)
				else
					if CLng(Rnd*1000000000) mod 2 = 0 then
						ToggleColor=createcolor(i_textcolor_blue,i_textcolor_green,i_textcolor_red)
					else
						ToggleColor=createcolor(i_noisecolor_blue,i_noisecolor_green,i_noisecolor_red)
					end if
				end if
			Case 1		'Original should be TextColor
				if CLng(GridPosX+GridPosY) mod 2 = ReverseNum then
					ToggleColor=createcolor(i_textcolor_blue,i_textcolor_green,i_textcolor_red)
				else
					ToggleColor=createcolor(i_bgcolor_blue,i_bgcolor_blue,i_bgcolor_blue)
				end if
			Case 2		'Original should be NoiseColor
				if CLng(GridPosX+GridPosY) mod 2 = ReverseNum then
					ToggleColor=createcolor(i_noisecolor_blue,i_noisecolor_green,i_noisecolor_red)
				else
					ToggleColor=createcolor(i_bgcolor_blue,i_bgcolor_blue,i_bgcolor_blue)
				end if
		End Select	
	else
		Select Case ColorType
			Case 0		'Original should be BackColor
				ToggleColor=createcolor(i_bgcolor_blue,i_bgcolor_green,i_bgcolor_red)
			Case 1		'Original should be TextColor
				ToggleColor=createcolor(i_textcolor_blue,i_textcolor_green,i_textcolor_red)
			Case 2		'Original should be NoiseColor
				ToggleColor=createcolor(i_noisecolor_blue,i_noisecolor_green,i_noisecolor_red)
		End Select	
	end if
end function

function createcolor(byval b, byval g, byval r)
	min_b=b-i_offsetcolor
	min_g=g-i_offsetcolor
	min_r=r-i_offsetcolor

	if min_b<0 then min_b=0
	if min_g<0 then min_g=0
	if min_r<0 then min_r=0

	max_b=min_b+i_offsetcolor*2
	max_g=min_g+i_offsetcolor*2
	max_r=min_r+i_offsetcolor*2
	
	if max_b>255 then max_b=255 : min_b=max_b-i_offsetcolor*2 end if
	if max_g>255 then max_g=255 : min_g=max_g-i_offsetcolor*2 end if
	if max_r>255 then max_r=255 : min_r=max_r-i_offsetcolor*2 end if

	if min_b<0 then min_b=0
	if min_g<0 then min_g=0
	if min_r<0 then min_r=0
	
	r_b=fix(rnd*(max_b-min_b+1))+min_b
	r_g=fix(rnd*(max_g-min_g+1))+min_g
	r_r=fix(rnd*(max_r-min_r+1))+min_r
	
	createcolor = chrB(r_b) & chrB(r_g) & chrB(r_r)
end function
'-----------------------------------------------------
function getstr(byval num, byval bytecount)
if bytecount>0 then
	dim rvalue,strhex,t_i
	rvalue=""
	strhex=hex(num)
	strhex=string(bytecount*2-len(strhex),"0") & strhex
	
	for t_i = 1 to len(strhex) step 2
		rvalue=chrB(cbyte("&H" & mid(strhex,t_i,2))) & rvalue
	next
	
	getstr=rvalue
else
	getstr=""
end if
end function
%>