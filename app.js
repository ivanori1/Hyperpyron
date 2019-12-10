const express = require("express");
const app = express();
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: true}));
/*
app.get("/", function(req, res) {
    rp('https://api.coinmarketcap.com/v2/ticker/')

    .then((body) => {
        const parsedData = JSON.parse(body);
        var data = JSON.parse(body)
        res.render("price", {data:data})

    })
    .catch((err) => {
        console.log('Error ! ', err)
    })

})
*/
app.set("view engine", "ejs");
const sendRequests = [
    {address: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa", amount: "68.13"}
]
app.get("/", function(req, res) {
  res.render("index");
});

app.get("/about", function(req, res) {
    const founders = [
        {name: "Ivan Coric", image : "https://bit.ly/2E7vIWo"},
        {name: "Ivana Coric", image : "https://bit.ly/2RBjZaM"}
    ]
    res.render("about", {founders:founders});
  });

app.get('/send', function(req, res) {
    res.render("send",{sendRequests:sendRequests})
})

app.post('/send', function(req, res) {
    //get data from form adn add to send array
    const address = req.body.address
    const amount =  req.body.amount
    const newSendRequests = {address:address, amount:amount}
    sendRequests.push(newSendRequests)
    // redirect to send page
    res.redirect("/send")
})

app.get("/send/new", function(req, res) {
res.render("new.ejs")
});

app.listen(8080, function() {
  console.log("Hyperpyron server started");
});
