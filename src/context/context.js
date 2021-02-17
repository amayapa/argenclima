import React, { createContext, useState } from "react";
import { provinces } from "./ProvincesData.js";
// import { cities } from "./ArgentineIds";
// import WikiIds from "./WikiProvsIds";
export const Context = createContext();

/* export const provinces = [
  { name: "Ciudad Autónoma de Buenos Aires" },
  { name: "Buenos Aires" },
  { name: "Santa Fé" },
  { name: "Córdoba" },
  { name: "Neuquén" },
  { name: "Chubut" },
  { name: "Corrientes" },
  { name: "Jujuy" },
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
 */

const wikiIds = [
  {
    pageid: 8739,
    title: "Buenos Aires F.D.",
  },
  {
    pageid: 5102,
    title: "Salta Province",
  },
  {
    pageid: 8674,
    title: "Entre Rios Province",
  },
  {
    pageid: 11241,
    title: "Santiago del Estero Province",
  },
  {
    pageid: 11243,
    title: "Corrientes Province",
  },
  {
    pageid: 11244,
    title: "Misiones Province",
  },
  {
    pageid: 11246,
    title: "Catamarca Province",
  },
  {
    pageid: 11247,
    title: "La Rioja Province",
  },
  {
    pageid: 11249,
    title: "Cordoba Province",
  },
  {
    pageid: 11250,
    title: "La Pampa Province",
  },
  {
    pageid: 11253,
    title: "Mendoza Province",
  },
  {
    pageid: 11254,
    title: "Rio Negro Province",
  },
  {
    pageid: 11256,
    title: "Santa Fe Province",
  },
  {
    pageid: 11257,
    title: "Tierra del Fuego Province",
  },
  {
    pageid: 11259,
    title: "Santa Cruz Province",
  },
  {
    pageid: 11260,
    title: "San Luis Province",
  },
  {
    pageid: 11261,
    title: "San Juan Province",
  },
  {
    pageid: 11264,
    title: "Jujuy Province",
  },
  {
    pageid: 11265,
    title: "Formosa Province",
  },
  {
    pageid: 16363,
    title: "Buenos Aires",
  },
  {
    pageid: 48550,
    title: "Chubut Province",
  },
  {
    pageid: 67460,
    title: "Chaco Province",
  },
  {
    pageid: 130385,
    title: "Tucuman Province",
  },
  {
    pageid: 2416873,
    title: "Neuquen Province",
  },
];

const Provider = ({ children }) => {
  const api = "9ec47a8150e44e6385aae05be36f9e11";
  const iDB = indexedDB;
  const [wikiExtract, setWikiExtract] = useState({ extract: "", id: 0 });
  const [data, setData] = useState({
    provinces: provinces,
    provincesRes: [],
    currentProvince: {},
    citiesRes: [],
    favs: [],
  });

  const fixName = (nom) => {
    const regex = / Province|F.D./gi;
    const name =
      nom && nom === "Buenos Aires F.D."
        ? "Ciudad Autónoma de Buenos Aires"
        : nom && nom === "Santa Fe Province"
        ? "Sante Fé"
        : nom && nom === "Entre Rios Province"
        ? "Entre Ríos"
        : nom && nom === "Rio Negro Province"
        ? "Río Negro"
        : nom && nom === "Cordoba Province"
        ? "Córdoba"
        : nom && nom === "Neuquen Province"
        ? "Neuquén"
        : nom && nom === "Tucuman Province"
        ? "Tucumán"
        : nom && nom.replace(regex, "");
    return name;
  };

  const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };

  if (iDB) {
    var db;
    const request = iDB.open("Favorites", 1);
    request.onsuccess = () => {
      db = request.result;
      // console.log("OPEN", db);
    };
    request.onupgradeneeded = () => {
      db = request.result;
      console.log("Create", db);
      // eslint-disable-next-line
      const objectStore = db.createObjectStore("favProvinces", {
        keyPath: "id",
      });
    };
    request.onerror = (error) => {
      console.log("Error", error);
    };
  }
  const addToFav = (data) => {
    const fav = {
      id: data.id,
      name: data.name,
    };
    const transaction = db.transaction(["favProvinces"], "readwrite");
    const objectStore = transaction.objectStore("favProvinces");
    // eslint-disable-next-line
    const request = objectStore.add(fav);
  };

  const deleteFav = (id) => {
    const transaction = db.transaction(["favProvinces"], "readwrite");
    const objectStore = transaction.objectStore("favProvinces");
    const request = objectStore.delete(id);
    request.onsuccess = () => {
      const favorites = data.favs.filter((fav) => fav.id !== id);
      setData({
        ...data,
        favs: favorites,
      });
    };
  };

  const getFavs = () => {
    const transaction = db.transaction(["favProvinces"], "readonly");
    const objectStore = transaction.objectStore("favProvinces");
    const store = objectStore.getAll();
    store.onsuccess = () => {
      setData({
        ...data,
        favs: store.result,
      });
    };
  };

  const getWikiExtract = (searchTerm) => {
    const page = wikiIds.filter((page) => {
      return page.title === searchTerm;
    });
    const id = page[0].pageid;
    const rawSearchString = `https://es.wikipedia.org/w/api.php?action=query&pageids=${id}&prop=extracts&exchars=800&exintro&explaintext&exlimit=max&format=json&origin=*`;
    const searchString = encodeURI(rawSearchString);
    fetch(searchString)
      .then((res) => res.json())
      .then((res) => {
        if (res.query) {
          const results = Object.values(res.query.pages);
          setWikiExtract({
            extract: results[0].extract,
            id: id,
          });
        }
      })
      .catch((err) => console.log("Error", err));
  };

  return (
    <Context.Provider
      value={{
        data,
        setData,
        fixName,
        addToFav,
        getFavs,
        api,
        removeAccents,
        deleteFav,
        wikiExtract,
        setWikiExtract,
        getWikiExtract,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export default Provider;
