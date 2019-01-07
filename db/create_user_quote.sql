update customer
set full_name=$1, address = $2, city=$3, zip=$4
where customer_id = $8;
insert into quotes
(windowcount,highwindows,amount, customer_id)
values($5,$6,$7, $8);
-- select * from comments;