const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542
  })
  
  conn.setEncoding('utf8'); 

  conn.on( 'connect', () => {
    console.log('Connected')
    conn.write('Name: LBK')
  });
  
conn.on('data', (data) => {
  console.log(data);
});

  return conn;
}

{ connect }


module.exports = { connect };