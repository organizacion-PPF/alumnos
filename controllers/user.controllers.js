const ctrlHome = {};
const { findById, findByIdAndUpdate, findByIdAndDelete } = require('../models/User');
const User = require('../models/User');

ctrlHome.rutaGet = async (req, res) => {
    
    const users = await User.find() 

    res.json(users);
}


ctrlHome.rutaPost = async (req, res) => {
    const alumno = req.body;
    const user = new User( alumno);
    await user.save() 

    res.json({msg: 'alumno creado correctamente'});
}


ctrlHome.rutaPut = async (req, res) => {
    
    const id = req.params.id;
    const alumno = req.body;
    const user = await User.findByIdAndUpdate(id,alumno,{ new: true })

    res.json({
        msg: 'alumno actualizado correctamente',
        user
    })
}

ctrlHome.rutaDelete = async (req, res) => {
    const  id = req.params.id;
    
    try {
       
        await User.findByIdAndDelete(id)

        res.json({
            msg: 'alumno eliminado correctamente'
        })
    } catch (error) {
        console.log('Error al eliminar alumno: ', error)
    }
}

module.exports = ctrlHome;