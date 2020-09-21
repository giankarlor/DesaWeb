const conexion = require('../config/dbmysql')

exports.leer = (req, res)=>{
//res.json('todo OK');
conexion.query('SELECT * FROM clientes;', (err, rows, fields)=>{
    if (!err)
        res.json(rows);

    else{
        console.log(err);
    }
    
});
//conexion.end();  
}

exports.busca = (req, res)=>{
 const { id } = req.params;
 //console.log(id);
 conexion.query('SELECT * FROM clientes WHERE id=?;',[id], (err, rows, fields)=>{
    if (!err)
        res.json(rows[0]);

    else{
        console.log(err);
    }
});

}

exports.inserta = (req, res)=>{
    //const { id } = req.params;
    const {creado_por,direccion,id,nit,nombre}=req.body;
    conexion.query('INSERT INTO `clientes` (`creado_por`, `direccion`, `id`, `nit`, `nombre`) VALUES (?,?,?,?,?);',[creado_por, direccion, id, nit, nombre], (err, rows, fields) => {
       if (!err)
           res.json({Status: 'Cliente Guardado !'});
       else{
           console.log(err);
       }
   });
   
   }


exports.actualiza = (req, res)=>{
    const { id } = req.params;
    const {creado_por,direccion,nit,nombre}=req.body;
    conexion.query('UPDATE `clientes` SET `creado_por`=?,`direccion`=?,`nit`=?,`nombre`=? WHERE `id`=?',[creado_por, direccion, nit, nombre, id], (err, rows, fields) => {
                    //UPDATE `clientes` SET `creado_por`=[value-1],`direccion`=[value-2],`id`=[value-3],`nit`=[value-4],`nombre`=[value-5] WHERE 1    
        if (!err)
           res.json({Status: 'Cliente Actualizado !'});
       else{
           console.log(err);
       }
   });
   
   }

   exports.elimina = (req, res)=>{
    const { id } = req.params;
    //const {creado_por,direccion,nit,nombre}=req.body;
    conexion.query('DELETE FROM `clientes` WHERE id=?',[id], (err, rows, fields) => {
                    //DELETE FROM `clientes` WHERE id='222'
                    //UPDATE `clientes` SET `creado_por`=[value-1],`direccion`=[value-2],`id`=[value-3],`nit`=[value-4],`nombre`=[value-5] WHERE 1    
        if (!err)
           res.json({Status: 'Cliente Eliminado !'});
       else{
           console.log(err);
       }
   });
   
   }