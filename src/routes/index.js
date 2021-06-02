const {Router} = require('express');
const router = Router();

const { getUsuarios, createusuarios, getUserById, deleteUser, modificarusuario } = require('../controllers/usuariosController');


router.get('/usuarios', getUsuarios );

router.post('/create', createusuarios);

router.get('/user/:id', getUserById );

router.put('/user/:id', modificarusuario);
router.delete('/user/:id', deleteUser)


module.exports = router;