UPDATE SCENTER
SET QUEUE = REPLACE(QUEUE, 'EMA-BASSD-ADSM-SUPPORT', 'ASIA')
--WHERE QUEUE LIKE 'EMA-BASSD-ADSM-SUPPORT'

//BULK
UPDATE SCENTER
SET USER_NAME = REPLACE(USER_NAME, 'X', 'USER1'),
USER_NAME = REPLACE(USER_NAME,"Y","USER1"),
USER_NAME = REPLACE(USER_NAME,"Z","USER2"),
USER_NAME = REPLACE(USER_NAME,"1","USER3"),
USER_NAME = REPLACE(USER_NAME,"2","USER4"),
USER_NAME = REPLACE(USER_NAME,"3","USER5")