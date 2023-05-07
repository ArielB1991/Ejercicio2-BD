const servidor= require ('express');

const app= servidor();

const puerto=3003;

app.listen(puerto,()=>{
    console.log(`El servidor esta escuchando el puerto ${puerto}`)
})   

const usuarios = [
    { id: 1, nombre: 'Juan', correo: 'juan@example.com', contrasena: '123456' },
    { id: 2, nombre: 'María', correo: 'maria@example.com', contrasena: 'password' },
    { id: 3, nombre: 'Pedro', correo: 'pedro@example.com', contrasena: 'p@ssw0rd' },
    { id: 4, nombre: 'Ana', correo: 'ana@example.com', contrasena: 'securepwd' },
    { id: 5, nombre: 'Javier', correo: 'javier@example.com', contrasena: 'qwerty' }, 
   ];
   // Objeto de clientes 
   const clientes = [
    { id: 1, nombre: 'Juan', correo: 'juan@example.com', telefono: '1234567890' },
    { id: 2, nombre: 'María', correo: 'maria@example.com', telefono: '0987654321' },
    { id: 3, nombre: 'Pedro', correo: 'pedro@example.com', telefono: '5555555555' },
    { id: 4, nombre: 'Ana', correo: 'ana@example.com', telefono: '1111111111' },
    { id: 5, nombre: 'Javier', correo: 'javier@example.com', telefono: '3333333333' },
   ];
   // Objeto de productos 
   const productos = [
    { id: 1, nombre: 'Camiseta', descripcion: 'Camiseta de algodón de alta calidad', precio: 25.99 },
    { id: 2, nombre: 'Pantalón', descripcion: 'Pantalón vaquero de diseño moderno', precio: 49.99 },
    { id: 3, nombre: 'Zapatos', descripcion: 'Zapatos deportivos con tecnología avanzada', precio: 89.99 },
    { id: 4, nombre: 'Gorra', descripcion: 'Gorra ajustable con logo de la marca', precio: 15.99 },
    { id: 5, nombre: 'Calcetines', descripcion: 'Calcetines de algodón de alta calidad', precio: 7.99 },
   ];
   // Objeto de ventas 
   const ventas = [
    { id: 1, cliente_id: 2, fecha: '2022-02-15', productos: [productos[0], productos[1], productos[2]] },
    { id: 2, cliente_id: 1, fecha: '2022-03-01', productos: [productos[3], productos[4]] },
    { id: 3, cliente_id: 3, fecha: '2022-04-05', productos: [productos[2], productos[3]] },
    { id: 4, cliente_id: 4, fecha: '2022-04-12', productos: [productos[0], productos[4]] },
    { id: 5, cliente_id: 5, fecha: '2022-05-03', productos: [productos[1], productos[2], productos[3], 
   productos[4]] },
   ];
   

   //RUTAS

   app.get('/', (req,res)=>res.send(ventas))


   app.get('/TodosLosProductos', (req,res)=>{
    res.send(productos);

    app.get('/ProductoID'), (req,res)=>{
        const filtro= productos.filter(Fid=>Fid.id(''))
        res.send(filtro)
    }

    app.get('/usuariosNombre'), (req,res)=>{
        const Busuarios= usuarios.filter(FNombre=>FNombre.nombre)
        res.send(Busuarios);
    }

    app.get('VentasUsuario'), (req,res)=>{
        const Vusuario= ventas.filter(Fventas=Fventas.id)
    }
});