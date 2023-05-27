conn = new Mongo();
db = conn.getDB("mydb");

db.empleados.insert(
  [
   {nombre: 'Alberto', apellido: 'Arias', cargo:'Contador', salario: 1800, edad: '42', email: 'alArias@gmail.com', created_at: new Date('01/23/2020')}
 ]);
