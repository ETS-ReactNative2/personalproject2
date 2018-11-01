update customer
set first_name=$1, last_name = $2, address = $3, city=$4, zip=$5
where customer_id = $9;
insert into quotes
(windowcount,highwindows,amount, customer_id)
values($6,$7,$8, $9);
-- select * from comments;