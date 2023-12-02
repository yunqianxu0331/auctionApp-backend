const express = require('express');
const uuid = require('uuid')
let items = require('../models/item') //Ctl-Shift-h


const router = express.Router();

///api/items
router.get('/', (req, res) => {
    res.json(items);
});

///route get api/items/:id
//get item by its lot_id
router.get('/:id', (req, res) => {
    console.log(req.params.id);
    const item = items.find(t => t.lot_id == req.params.id)
    res.json(item)
});

///route post api/items/:id
//get item by its lot_id
router.post('/', (req, res) => {
    const newItem = {
        name: req.body.name,
        lot_id: uuid.v5,
        auction_id: req.body.lot_id,
        current_price: req.body.current_price,
        end_time: req.body.end_time,
    };

    items.push(newItem);
    res.send(items)

});


//delete /api/items
router.delete('/', (req, res) => {
    const item = items.find(t => t.lot_id == req.body.lot_id);
    if (!item) {
        return res.status(404).send('item not found');
    } else {
        items = items.filter(t => t.lot_id !== item.lot_id)
        res.json(item)
    }
});

//put /api/items
router.put('/', (req, res) => {
    const item = items.find(t => t.lot_id == req.body.lot_id);
    if (!item) {
        return res.status(404).send('item not found');
    } else {
        items = items.filter(t => {
            if (t.lot_id == item.lot_id) {
                t.name = req.body.name;
                t.current_price = req.body.current_price;
                t.end_time = req.body.end_time;
            }
        })
        res.json(items)
    }
});

module.exports = router;