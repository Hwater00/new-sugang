// 몽고DB 설정

require('dotenv').config();
const mongoose = require('mongoose');


const connect = () => {
  if (process.env.NODE_ENV !== 'production') {
    mongoose.set('debug', true);
  }
  mongoose.connect(process.env.MONGODB_URI, {
    dbName: 'sugang',
    useNewUrlParser: true,
    useUnifiedTopology: true 
  })
  .then(() => {
    console.log('몽고디비 연결 성공');
  })
  .catch((error) => {
    console.error('몽고디비 연결 에러', error);
  });
};

mongoose.connection.on('error', (error) => {
  console.error('몽고디비 연결 에러', error);
});
mongoose.connection.on('disconnected', () => {
  console.error('몽고디비 연결이 끊겼습니다. 연결을 재시도합니다.');
  connect();
});

module.exports = connect;
