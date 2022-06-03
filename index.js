let nombre = "Juan Carlos";
let apellido = "Fernández";
let estudiante = nombre + " " + apellido;
let estudianteMayus = estudiante.toUpperCase;
let estudianteMinus = estudiante.toLowerCase;
let numeroLetras = estudiante.length;
let pNombre = nombre.charAt(0);
let pApellido = apellido.charAt(8);
let trimEstudiante = estudiante.split(" ").join("");
let boolEstudiante = estudiante.includes(nombre);

console.log(boolEstudiante)