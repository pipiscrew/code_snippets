        Dim dtChild As DataTable
        Dim rd As SqlClient.SqlDataReader = Nothing
        
            dtChild = sqlC.GetDATATABLE("SELECT * FROM TASKS WHERE PROJECT_ID= " & currentRow("PROJECT_ID").ToString & taskWhereIn & " ORDER by DATE_REC") 'BY TASK_NAME,

            For Each childRow In dtChild.Rows
		IF childRow("TASK_ID").ToString <> 1 THEN
		ENDIF 

                rd = sqlC.GetDATAREADER("select TASKITEM_ID,TASK_ID,convert(varchar(20),TASKITEM_STARTDATE,103) as [TASKITEM_STARTDATE],convert(varchar(20),TASKITEM_ENDDATE,103) as [TASKITEM_ENDDATE],TASKITEMS.USER_IDD,TASKITEMS.DATE_REC,USER_NAM,APPUSERS.USER_COLOR_R,APPUSERS.USER_COLOR_G,APPUSERS.USER_COLOR_B from TASKITEMS  LEFT JOIN APPUSERS ON APPUSERS.USER_IDD = TASKITEMS.USER_IDD where TASK_ID=" & childRow("TASK_ID").ToString & taskItemsWhereIn & " ORDER by TASKITEM_ORDER")

                While rd.Read
                    If prevTASK_NAME <> childRow("TASK_NAME").ToString Then
		    ENDIF
		END WHILE

		RD.CLOSE
	    NEXT 
