const SlokaTag = require('../models/slokaTag');

module.exports = {
  getAllSlokaTags: async (req, res) => {
    try {
      const slokaTags = await SlokaTag.find();
      res.json({ success: true, data: slokaTags });
    } catch (error) {
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  },

  getSlokaTagById: async (req, res) => {
    const { slokaTagId } = req.params;
    try {
      const slokaTag = await SlokaTag.findById(slokaTagId);
      if (!slokaTag) {
        return res.status(404).json({ success: false, error: 'SlokaTag not found' });
      }
      res.json({ success: true, data: slokaTag });
    } catch (error) {
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  },

  createSlokaTag: async (req, res) => {
    const { sloka_id, tag_id } = req.body;
    try {
      const newSlokaTag = await SlokaTag.create({ sloka_id, tag_id });
      res.status(201).json({ success: true, data: newSlokaTag });
    } catch (error) {
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  },

  updateSlokaTag: async (req, res) => {
    const { slokaTagId } = req.params;
    const { sloka_id, tag_id } = req.body;
    try {
      const updatedSlokaTag = await SlokaTag.findByIdAndUpdate(
        slokaTagId,
        { sloka_id, tag_id },
        { new: true }
      );
      if (!updatedSlokaTag) {
        return res.status(404).json({ success: false, error: 'SlokaTag not found' });
      }
      res.json({ success: true, data: updatedSlokaTag });
    } catch (error) {
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  },

  deleteSlokaTag: async (req, res) => {
    const { slokaTagId } = req.params;
    try {
      const deletedSlokaTag = await SlokaTag.findByIdAndDelete(slokaTagId);
      if (!deletedSlokaTag) {
        return res.status(404).json({ success: false, error: 'SlokaTag not found' });
      }
      res.json({ success: true, data: deletedSlokaTag });
    } catch (error) {
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  },
};
