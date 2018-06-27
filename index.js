var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/feeling-good');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
});

let ipSchema = mongoose.Schema({
  date: {
        type: Date,
        default: Date.now,
        expires: 5000
        },
  ipAddres: String
});

let ip = mongoose.model('IpAddres', ipSchema);


let BadclicksSchema = mongoose.Schema({
  clicks: Number
});

let badUserClicks = mongoose.model('badClicks', BadclicksSchema);



let GoodclicksSchema = mongoose.Schema({
  clicks: Number
});

let goodUserClicks = mongoose.model('goodClicks', GoodclicksSchema);

//handling ip Addreses
let save = (addres) => {
  ip.count({ipAddres: addres}, function (err, count){
      if(count>0){
        console.log('user exists');
      } else {
        const newRepository = new ip({ipAddres: addres});
        newRepository.save().then(() => console.log('saved user'));

      }
  });
};

let getCollection = (add, callback) => {

  ip.findOne({ipAddres: add}, function(err, res) {
    if (err) {
      console.log('we got error!');
    } else {
      callback(res);
    }
  });
}


//handling Clicks
let getBadClicks = (callback) => {
  badUserClicks.count({},function(err, count) {
    callback(count);
  });
}

let getGoodClicks = (callback) => {
  goodUserClicks.count({}, function(err, count) {
    callback(count);
  });
}



let badClicks = (click) => {
  const newClicks = new badUserClicks({clicks: click});
  newClicks.save().then(() => console.log('saved a BAD click'));
}

let goodClicks = (click) => {
  const newClicks = new goodUserClicks({clicks: click});
  newClicks.save().then(() => console.log('saved a GOOD click'));
}

module.exports.ip = ip;
module.exports.badUserClicks = badUserClicks;

module.exports.save = save;
module.exports.getCollection = getCollection;
module.exports.getBadClicks = getBadClicks;
module.exports.getGoodClicks = getGoodClicks;

module.exports.badClicks = badClicks;
module.exports.goodClicks = goodClicks;