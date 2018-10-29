insert into comments(comment, customer_id)
values ($1, $2);
select * from comments;