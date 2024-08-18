import React, { createContext, useContext, useState, useEffect } from "react";
import data from "../assets/data.json";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [dataState, setDataState] = useState({});

  useEffect(() => {
    setDataState(data);
  }, []);

  const getHomeData = () => dataState?.Home || {};
  const getAboutData = () => dataState?.About || {};
  const getServicesData = () => dataState?.Services || {};
  const getExperianceData = () => dataState?.Experiance || {};
  const getProjectsData = () => dataState?.Projects || {};
  const getContactData = () => dataState?.Contact || {};

  return (
    <DataContext.Provider
      value={{
        getHomeData,
        getAboutData,
        getServicesData,
        getExperianceData,
        getProjectsData,
        getContactData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataProvider = () => useContext(DataContext);
