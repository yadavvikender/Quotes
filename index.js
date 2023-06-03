const quotes= require('./store/quotes');
const express = require('express');

console.log(quotes);
const app= express();

/**
 * ROUTES
 */
app.get("/quotes", (req, res) => {
    res.status(200).json(quotes);
});

app.get("/quotes/random", (req, res) => {
  res.status(200).json(quotes[Math.floor(Math.random() * quotes.length)]);
});

app.get("/quotes/search", (req, res) => {
    const search = req.query.author;
    const filteredQuotes = quotes.filter((quote) => {
        return quote.quote.toLowerCase().includes(search.toLowerCase()) || quote.author.toLowerCase().includes(search.toLowerCase());
    });
    res.status(200).json(filteredQuotes);
});

// app.get("/quote", (req, res) => {
//     res.status(200).json(quotes[Math.floor(Math.random() * quotes.length)]);
//   });

app.get('/',(req,res)=>{
    res.status(200).sendFile(__dirname+ '/views/home.html');
}
)
/**
 * APP CONFIG
 */

app.listen(3001,()=>{
    console.log('Server started on port 3001');
})