// (5) Buat router Mahasiswa
const express = require('express')
const ListPembeli = require('../models/ListPembeli')
const router = express.Router() 


// Create 
router.post('/', async(req, res) => {
    // tampung input mahasiswa 
    const listPembeliPost = new ListPembeli({
        namaBunga: req.body.namaBunga,
        nomor: req.body.nomor
    })

    try {
        // simpan data 
        const listPembeli= await listPembeliPost.save()
        // response
        res.json(listPembeli)
    } catch (error) {
        res.json({message: error})
    }
})

// Read
router.get('/', async(req, res) => {
    try {
        const listPembeli = await ListPembeli.find()
        res.json(listPembeli)
    } catch (error) {
        res.json({message: error})
    }
})


// Update 
router.put('/:listPembeliId', async(req, res) => {
    // tampung input mahasiswa 
    const data = {
        namaBunga: req.body.namaBunga,
       nomor : req.body.nomor
    }

    try {
        // update data 
        const listPembeli = await ListPembeli.updateOne({_id: req.params.listPembeliId}, data)
        // response
        res.json(listPembeli)
    } catch (error) {
        res.json({message: error})
    }
})

// Delete 
router.delete('/:listPembeliId', async(req, res) => {
    try {
        // delete data 
        const listPembeli = await ListPembeli.deleteOne({_id: req.params.listPembeliId})
        // response
        res.json(listPembeli)
    } catch (error) {
        res.json({message: error})
    }
})

module.exports = router