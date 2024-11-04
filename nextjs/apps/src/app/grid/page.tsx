"use client"

import React, { useState, useEffect } from "react";
import 'handsontable/dist/handsontable.full.min.css';
import Handsontable from 'handsontable/base';
import { registerAllModules } from 'handsontable/registry';
import { HotTable } from '@handsontable/react';


interface RowData {
  athlete: string;
  age: number;
  country: string;
  year: number;
  date: string;
  sport: string;
  gold: number;
  silver: number;
  bronze: number;
  total: number;
}


export default function Grid() {
  registerAllModules();
  
  
  const [rowData, setRowData] = useState<RowData[]>([]);

  useEffect(() => {
    fetch("https://www.ag-grid.com/example-assets/olympic-winners.json")
      .then((response) => response.json())
      .then((data) => setRowData(data));
  }, []);

  const colHeaders = [
    "athlete",  
    "age",      
    "country",  
    "year",     
    "date",     
    "sport",    
    "gold",     
    "silver",   
    "bronze",  
    "total",    
  ];

  return (
    <>
      <HotTable
      data={rowData}
      rowHeaders={true}
      colHeaders={colHeaders}
      height="auto"
      width="auto"
      autoWrapRow={true}
      autoWrapCol={true}
      licenseKey="non-commercial-and-evaluation" // for non-commercial use only
      />

    </>
  
  )
}






