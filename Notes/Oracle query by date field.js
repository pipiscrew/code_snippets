--ref http://stackoverflow.com/q/9180014
select cust_id from THE_OWNER.SAP_DEV 
where SAP_DEV.lastmodified > TO_DATE('23/11/2016 23:40', 'DD/MM/YYYY HH24:MI') 
order by cust_id desc;

--or for all day
where LASTMODIFIED between TO_DATE('24/11/2016 00:00:00', 'DD/MM/YYYY HH24:MI:SS') and TO_DATE('24/11/2016 23:59:59', 'DD/MM/YYYY HH24:MI:SS')