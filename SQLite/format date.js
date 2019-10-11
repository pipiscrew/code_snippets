//there is no field date, mean format field text where the information stored as 2016-06-05 16:45:53
SELECT strftime('%d/%m/%Y',node_date) from nodes