import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@emotion/react";
import { Box, Typography, createTheme } from "@mui/material";
import { Header } from "./app/components/Header";
import { Layout } from "./app/components/Layout";
import { appTheme } from "./config/theme";
import { Route, Routes } from "react-router-dom";

const Home = () => (
  <Box>
    <Typography variant="h3" component="h1">
      Home
    </Typography>
  </Box>
);

const About = () => (
  <Box>
    <Typography variant="h3" component="h1">
      About
    </Typography>
  </Box>
);

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <Box
        component="main"
        sx={{
          height: "100vh",
          backgroundColor: (theme) => theme.palette.grey[900],
        }}
      >
        <Header />
        <Layout>
          <h1>Ola Mundo</h1>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
          </Routes>
        </Layout>
      </Box>
    </ThemeProvider>
  );
}

export default App;
