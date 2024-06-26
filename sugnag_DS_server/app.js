const express = require('express');
const path = require('path');
const morgan = require('morgan');

const connect = require('./schemas');
const indexRouter = require('./routes');
const stuentRouter = require('./routes/students');
const subjectRouter = require('./routes/subjects');
// const exchangeRouter = require('./routes/exchanges');

const app = express();
app.set('port', process.env.PORT || 3002);
connect();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/test', indexRouter);
app.use('/stuents', stuentRouter);
app.use('/subjects', subjectRouter);
// app.use('/exchanges', exchangeRouter);

app.use((req, res, next) => {
  const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});


app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});