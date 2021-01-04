const fs = require('fs');
const provinces = [
  { name: "Ciudad Autónoma de Buenos Aires" },
  { name: "Buenos Aires" },
  { name: "Santa Fé" },
  { name: "Córdoba" },
  { name: "Neuquén" },
  { name: "Chubut" },
  { name: "Corrientes" },
  { name: "San Salvador de Jujuy" },
  { name: "Mendoza" },
  { name: "Salta" },
  { name: "San Juan" },
  { name: "San Luis" },
  { name: "Misiones" },
  { name: "Santa Cruz" },
  { name: "Catamarca" },
  { name: "Chaco" },
  { name: "Entre Ríos" },
  { name: "Formosa" },
  { name: "La Pampa" },
  { name: "La Rioja" },
  { name: "Río Negro" },
  { name: "Santiago del Estero" },
  { name: "Tierra del Fuego" },
  { name: "Tucumán" },
];

const checkIds = () => {
  let data = fs.readFileSync('city.list.json').toString()
  return JSON.parse(data)
}
const data = checkIds()
let arIds = data.filter(e => e.country === 'AR');

const checkProvinces = () =>{
  let ids = []
  for (let i = 0; i < arIds.length; i++) {
    for (let j = 0; j < provinces.length; j++) {
      if (arIds[i].name.includes(provinces[j].name)) {
        ids.push(arIds[i])
      }      
    }    
  }
  ids = [...new Set(ids)];
  return ids;
}
function saveCities() {
  return fs.writeFileSync('ArgentineIds.js', JSON.stringify(arIds, null, 2));
}
function saveProv() {
  return fs.writeFileSync('ProvincesIds.js', JSON.stringify(checkProvinces(), null, 2));
}
saveCities();
saveProv();
console.log(checkProvinces().length,'Provincias');
console.log(arIds.length,'Ciudades');