-- CREATE TABLE users(
-- user_id SERIAL PRIMARY KEY,
-- first_name VARCHAR,
-- fast_name VARCHAR,
-- address VARCHAR ,
-- city VARCHAR ,
-- zip INTEGER ,
-- admin BOOLEAN 
-- )

CREATE TABLE customer(
    customer_id SERIAL PRIMARY KEY,
    customer_name VARCHAR(180),
    customer_auth_id TEXT,
    customer_picture TEXT,
    customer_email TEXT,
    first_name VARCHAR,
    last_name VARCHAR,
    address VARCHAR ,
    city VARCHAR ,
    zip INTEGER,
    admin BOOLEAN
)

-- ALTER TABLE users
-- DROP COLUMN admin;

-- SELECT * 
-- FROM users;

CREATE TABLE comments(
comment_id SERIAL NOT NULL,
comment VARCHAR(200) NOT NULL,
customer_id INTEGER REFERENCES
customer(customer_id)
)

SELECT * 
FROM users;


-- ALTER TABLE customer
-- ADD COLUMN admin BOOLEAN



CREATE TABLE quotes(
customer_id int,
FOREIGN KEY (customer_id) REFERENCES customer (customer_id) on delete cascade,
windowcount int NOT NULL, 
highwindows int,
amount int

)


