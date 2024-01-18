DROP DATABASE IF EXISTS easy_meal;
CREATE DATABASE easy_meal;
USE 'easy_meal';

CREATE TABLE restaurants (
    id INT PRIMARY KEY,
    name VARCHAR(255),
    address VARCHAR(255),
    city VARCHAR(255),
    cuisine VARCHAR(255),
    daysopen VARCHAR(255),
    hours VARCHAR(255)
);

CREATE TABLE menus (
    id INT PRIMARY KEY,
    name VARCHAR(255),
    restaurant_id INT,
    FOREIGN KEY (restaurant_id) REFERENCES restaurants(id)
);

CREATE TABLE menu_items (
    id INT PRIMARY KEY,
    name VARCHAR(255),
    price DECIMAL(10, 2),
    menu_id INT,
    FOREIGN KEY (menu_id) REFERENCES menus(id)
);

INSERT INTO restaurants (id, name, address, city, cuisine, daysopen, hours)
VALUES (1, 'Ristorante 1', 'Via Roma', 'Roma', 'Italiana', 'Lunedì, Martedì, Mercoledì, Giovedì, Venerdì', '12:00 - 15:00, 19:00 - 23:00');

INSERT INTO menus (id, name, restaurant_id)
VALUES (1, 'Menu 1', 1);

INSERT INTO menu_items (id, name, price, menu_id)
VALUES (1, 'Spaghetti alla carbonara', 10, 1),
       (2, 'Spaghetti all\'amatriciana', 9, 1),
       (3, 'Spaghetti al pomodoro', 8, 1);

INSERT INTO restaurants (id, name, address, city, cuisine, daysopen, hours)
VALUES (2, 'Ristorante 2', 'Via Milano', 'Milano', 'Cinese', 'Lunedì, Martedì, Mercoledì, Giovedì, Venerdì, Sabato', '12:00 - 15:00, 19:00 - 23:00');

INSERT INTO menus (id, name, restaurant_id)
VALUES (2, 'Menu 2', 2);

INSERT INTO menu_items (id, name, price, menu_id)
VALUES (4, 'Riso alla cantonese', 10, 2),
       (5, 'Riso fritto', 9, 2),
       (6, 'Riso saltato', 8, 2);

INSERT INTO restaurants (id, name, address, city, cuisine, daysopen, hours)
VALUES (3, 'Ristorante 3', 'Via Napoli', 'Napoli', 'Pizza', 'Lunedì, Martedì, Mercoledì, Giovedì, Venerdì, Sabato, Domenica', '12:00 - 15:00, 19:00 - 23:00');

INSERT INTO menus (id, name, restaurant_id)
VALUES (3, 'Menu 3', 3);

INSERT INTO menu_items (id, name, price, menu_id)
VALUES (7, 'Pizza margherita', 10, 3),
       (8, 'Pizza marinara', 9, 3),
       (9, 'Pizza capricciosa', 8, 3);
