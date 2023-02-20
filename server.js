/**Requerimos el paquete - modulo (mysql) */
const mysq = require('mysql');

/**Definimos un const llamada confiBD la cuál será igual a un objeto JSON
 * con los parametros que se necesitan para conectar NodeJS con una BD en MySQL.
 */
const confiBD =
{
    host : 'localhost',
    user: 'root',
    password: '',
    database: 'node_mysql',
    port: 3306
}
//console.log(confiBD);


/** Creamos una constante llamada conBD la cuál será igual al método mysql.createConnection()
 *  de MySQL, esto servirá para interactuar con el servidor de MySQL.
 */
const conBD = new mysq.createConnection(confiBD);

/**La función connect() se usa para establecer la conexión al servidor,
 * aqui validamos si la conexión fue un error o exitosa.
*/
conBD.connect( (error)=>{
    if(error){
        console.log('Error en la conexión de BD');
        throw err; //Dispara un mensaje de error
    }else{
        console.log('Conexión exitosa a BD');
        getClientes(); //Llamamos a esta función para obtener una lista de registros.
    }
    
    conBD.end(); //Cerrando la conexion de BD
    
    /** Tambien podemos cerrar la conexion de BD así:
     * conBD.destroy();
     * 
     * Otra forma de cerrar una conexión seria así:
    conBD.end((err)=> { 
        if (err) throw err;
        else  console.log('Conexion de BD cerrada correctamente.') 
    });
    */
});



/**Defino una función para realizar un sql al gestor de BD MySQL */
const getClientes = ()=>{
    const sql = "SELECT * FROM carros ORDER BY id DESC";

    /** La función query() se usa para ejecutar la consulta SQL en la base de datos MySQL */
    conBD.query(sql, (err, results, fields)=>{
    if(err) throw err; //Mostrará este mensaje si hay error en la consulta SQL.

    /**Si no hay error en la consulta SQL */
    //console.log(results);
    console.log(`Total de Registros: ${results.length}`)
    console.table(results);

    /**Recorriendo todos los registros con el metodo forEach de JavaScript */
    results.forEach(result => {
        console.log(result);
    });
        
    /**Recorriendo todos los registros obtenidos de la consulta con el método for de JavaScript */
    for (let i = 0; i < results.length; i++) {
        const elemento = results[i].marca;
        console.log({elemento})
    }

    })
}
console.log('Saludos Web Developers');


