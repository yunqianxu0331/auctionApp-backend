const express = require('express');
const connectDB = require('./config/connectDB');

connectDB();
const app = express();
app.use(express.json());//****important for post */ allow u pass json information from the body by a formed post

const itemRoutes = require('./routes/itemRoutes');
const auctionRoutes = require('./routes/auctionRoutes');

app.use('/api/items', itemRoutes);
app.use('/api/auctions', auctionRoutes);
////can do this or can do routers
// app.get('/', (req,res) => {
//     res.send('hello world');
// })

// app.get('/about', (req,res) => {
//     res.send('about');
// })

// app.get('/users',(req,res) => {
//     const users =[
//         {name:'xu', age:87},
//         {name:'gao', age:87},
//     ]
//     res.json(users);
// })



const PORT = process.env.PORT || 5000;
app.listen(PORT, 'localhost', () => {
    console.log(`Server is running at port ${PORT}`);
});