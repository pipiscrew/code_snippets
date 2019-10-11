//http://stackoverflow.com/a/15368852/1320686

select CAST(id as CHAR(50)) as col1 
from t9;

select CONVERT(id, CHAR(50)) as colI1 
from t9;