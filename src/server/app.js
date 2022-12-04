const express = require('express');
const app = express();
const axios = require('axios');
const bodyParser = require('body-parser')
app.use(bodyParser.json());
require('dotenv').config({ path: __dirname + '/.env' })
const PORT = process.env.PORT || 3000;

const db = require('./databaseService.js');
db.connect();

app.get('/rooms', async (req, res) => {
  const dbRes = await db.getRooms();
  if (dbRes) {
    res.status(200).send(dbRes);
  } else {
    res.status(500).send({
      message: 'Something went wrong'
    })
  }
});

app.post('/addRoom/:roomNr/:roomType', async (req, res) => {
  const roomNr = req.params['roomNr'];
  const roomType = req.params['roomType'];
  const dbRes = await db.addRoom(roomNr, roomType);
  if (dbRes) {
    res.status(200).send({
      message: 'Room added'
    })
  } else {
    res.status(500).send({
      message: 'Room number already exists'
    })
  }
});

app.post('/editRoom/:oldRoomNr/:newRoomNr/:roomType', async (req, res) => {
  const oldRoomNr = req.params['oldRoomNr'];
  const newRoomNr = req.params['newRoomNr'];
  const roomType = req.params['roomType'];
  const dbRes = await db.editRoom(oldRoomNr, newRoomNr, roomType);
  if (dbRes) {
    res.status(200).send({
      message: 'Room added'
    })
  } else {
    res.status(500).send({
      message: 'Room number already exists'
    })
  }
});


app.delete('/room/:roomNr', async (req, res) => {
  const roomNr = req.params['roomNr'];
  const dbRes = await db.deleteRoom(roomNr);
  if (dbRes) {
    res.status(200).send({
      message: 'Room deleted'
    })
  } else {
    res.status(500).send({
      message: 'Couldn\'t find room number'
    })
  }
});

app.get('/bookings/:roomNr', async (req, res) => {
  const roomNr = req.params['roomNr'];
  const dbRes = await db.getBookings(roomNr);
  if (dbRes) {
    res.status(200).send(dbRes);
  } else {
    res.status(500).send({
      message: 'Something went wrong'
    })
  }
});

app.post('/addBooking/:roomNr', async (req, res) => {
  const roomNr = req.params['roomNr'];
  const from = req.body.from;
  const to = req.body.to;
  const dbRes = await db.addBooking(roomNr, from, to);
  if (dbRes) {
    res.status(200).send({
      message: 'Booking added'
    })
  } else {
    res.status(500).send({
      message: 'Booking couldnt be made, possibly because this room as already booked at this date'
    })
  }
});

app.delete('/booking/:bookingNr', async (req, res) => {
  const bookingNr = req.params['bookingNr'];
  const dbRes = await db.deleteBooking(bookingNr);
  if (dbRes) {
    res.status(200).send({
      message: 'Booking deleted'
    })
  } else {
    res.status(500).send({
      message: 'Booking couldnt be deleted, something went wrong'
    })
  }
});

app.listen(PORT, () => {
  console.log(`WebIDE backend running on ${PORT}`);
});
