var http = require('http');
var express = require("express");
var logfmt = require("logfmt");
var uuid = require("node-uuid");
var app = express();


// Application set-up
app.configure(function(){
  app.use(express.static(__dirname + "/html"));
  app.use(logfmt.requestLogger());
  app.use(express.bodyParser()); // used to parse JSON object given in the request body
});


// Initiate test call
app.get("/testRecord", function(req, res) {
  console.log("GET /testRecord");
  res.send({ 
    id : uuid.v1(),
    firstname : 'Donald', 
    lastname : 'Duck', 
    phone : '+86 1234567', 
    email : 'donald@duck.com', 
    wechat : 'donduck' 
  });
});

app.get("/testShortList", function(req, res) {
  console.log("GET /testShortList");
  res.send([
    { 
      id : uuid.v1(),
      firstname : 'Donald', 
      lastname : 'Duck', 
      phone : '+86 1234567', 
      email : 'donald@duck.com', 
      wechat : 'donduck' 
    },
    { 
      id: uuid.v1(),
      firstname : 'Tick', 
      lastname : 'Duck', 
      phone : '+86 1234567', 
      email : 'tick@duck.com', 
      wechat : 'tickduck' 
    },
    { 
      id: uuid.v1(),
      firstname : 'Trick', 
      lastname : 'Duck', 
      phone : '+86 1234567', 
      email : 'trick@duck.com', 
      wechat : 'trickduck' 
    },
    { 
      id: uuid.v1(),
      firstname : 'Track', 
      lastname : 'Duck', 
      phone : '+86 1234567', 
      email : 'track@duck.com', 
      wechat : 'trackduck' 
    },
    { 
      id: uuid.v1(),
      firstname : 'Daisy', 
      lastname : 'Duck', 
      phone : '+86 1234567', 
      email : 'daisy@duck.com', 
      wechat : 'daiduck' 
    }
  ]);
});

app.get("/testLongList", function(req, res) {
  console.log("GET /testLongList");
  res.send([
    { 
      id : uuid.v1(),
      firstname : 'Donald', 
      lastname : 'Duck', 
      phone : '+86 1234567', 
      email : 'donald@duck.com', 
      wechat : 'donduck' 
    },
    { 
      id: uuid.v1(),
      firstname : 'Tick', 
      lastname : 'Duck', 
      phone : '+86 1234567', 
      email : 'tick@duck.com', 
      wechat : 'tickduck' 
    },
    { 
      id: uuid.v1(),
      firstname : 'Trick', 
      lastname : 'Duck', 
      phone : '+86 1234567', 
      email : 'trick@duck.com', 
      wechat : 'trickduck' 
    },
    { 
      id: uuid.v1(),
      firstname : 'Track', 
      lastname : 'Duck', 
      phone : '+86 1234567', 
      email : 'track@duck.com', 
      wechat : 'trackduck' 
    },
    { 
      id: uuid.v1(),
      firstname : 'Daisy', 
      lastname : 'Duck', 
      phone : '+86 1234567', 
      email : 'daisy@duck.com', 
      wechat : 'daiduck' 
    },
    { 
      id : uuid.v1(),
      firstname : 'Donald', 
      lastname : 'Duck', 
      phone : '+86 1234567', 
      email : 'donald@duck.com', 
      wechat : 'donduck' 
    },
    { 
      id: uuid.v1(),
      firstname : 'Tick', 
      lastname : 'Duck', 
      phone : '+86 1234567', 
      email : 'tick@duck.com', 
      wechat : 'tickduck' 
    },
    { 
      id: uuid.v1(),
      firstname : 'Trick', 
      lastname : 'Duck', 
      phone : '+86 1234567', 
      email : 'trick@duck.com', 
      wechat : 'trickduck' 
    },
    { 
      id: uuid.v1(),
      firstname : 'Track', 
      lastname : 'Duck', 
      phone : '+86 1234567', 
      email : 'track@duck.com', 
      wechat : 'trackduck' 
    },
    { 
      id: uuid.v1(),
      firstname : 'Daisy', 
      lastname : 'Duck', 
      phone : '+86 1234567', 
      email : 'daisy@duck.com', 
      wechat : 'daiduck' 
    },
    { 
      id : uuid.v1(),
      firstname : 'Donald', 
      lastname : 'Duck', 
      phone : '+86 1234567', 
      email : 'donald@duck.com', 
      wechat : 'donduck' 
    },
    { 
      id: uuid.v1(),
      firstname : 'Tick', 
      lastname : 'Duck', 
      phone : '+86 1234567', 
      email : 'tick@duck.com', 
      wechat : 'tickduck' 
    },
    { 
      id: uuid.v1(),
      firstname : 'Trick', 
      lastname : 'Duck', 
      phone : '+86 1234567', 
      email : 'trick@duck.com', 
      wechat : 'trickduck' 
    },
    { 
      id: uuid.v1(),
      firstname : 'Track', 
      lastname : 'Duck', 
      phone : '+86 1234567', 
      email : 'track@duck.com', 
      wechat : 'trackduck' 
    },
    { 
      id: uuid.v1(),
      firstname : 'Daisy', 
      lastname : 'Duck', 
      phone : '+86 1234567', 
      email : 'daisy@duck.com', 
      wechat : 'daiduck' 
    },
    { 
      id : uuid.v1(),
      firstname : 'Donald', 
      lastname : 'Duck', 
      phone : '+86 1234567', 
      email : 'donald@duck.com', 
      wechat : 'donduck' 
    },
    { 
      id: uuid.v1(),
      firstname : 'Tick', 
      lastname : 'Duck', 
      phone : '+86 1234567', 
      email : 'tick@duck.com', 
      wechat : 'tickduck' 
    },
    { 
      id: uuid.v1(),
      firstname : 'Trick', 
      lastname : 'Duck', 
      phone : '+86 1234567', 
      email : 'trick@duck.com', 
      wechat : 'trickduck' 
    },
    { 
      id: uuid.v1(),
      firstname : 'Track', 
      lastname : 'Duck', 
      phone : '+86 1234567', 
      email : 'track@duck.com', 
      wechat : 'trackduck' 
    },
    { 
      id: uuid.v1(),
      firstname : 'Daisy', 
      lastname : 'Duck', 
      phone : '+86 1234567', 
      email : 'daisy@duck.com', 
      wechat : 'daiduck' 
    },
    { 
      id : uuid.v1(),
      firstname : 'Donald', 
      lastname : 'Duck', 
      phone : '+86 1234567', 
      email : 'donald@duck.com', 
      wechat : 'donduck' 
    },
    { 
      id: uuid.v1(),
      firstname : 'Tick', 
      lastname : 'Duck', 
      phone : '+86 1234567', 
      email : 'tick@duck.com', 
      wechat : 'tickduck' 
    },
    { 
      id: uuid.v1(),
      firstname : 'Trick', 
      lastname : 'Duck', 
      phone : '+86 1234567', 
      email : 'trick@duck.com', 
      wechat : 'trickduck' 
    },
    { 
      id: uuid.v1(),
      firstname : 'Track', 
      lastname : 'Duck', 
      phone : '+86 1234567', 
      email : 'track@duck.com', 
      wechat : 'trackduck' 
    },
    { 
      id: uuid.v1(),
      firstname : 'Daisy', 
      lastname : 'Duck', 
      phone : '+86 1234567', 
      email : 'daisy@duck.com', 
      wechat : 'daiduck' 
    },
        { 
      id : uuid.v1(),
      firstname : 'Donald', 
      lastname : 'Duck', 
      phone : '+86 1234567', 
      email : 'donald@duck.com', 
      wechat : 'donduck' 
    },
    { 
      id: uuid.v1(),
      firstname : 'Tick', 
      lastname : 'Duck', 
      phone : '+86 1234567', 
      email : 'tick@duck.com', 
      wechat : 'tickduck' 
    },
    { 
      id: uuid.v1(),
      firstname : 'Trick', 
      lastname : 'Duck', 
      phone : '+86 1234567', 
      email : 'trick@duck.com', 
      wechat : 'trickduck' 
    },
    { 
      id: uuid.v1(),
      firstname : 'Track', 
      lastname : 'Duck', 
      phone : '+86 1234567', 
      email : 'track@duck.com', 
      wechat : 'trackduck' 
    },
    { 
      id: uuid.v1(),
      firstname : 'Daisy', 
      lastname : 'Duck', 
      phone : '+86 1234567', 
      email : 'daisy@duck.com', 
      wechat : 'daiduck' 
    },
    { 
      id : uuid.v1(),
      firstname : 'Donald', 
      lastname : 'Duck', 
      phone : '+86 1234567', 
      email : 'donald@duck.com', 
      wechat : 'donduck' 
    },
    { 
      id: uuid.v1(),
      firstname : 'Tick', 
      lastname : 'Duck', 
      phone : '+86 1234567', 
      email : 'tick@duck.com', 
      wechat : 'tickduck' 
    },
    { 
      id: uuid.v1(),
      firstname : 'Trick', 
      lastname : 'Duck', 
      phone : '+86 1234567', 
      email : 'trick@duck.com', 
      wechat : 'trickduck' 
    },
    { 
      id: uuid.v1(),
      firstname : 'Track', 
      lastname : 'Duck', 
      phone : '+86 1234567', 
      email : 'track@duck.com', 
      wechat : 'trackduck' 
    },
    { 
      id: uuid.v1(),
      firstname : 'Daisy', 
      lastname : 'Duck', 
      phone : '+86 1234567', 
      email : 'daisy@duck.com', 
      wechat : 'daiduck' 
    },
    { 
      id : uuid.v1(),
      firstname : 'Donald', 
      lastname : 'Duck', 
      phone : '+86 1234567', 
      email : 'donald@duck.com', 
      wechat : 'donduck' 
    },
    { 
      id: uuid.v1(),
      firstname : 'Tick', 
      lastname : 'Duck', 
      phone : '+86 1234567', 
      email : 'tick@duck.com', 
      wechat : 'tickduck' 
    },
    { 
      id: uuid.v1(),
      firstname : 'Trick', 
      lastname : 'Duck', 
      phone : '+86 1234567', 
      email : 'trick@duck.com', 
      wechat : 'trickduck' 
    },
    { 
      id: uuid.v1(),
      firstname : 'Track', 
      lastname : 'Duck', 
      phone : '+86 1234567', 
      email : 'track@duck.com', 
      wechat : 'trackduck' 
    },
    { 
      id: uuid.v1(),
      firstname : 'Daisy', 
      lastname : 'Duck', 
      phone : '+86 1234567', 
      email : 'daisy@duck.com', 
      wechat : 'daiduck' 
    },
    { 
      id : uuid.v1(),
      firstname : 'Donald', 
      lastname : 'Duck', 
      phone : '+86 1234567', 
      email : 'donald@duck.com', 
      wechat : 'donduck' 
    },
    { 
      id: uuid.v1(),
      firstname : 'Tick', 
      lastname : 'Duck', 
      phone : '+86 1234567', 
      email : 'tick@duck.com', 
      wechat : 'tickduck' 
    },
    { 
      id: uuid.v1(),
      firstname : 'Trick', 
      lastname : 'Duck', 
      phone : '+86 1234567', 
      email : 'trick@duck.com', 
      wechat : 'trickduck' 
    },
    { 
      id: uuid.v1(),
      firstname : 'Track', 
      lastname : 'Duck', 
      phone : '+86 1234567', 
      email : 'track@duck.com', 
      wechat : 'trackduck' 
    },
    { 
      id: uuid.v1(),
      firstname : 'Daisy', 
      lastname : 'Duck', 
      phone : '+86 1234567', 
      email : 'daisy@duck.com', 
      wechat : 'daiduck' 
    },
    { 
      id : uuid.v1(),
      firstname : 'Donald', 
      lastname : 'Duck', 
      phone : '+86 1234567', 
      email : 'donald@duck.com', 
      wechat : 'donduck' 
    },
    { 
      id: uuid.v1(),
      firstname : 'Tick', 
      lastname : 'Duck', 
      phone : '+86 1234567', 
      email : 'tick@duck.com', 
      wechat : 'tickduck' 
    },
    { 
      id: uuid.v1(),
      firstname : 'Trick', 
      lastname : 'Duck', 
      phone : '+86 1234567', 
      email : 'trick@duck.com', 
      wechat : 'trickduck' 
    },
    { 
      id: uuid.v1(),
      firstname : 'Track', 
      lastname : 'Duck', 
      phone : '+86 1234567', 
      email : 'track@duck.com', 
      wechat : 'trackduck' 
    },
    { 
      id: uuid.v1(),
      firstname : 'Daisy', 
      lastname : 'Duck', 
      phone : '+86 1234567', 
      email : 'daisy@duck.com', 
      wechat : 'daiduck' 
    }
  ]);
});

var server = http.createServer(app);

console.log("=== Starting over ===")

server.listen(process.env.PORT || 5000);


