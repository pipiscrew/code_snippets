            Dim newID% = 0
            newID = sqlC.ExecuteSQLScalar("insert into PROJECTS (PROJECT_NAME) VALUES ('" & KryptonTextBox1.Text & "');SELECT SCOPE_IDENTITY();")