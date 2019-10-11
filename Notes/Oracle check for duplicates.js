--http://stackoverflow.com/a/59242
select invoice_no, count(invoice_no)
from THE_OWNER.MY_TABLE
where invoice_no between 6544353 and 9876533
group by invoice_no, line_num
having count (invoice_no) > 1