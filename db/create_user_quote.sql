update customer
set first_name=$1, address = $2, city = $3, zip=$4, 
where customer_id = $9;
insert into quotes
(phone, windowcount,highwindows,amount, customer_id)
values($5,$6,$7,$8,$9);
-- select * from comments;