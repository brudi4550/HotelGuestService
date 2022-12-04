DROP TABLE IF EXISTS room_booked_on;
DROP TABLE IF EXISTS room;
DROP TABLE IF EXISTS room_type;

CREATE TABLE IF NOT EXISTS room_type (
	id INTEGER PRIMARY KEY,
	room_type text UNIQUE
);

INSERT INTO room_type VALUES (1, 'Single');
INSERT INTO room_type VALUES (2, 'Double');
INSERT INTO room_type VALUES (3, 'Suite');

CREATE TABLE IF NOT EXISTS room (
	id SERIAL PRIMARY KEY,
	room_number INTEGER UNIQUE,
	room_type text,
	FOREIGN KEY(room_type) REFERENCES room_type(room_type)
);

CREATE TABLE IF NOT EXISTS room_booked_on (
	booking_id SERIAL,
	room_id INTEGER,
  	booked_from DATE,
    booked_until DATE,
	PRIMARY KEY(booking_id),
  	FOREIGN KEY(room_id) REFERENCES room(id)
);