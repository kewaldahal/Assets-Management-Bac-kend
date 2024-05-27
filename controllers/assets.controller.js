import Asset from '../models/assets.model.js';

const assetsRegister = async (req, res) => {
    const {category, name, description,} = req.body;

    const newAsset = new Asset ({
        category,
        name,
        description,
    })

    if(newAsset) {
        await newAsset.save();

        res.status(200).json({
            category: newAsset.category,
            name: newAsset.name,
            description: newAsset.description
        })
    }
 }

 export default assetsRegister;