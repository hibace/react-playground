import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import ProductList from './components/Product/ProductList'

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <ProductList/>
      </Container>
    </React.Fragment>
  );
}

export default App
