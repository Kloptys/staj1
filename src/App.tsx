import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { toplaYaz } from "./utils";

function App() {
  let [companies, setCompanies] = useState<any>([]);

  const getCompanies = () => {
    // @TODO: get Companies
    setCompanies([
      {
        companyName: "demo",
        companyId: 1,
      },
      {
        companyName: "demo2",
        companyId: 2,
      },
      {
        companyName: "demo3",
        companyId: 3,
      },
    ]);
  };

  useEffect(() => {
    getCompanies();

    return () => {
      console.log("close");
    };
  }, []);

  return (
    <div className="App" style={{ display: "flex", justifyContent: "center" }}>
      <table>
        <thead>
          <tr>
            <th>Firma ID</th>
            <th>Firma Adı</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company: any, index: any) => (
            <tr key={index}>
              <td>{company.companyId}</td>
              <td>{company.companyName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
