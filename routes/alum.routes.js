const router = require('express').Router();

const { 
    rutaVista,rutaGet, rutaPost, rutaPut, rutaDelete, deleteUser
 } = require('../controllers/alum.controllers');

//  Ruta que devuelve todos los usuarios

router.get('/vista', rutaVista)
router.get('/:id', rutaGet)



router.post('/', rutaPost)

// Actualizar usuarios
router.put('/:id', rutaPut)



router.delete('/:id', rutaDelete)

module.exports = router;