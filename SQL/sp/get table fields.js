        SELECT
            TABLE_CATALOG               -- current database
            , TABLE_SCHEMA              -- current owner
            , TABLE_NAME                -- current table
            , COLUMN_NAME               -- column
            , ORDINAL_POSITION          -- position in the table
            , COLUMN_DEFAULT            -- is there a default and what is it
            , IS_NULLABLE               -- does this column allow nulls
            , DATA_TYPE                 -- the datatype
            , CHARACTER_MAXIMUM_LENGTH
            , CHARACTER_OCTET_LENGTH
            , NUMERIC_PRECISION         -- precion of the numeric or decimal value
            , NUMERIC_PRECISION_RADIX
            , NUMERIC_SCALE             -- scale of the numeric or decimal value
            , DATETIME_PRECISION
            , CHARACTER_SET_CATALOG
            , CHARACTER_SET_SCHEMA
            , CHARACTER_SET_NAME
            , COLLATION_CATALOG
            , COLLATION_SCHEMA
            , COLLATION_NAME            -- what collation is this column
            , DOMAIN_CATALOG
            , DOMAIN_SCHEMA
            , DOMAIN_NAME
        FROM
            INFORMATION_SCHEMA.COLUMNS
        WHERE
            TABLE_NAME = 'customers'


more @: http://www.davidpenton.com/testsite/views/Default.aspx
