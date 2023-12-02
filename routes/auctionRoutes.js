const express = require('express');
const auctions = require('../models/auction') //Ctl-Shift-h
const uuid = require('uuid')
const router = express.Router();

let Auction = require('../models/auction')


//Route GET /api/auctions
//model: Get all auctions
//Access: public
router.get('/', async (req, res) => {
    try {
        const auctionDB = await Auction.find();
        res.send(auctionDB);
    } catch (err) {
        console.log(err.message);
        return res.status(500).json({ error: "SERVER ERROR: " + err.message });
    }
});

//Route POST /api/auctions
//model: add an auction by id
//Access: public
router.get('/:id', async (req, res) => {
    try {
        const auctionDB = await Auction.findById(req.params.id);
        res.send(auctionDB);
    } catch (err) {
        console.log(err.message);
        return res.status(500).json({ error: "SERVER ERROR: " + err.message });
    }
});

//Route POST /api/auctions
//model: add an auction
//Access: public
router.post('/', async (req, res) => {
    try {
        const newAuction = await await Auction.create({
            name: req.body.name,
            city: req.body.city,
            end_time: req.body.end_time,
            status: true,
        })
        console.log('new Aution created: ', newAuction);
        res.send(newAuction);
    } catch (err) {
        console.log(err.message);
        return res.status(500).json({ error: "SERVER ERROR: " + err.message });
    }
})

//Route delete /api/auctions
//model: add an auction
//Access: public
router.delete("/", async (req, res) => {
    try {
        const auction = await Auction.findByIdAndDelete({ _id: req.body.id });
        res.send("Item deleted");
    } catch (err) {
        console.log(err.message);
        return res.status(500).json({ error: "SERVER ERROR: " + err.message });
    }
});

//Route put /api/auctions
//model: update an auction info
//Access: public
router.put("/", async (req, res) => {
    try {
        const auction = await Auction.findById(req.body.id);
        auction.name = req.body.name;
        auction.city = req.body.city;
        await auction.save();
        res.send("Item updated");
    } catch (err) {
        console.log(err.message);
        return res.status(500).json({ error: "SERVER ERROR: " + err.message });
    }
});


//post /api/auctions
// router.post('/', (req, res) => {
//     const newAuction = {
//         name : req.body.name,
//         auction_id : uuid.v4,
//         city: req.body.city,
//         end_time: req.body.end_time,
//     };

//     auctions.push(newAuction);
//     res.send(newAuction)

// });

module.exports = router;
