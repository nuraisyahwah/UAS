// (5) Buat router Mahasiswa
const express = require('express')
const ListMakanan = require('../models/ListMakanan')
const router = express.Router() 


// Create 
router.post('/', async(req, res) => {
    // tampung input mahasiswa 
    const listMakananPost = new ListMakanan({
        nama: req.body.nama,
        alamat: req.body.alamat
    })

    try {
        // simpan data 
        const listMakanan = await listMakananPost.save()
        // response
        res.json(listMakanan)
    } catch (error) {
        res.json({message: error})
    }
})

// Read
router.get('/', async(req, res) => {
    try {
        const listMakanan= await listMakanan.find()
        res.json(listMakanan)
    } catch (error) {
        res.json({message: error})
    }
})


// Update 
router.put('/:listMakananId', async(req, res) => {
    // tampung input mahasiswa 
    const data = {
        nama: req.body.nama,
        alamat: req.body.alamat
    }

    try {
        // update data 
        const listMakanan = await ListMakanan.updateOne({_id: req.params.listMakananId}, data)
        // response
        res.json(listMakanan)
    } catch (error) {
        res.json({message: error})
    }
})

// Delete 
router.delete('/:listMakananId', async(req, res) => {
    try {
        // delete data 
        const listMakanan = await ListMakanan.deleteOne({_id: req.params.listMakananId})
        // response
        res.json(listMakanan)
    } catch (error) {
        res.json({message: error})
    }
})

module.exports = router