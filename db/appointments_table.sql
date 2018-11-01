select q.quote_id, first_name, u.last_name, u.address, u.city, u.zip, q.windowcount, q.highwindows, q.amount
FROM customer u
JOIN quotes q on u.customer_id = q.customer_id;