select q.customer_id, u.full_name, u.address, u.city, u.zip, q.phone, q.windowcount, q.highwindows, q.amount
FROM customer u
JOIN quotes q on u.customer_id = q.customer_id;