-- schema.sql
-- CREATE TABLE Users (
--   id INT AUTO_INCREMENT PRIMARY KEY,
--   name VARCHAR(100),
--   email VARCHAR(100),
--   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- CREATE TABLE Products (
--   id INT AUTO_INCREMENT PRIMARY KEY,
--   name VARCHAR(100),
--   price INT,
--   category ENUM('chairs', 'tables', 'dining-tops') NOT NULL
-- );

-- CREATE TABLE Orders (
--   id INT AUTO_INCREMENT PRIMARY KEY,
--   amount DECIMAL(10,2),
--   user_id INT,
--   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--   FOREIGN KEY (user_id) REFERENCES Users(id)
-- );

-- CREATE TABLE Order_Chairs (
--   id INT AUTO_INCREMENT PRIMARY KEY,
--   order_id INT,
--   chair_id INT,
--   quantity INT, 
--   FOREIGN KEY (order_id) REFERENCES Orders(id),
--   FOREIGN KEY (chair_id) REFERENCES Products(id)
-- );

-- CREATE TABLE Order_Tables (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     order_id INT,
--     table_id INT,
--     quantity INT,
--     FOREIGN KEY (order_id) REFERENCES Orders(id),
--     FOREIGN KEY (table_id) REFERENCES Products(id)
-- );

-- CREATE TABLE Order_Tops (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     order_id INT,
--     top_id INT,
--     quantity INT,
--     FOREIGN KEY (order_id) REFERENCES Orders(id),
--     FOREIGN KEY (top_id) REFERENCES Products(id)
-- );

-- INSERT INTO Products (id, name, price, category) VALUES 
-- (1, 'Lounge Chair', 2000, 'chairs'),
-- (2, 'Dining Chair', 1800, 'chairs'),
-- (3, 'Table1', 3000, 'tables'),
-- (4, 'Table2', 3200, 'tables'),
-- (5, 'Table3', 3100, 'tables'),
-- (6, 'Dining Top', 900, 'dining-tops');
