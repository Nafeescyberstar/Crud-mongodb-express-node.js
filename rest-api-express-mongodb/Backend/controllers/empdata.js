const Model = require('../model/model');


exports.adduser = async (req, res) => {

    const data = new Model({
        name: req.body.name,
        salary: req.body.salary,
        age: req.body.age
    });

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }

}

// exports.addform = (req, res) => {
//     res.render('add')
// }
exports.index = async (req, res) => {
   
    try {
        const data = await Model.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.editData = async (req, res) => {
    try {
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}


exports.updateRecord = async (req, res) => {
    try {
        const id = req.params.id;
        const udata = {
            name: req.body.name,
            salary: req.body.salary,
            age: req.body.age
        }
        const options = { new: true };
        const result = await Model.findByIdAndUpdate(id, udata, options);

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }

}

exports.deleteRecord = async (req, res) => {
    console.log('test')
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id);
        res.send(`Document with ${data.name} has been deleted`);
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }

}
