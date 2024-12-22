const PapierMache = require('../../models/interiorDecor/PapierMache');  

// Controller for getting all Papier-Mâché items
const getPapierMacheItems = async (req, res) => {
    try {
        const items = await PapierMache.find();
        res.status(200).json({ success: true, message: 'Items fetched successfully', data: items });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error fetching items', error: error.message });
    }
};

// Controller for creating a new Papier-Mâché item
const createPapierMacheItem = async (req, res) => {
    try {
        const newItem = new PapierMache({
            ...req.body,
            userId: req.user.user._id,
        });
        await newItem.save();
        res.status(201).json({ success: true, message: 'Item created successfully', data: newItem });
    } catch (error) {
        res.status(400).json({ success: false, message: 'Error creating item', error: error.message });
    }
};

// Controller for updating a Papier-Mâché item
const updatePapierMacheItem = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedItem = await PapierMache.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedItem) {
            return res.status(404).json({ success: false, message: 'Item not found' });
        }
        res.status(200).json({ success: true, message: 'Item updated successfully', data: updatedItem });
    } catch (error) {
        res.status(400).json({ success: false, message: 'Error updating item', error: error.message });
    }
};

// Controller for deleting a Papier-Mâché item
const deletePapierMacheItem = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedItem = await PapierMache.findByIdAndDelete(id);
        if (!deletedItem) {
            return res.status(404).json({ success: false, message: 'Item not found' });
        }
        res.status(200).json({ success: true, message: 'Item deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error deleting item', error: error.message });
    }
};

module.exports = {
    getPapierMacheItems,
    createPapierMacheItem,
    updatePapierMacheItem,
    deletePapierMacheItem
};
