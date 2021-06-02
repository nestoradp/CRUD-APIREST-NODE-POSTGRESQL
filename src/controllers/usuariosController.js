   const pg = require('pg');
   
  const pool = new pg.Pool({
    host: '192.168.1.42',
    user: 'postgres',
    password: 'postgres',
    database: 'nodeestudio',
    port:'5432'

   });


 const getUsuarios = async (req,res)=>{
  const respuesta=  await pool.query('SELECT * FROM usuarios');
 // console.log(respuesta.rows);
  res.status(200).json(respuesta.rows);
   
  };

  const getUserById = async (req,res)=>{
      //res.send("user "+"  " + req.params.id);
     const respuesta=  await pool.query('SELECT * FROM usuarios where id =$1', [req.params.id])
    
     res.json(respuesta.rows);
 
 
    };
   
    const deleteUser= async (req,res)=>{
     const respuesta = await pool.query('DELETE  FROM usuarios WHERE id = $1',[req.params.id])
        console.log(respuesta);
        res.json('Usuario'+ req.params.id)


    };

    const modificarusuario = async (req,res)=>{
      const id = req.params.id;
      const{name,email} = req.body;
    const respuesta= await  pool.query('UPDATE usuarios SET name =$1, email=$2 where id=$3',[name,email,id]);
     console.log(respuesta);
      res.json('Usuario' + " " +name + " "+'Actualizado')

    };



  const createusuarios = async(req,res)=>{
    const {name, email } = req.body;
    const respuesta=  await  pool.query('INSERT INTO usuarios(name,email)  VALUES($1,$2)',[name,email]);
  // console.log(respuesta);
  // res.send("Usuario Creado");


   res.json({
     message: "usuario Insertado Correctamente",
     body:{
         usuarios:{name,email}
     }
   })
  

  };






  module.exports ={

  getUsuarios,
  createusuarios,
  getUserById,
  deleteUser,
  modificarusuario 



  }