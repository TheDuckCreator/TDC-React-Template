import { Button } from "@chakra-ui/react";
import React from "react";
import TDCLogo from "../Assets/TDC Logo black.png";
import LoginComponent from "../Components/LoginComponent";
export default function Home({ props }) {
  const medicalTakerUserAccess = localStorage.getItem("medicalTakerUserAccess");
  if (medicalTakerUserAccess) return <div className='container mx-auto'></div>;
  else
    return (
      <div className='container mx-auto'>
        <LoginComponent />
      </div>
    );
}
