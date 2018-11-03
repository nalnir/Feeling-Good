var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/feeling-good');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
});

let ipSchema = mongoose.Schema({
  ipAddres: String
});

let ip = mongoose.model('IpAddres', ipSchema);


let save = function(addres) {
  /*
  ip.count({ipAddres: addres}, function (err, count){
    console.log(count);
      if(count>0){
          console.log('user already exists');
      } else {
        const newRepository = new ip({ipAddres: adress, createdAt: { type: Date, expires: 900 }});
        newRepository.save().then(() => console.log('saved'));
      }
  });*/
  ip.find({ name: addres}, function (err, docs) {
    console.log(docs);
  });
};

let findRepo = (callback) => {
  ip.find(function(err, repos) {
    if (err) {
      console.log(err);
    } else {
      callback(repos);
    }
  })
}

module.exports.save = save;