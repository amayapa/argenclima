const fs = require("fs");

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
const ids = [
  "3435907",
  "3862286",
  "3861887",
  "3861244",
  "3433955",
  "3435214",
  "3860255",
  "3434137",
  "3433896",
  "3853404",
  "3849574",
  "3848949",
  "3844419",
  "3430657",
  "3843122",
  "3838830",
  "3838231",
  "3837152",
  "3837029",
  "3836350",
  "3836276",
  "3835868",
  "3834450",
  "3833578",
];

const checkIds = () => {
  let data = fs.readFileSync("city.list.json").toString();
  return JSON.parse(data);
};

const data = checkIds();
let arIds = data.filter((e) => e.country === "AR");

const getProvincesNames = () => {
  const dataProvinces = () => {
    const provinces = fs.readFileSync("ProvincesData.json").toString();
    return JSON.parse(provinces);
  }
  const provinces = dataProvinces();
  const names = provinces.map(p => p.name)
  return names;
};

const checkProvinces = () => {
  let ids = [];
  for (let i = 0; i < arIds.length; i++) {
    for (let j = 0; j < provinces.length; j++) {
      if (arIds[i].name.includes(provinces[j].name)) {
        ids.push(arIds[i]);
      }
    }
  }
  ids = [...new Set(ids)];
  return ids;
};
function saveCities() {
  return fs.writeFileSync("ArgentineIds.js", JSON.stringify(arIds, null, 2));
}
function saveProv() {
  return fs.writeFileSync(
    "ProvincesIds.js",
    JSON.stringify(checkProvinces(), null, 2)
  );
}
saveCities();
saveProv();
console.log(checkProvinces().length, "Provincias");
console.log(arIds.length, "Ciudades");
console.log(checkProvinces(), 'prov');
