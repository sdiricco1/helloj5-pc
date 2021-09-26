var five = require("johnny-five");

class JohnnyFive extends five.Board {
  constructor(options = undefined) {
    super(options);
  }
  connectProm() {
    return new Promise((res, rej) => {
      this.on("ready", function () {
        res(true);
      })
    })
  }
  waitProm(delay_ms) {
    return new Promise((res, rej) => {
      this.wait(delay_ms, () => {
        res(true)
      })
    })
  }
}


//Test
let main = async () => {
  let board = undefined;
  let port = "COM3";
  board = new JohnnyFive({
    port: port,
    repl: false,
    debug: false,
  });
  await board.connectProm();
  board.pinMode(13, five.Pin.OUTPUT);
  board.digitalWrite(13, 1);
  await board.waitProm(2000);
  board.digitalWrite(13, 0);
  await board.waitProm(2000);
  board.digitalWrite(13, 1);
  await board.waitProm(2000);
  board.digitalWrite(13, 0);
}




main();

