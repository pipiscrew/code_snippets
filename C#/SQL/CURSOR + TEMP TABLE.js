cursor FAQ : http://msdn.microsoft.com/en-us/library/ms180169.aspx


--VARIABLES FOR ORDER CURSOR
DECLARE @ORDER_ID INT,
        @ORDER_DATE SMALLDATETIME,
        @PARASTATIKO_COUNTER INT,
        @PELATHS_ID INT

--VARIABLES FOR ORDERDETAIL CURSOR
DECLARE @DESCR VARCHAR(255),
        @PRICE MONEY,
        @QUANTITY INT,
        @PRODUCT_ID INT

--VARIABLES FOR TEMPORARY TABLE
DECLARE    @CUSTOMER VARCHAR(255),
        @TIMOKATALOGOS_ID INT,
        @PRODUCT_PRICE_DISCOUNT MONEY,
        @TOTAL_PROMH8EIA MONEY,
        @TOTAL_A3IA MONEY

--ANIMA GENERAL FPA
DECLARE @ANIMA_FPA MONEY,
        @PARASTATIKO_666 INT

SET @ANIMA_FPA = 23

--GET PARASTATIKO TgUniqueField WHERE PARASTATIKO_CODE = 666
SELECT @PARASTATIKO_666 = TgUniqueField FROM parastatika WHERE Code = '666'

--CHECK IF TEMPORARY TABLE EXIST
IF object_id('tempdb..#RESULTSET') IS NOT NULL
BEGIN
   DROP TABLE #RESULTSET
END

--CREATE TEMPORARY TABLE
CREATE TABLE #RESULTSET
(
PARASTATIKO_DATE SMALLDATETIME,
CUSTOMER VARCHAR(255),
PARASTATIKO_COUNTER INT,
PROMH8EIA MONEY,
FPA INT,
TELIKH_A3IA MONEY
)

--GET SPECIFIC ORDERS WITH 666
DECLARE orders_cursor CURSOR FOR
SELECT TOP 100 TgUniqueField,date,counter,eponimo FROM orders WHERE parastatiko = @PARASTATIKO_666

OPEN orders_cursor;

FETCH NEXT FROM orders_cursor
INTO @ORDER_ID, @ORDER_DATE,@PARASTATIKO_COUNTER,@PELATHS_ID;
--GET SPECIFIC ORDERS WITH 666

--FOR ALL RECORDS IN ORDERS
WHILE @@FETCH_STATUS = 0
BEGIN

    --GET CUSTOMER NAME     +  TIMOKATALOGO ID
        SELECT @CUSTOMER=eponimo,@TIMOKATALOGOS_ID=Timokatalogos FROM pelates WHERE TgUniqueField=@PELATHS_ID

    --GET ORDER DETAILS
        DECLARE order_details_cursor CURSOR FOR
        SELECT [DESCRIPTION],UnitPrice,Quantity,ProductID FROM OrdersDetails
        WHERE ORDERID=@ORDER_ID

        OPEN order_details_cursor;

        FETCH NEXT FROM order_details_cursor
        INTO @DESCR, @PRICE, @QUANTITY, @PRODUCT_ID;
    --GET ORDER DETAILS

    --ZERO VARIABLES
        SET @TOTAL_PROMH8EIA = 0
        SET @TOTAL_A3IA = 0

        --FOR ALL RECORDS IN ORDER DETAILS
            WHILE @@FETCH_STATUS = 0
            BEGIN

                --GET CUSTOMER DISCOUNT FROM TIMOKATALO
                SELECT @PRODUCT_PRICE_DISCOUNT=DiscPerCent FROM TimolProducts
                LEFT JOIN TimolPrices ON TimolProducts.TgUniqueField = TimolPrices.TimolProductID
                WHERE TimolProducts.TimolID = @TIMOKATALOGOS_ID AND TimolProducts.ProductID = @PRODUCT_ID


                --FOR ALL PRODUCTS - SUM PROMH8EIA
                SET @TOTAL_PROMH8EIA = @TOTAL_PROMH8EIA + ((@QUANTITY * @PRICE) * (@PRODUCT_PRICE_DISCOUNT / 100))


                --MOVE NEXT - ORDER_DETAILS
                FETCH NEXT FROM order_details_cursor
                INTO @DESCR, @PRICE, @QUANTITY, @PRODUCT_ID;

            END;

        CLOSE order_details_cursor;
        DEALLOCATE order_details_cursor;

            SET @TOTAL_A3IA = ((@TOTAL_PROMH8EIA * (@ANIMA_FPA / 100)) +  @TOTAL_PROMH8EIA)


        --INSERT PARASTATIKO RECORD TO TEMPORARY TABLE
            INSERT INTO #RESULTSET
                    ( PARASTATIKO_COUNTER ,
                      CUSTOMER ,
                      PARASTATIKO_DATE ,
                      TELIKH_A3IA ,
                      FPA ,
                      PROMH8EIA
                    )
            VALUES  ( @PARASTATIKO_COUNTER , -- PARASTATIKO_COUNTER - int
                      @CUSTOMER , -- CUSTOMER - varchar(255)
                      @ORDER_DATE , -- PARASTATIKO_DATE - smalldatetime
                      @TOTAL_A3IA , -- TELIKH_A3IA - money
                      @ANIMA_FPA , -- FPA - int
                      @TOTAL_PROMH8EIA  -- PROMH8EIA - money
                        )

    --MOVE NEXT ORDERS
    FETCH NEXT FROM orders_cursor
    INTO @ORDER_ID, @ORDER_DATE,@PARASTATIKO_COUNTER,@PELATHS_ID;
END

CLOSE orders_cursor
DEALLOCATE orders_cursor

--EXPORT TEMPORARY TABLE
SELECT * FROM #RESULTSET


