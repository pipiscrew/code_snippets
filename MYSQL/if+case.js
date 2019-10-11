//http://stackoverflow.com/a/13339576
SELECT guides.Gud_Id
    , guides.Gud_Image
    , guides.Gud_SubEditor
    , guides.Gud_Reprint_Status
    , guides.Gud_Publish_Date
    , guides.Gud_Img_Chk
    , guides.Gud_Published
    , guides.Gud_View
    , IF(guides.Gud_Publish_Date IS NULL,'Unscheduled','Forth Coming Titles') 
             AS Schedules
FROM guides

--or if you really want CASE

SELECT guides.Gud_Id
    , guides.Gud_Image
    , guides.Gud_SubEditor
    , guides.Gud_Reprint_Status
    , guides.Gud_Publish_Date
    , guides.Gud_Img_Chk
    , guides.Gud_Published
    , guides.Gud_View
    , (
        CASE 
            WHEN guides.Gud_Publish_Date IS NULL
            THEN 'Unscheduled'
            ELSE 'Forth Coming Titles'
        END
      ) AS Schedules
FROM guides