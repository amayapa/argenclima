import React, { createContext, useState } from "react";
import { provinces } from "./ProvincesIds";
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
  const [data, setData] = useState({
    cities: cities,
    provinces: provinces,
    currentProvince: {},
    provincesRes: [],
    citiesRes: [],
  });
  return (
    <Context.Provider
      value={{
        data: data,
        setData: setData,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
