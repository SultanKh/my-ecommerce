// Requiring express in our server
const express = require('express');
const app = express();

const lotts = require('./data.json')
var cors = require('cors')




app.use(cors())
// Defining get request at '/' route
app.get('/', function (req, res) {
    res.json(lotts);
});


app.get('/pagination', paginated(lotts), (req, res) => {

    res.json(res.paginatedResults)
})

// Defining get request at '/array' route



function paginated(model) {

    return (req, res, next) => {
        const page = req.query.page;
        const limit = req.query.limit;

        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;

        const results = {};


        if (endIndex < model.length) {
            results.next = {
                page: page + 1,
                limit: limit
            }

        }


        if (startIndex > 0) {
            results.previous = {
                page: page - 1,
                limit: limit
            }

        }

        results.results = model.slice(startIndex, endIndex);

        res.paginatedResults = results;
        next()
    }

}

// Setting the server to listen at port 3000
app.listen(3000, function (req, res) {
    console.log("Server is running at port 3000");
});
