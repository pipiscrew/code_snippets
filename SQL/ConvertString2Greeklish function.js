USE [x]
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE FUNCTION [dbo].[ConvertString2Greeklish]
(
	@inp VARCHAR(8000)
)
RETURNS VARCHAR(8000)
AS
BEGIN
		
	DECLARE @temp VARCHAR(8000), @i INT
	SET @inp = LOWER(@inp)
	SET @Temp=''
	SET @i = 1
	while @i <= LEN(@inp)
	BEGIN
		IF  SUBSTRING(@inp, @i, 1)= 'α' SET @temp = @temp + 'a'
		ELSE IF SUBSTRING(@inp, @i, 1)= 'ά' SET @temp = @temp + 'a'
		ELSE IF SUBSTRING(@inp, @i, 1)= 'β' SET @temp = @temp + 'b'
		ELSE IF SUBSTRING(@inp, @i, 1)= 'γ' SET @temp = @temp + 'g'
		ELSE IF SUBSTRING(@inp, @i, 1)= 'δ' SET @temp = @temp + 'd'
		ELSE IF SUBSTRING(@inp, @i, 1)= 'ε' SET @temp = @temp + 'e'
		ELSE IF SUBSTRING(@inp, @i, 1)= 'έ' SET @temp = @temp + 'e'
		ELSE IF SUBSTRING(@inp, @i, 1)= 'ζ' SET @temp = @temp + 'z'
		ELSE IF SUBSTRING(@inp, @i, 1)= 'η' SET @temp = @temp + 'i'
		ELSE IF SUBSTRING(@inp, @i, 1)= 'ι' SET @temp = @temp + 'i'
		ELSE IF SUBSTRING(@inp, @i, 1)= 'ή' SET @temp = @temp + 'i'
		ELSE IF SUBSTRING(@inp, @i, 1)= 'ί' SET @temp = @temp + 'i'
		ELSE IF SUBSTRING(@inp, @i, 1)= 'υ' SET @temp = @temp + 'i'
		ELSE IF SUBSTRING(@inp, @i, 1)= 'ύ' SET @temp = @temp + 'i'
		ELSE IF SUBSTRING(@inp, @i, 1)= 'ϊ' SET @temp = @temp + 'i'
		ELSE IF SUBSTRING(@inp, @i, 1)= 'ΐ' SET @temp = @temp + 'i'
		ELSE IF SUBSTRING(@inp, @i, 1)= 'ϋ' SET @temp = @temp + 'i'
		ELSE IF SUBSTRING(@inp, @i, 1)= 'ΰ' SET @temp = @temp + 'i'
		ELSE IF SUBSTRING(@inp, @i, 1)= 'θ' SET @temp = @temp + 'u'
		ELSE IF SUBSTRING(@inp, @i, 1)= 'κ' SET @temp = @temp + 'k'
		ELSE IF SUBSTRING(@inp, @i, 1)= 'λ' SET @temp = @temp + 'l'
		ELSE IF SUBSTRING(@inp, @i, 1)= 'μ' SET @temp = @temp + 'm'
		ELSE IF SUBSTRING(@inp, @i, 1)= 'ν' SET @temp = @temp + 'n'
		ELSE IF SUBSTRING(@inp, @i, 1)= 'ξ' SET @temp = @temp + 'j'
		ELSE IF SUBSTRING(@inp, @i, 1)= 'ο' SET @temp = @temp + 'o'
		ELSE IF SUBSTRING(@inp, @i, 1)= 'ό' SET @temp = @temp + 'o'
		ELSE IF SUBSTRING(@inp, @i, 1)= 'ω' SET @temp = @temp + 'o'
		ELSE IF SUBSTRING(@inp, @i, 1)= 'ώ' SET @temp = @temp + 'o'
		ELSE IF SUBSTRING(@inp, @i, 1)= 'π' SET @temp = @temp + 'p'
		ELSE IF SUBSTRING(@inp, @i, 1)= 'ρ' SET @temp = @temp + 'r'
		ELSE IF SUBSTRING(@inp, @i, 1)= 'σ' SET @temp = @temp + 's'
		ELSE IF SUBSTRING(@inp, @i, 1)= 'τ' SET @temp = @temp + 't'
		ELSE IF SUBSTRING(@inp, @i, 1)= 'φ' SET @temp = @temp + 'f'
		ELSE IF SUBSTRING(@inp, @i, 1)= 'χ' SET @temp = @temp + 'x'
		ELSE IF SUBSTRING(@inp, @i, 1)= 'ψ' SET @temp = @temp + 'c'
		ELSE SET @temp = @temp + SUBSTRING(@inp, @i, 1)

		SET @i = @i + 1
	end	
	
	-- Noise removal

	SET @temp = REPLACE(@temp, ' tis ', ' ')
	SET @temp = REPLACE(@temp, ' toi ', ' ')
	SET @temp = REPLACE(@temp, ' ton ', ' ')
	SET @temp = REPLACE(@temp, ' kai ', ' ')
	SET @temp = REPLACE(@temp, ' ta ', ' ')
	SET @temp = REPLACE(@temp, ' ton ', ' ')
	SET @temp = REPLACE(@temp, ' ayta ', ' ')
	SET @temp = REPLACE(@temp, ' oi ', ' ')
	SET @temp = REPLACE(@temp, ' ston ', ' ')
	SET @temp = REPLACE(@temp, ' stin ', ' ')
	SET @temp = REPLACE(@temp, ' sti ', ' ')
	SET @temp = REPLACE(@temp, ' sto ', ' ')
	SET @temp = REPLACE(@temp, ' sta ', ' ')
	SET @temp = REPLACE(@temp, ' i ', ' ')
	SET @temp = REPLACE(@temp, ' ek ', ' ')

	RETURN @temp

END






