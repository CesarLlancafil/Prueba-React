//import { Box, Button, CircularProgress, Container, Grid, Pagination } from "@mui/material";
import React from "react";
import logo from './logo.svg';
//import { characters } from "../../api/characters";

export const LoadingComponent: React.FC<{}> = () => {
   return (
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </header>
    </div>
    );
};