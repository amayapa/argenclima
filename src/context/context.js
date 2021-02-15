import React, { createContext, useState } from "react";
import { provinces } from "./ProvincesData.js";
import { cities } from "./ArgentineIds";
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

const Provider = ({ children }) => {
  const api = "9ec47a8150e44e6385aae05be36f9e11";
  const iDB = indexedDB;
  const [data, setData] = useState({
    cities: cities,
    provinces: provinces,
    currentProvince: {},
    provincesRes: [],
    citiesRes: [],
    favs: [],
  });

  const fixName = (nom) => {
    const regex = / Province|F.D./gi;
    const name =
      nom === "Buenos Aires F.D."
        ? "Ciudad Autónoma de Buenos Aires"
        : nom === "Santa Fe Province"
        ? "Sante Fé"
        : nom === "Entre Rios Province"
        ? "Entre Ríos"
        : nom === "Rio Negro Province"
        ? "Río Negro"
        : nom === "Cordoba Province"
        ? "Córdoba"
        : nom === "Neuquen Province"
        ? "Neuquén"
        : nom === "Tucuman Province"
        ? "Tucumán"
        : nom.replace(regex, "");
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
      }}
    >
      {children}
    </Context.Provider>
  );
};
export default Provider;
