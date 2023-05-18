import { AppBar, Toolbar, Typography, Container } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography variant="h5">Title</Typography>
        </Toolbar>
      </AppBar>
      <Container sx={{marginTop: 10}}>
        {children}
      </Container>
    </>
  );
};

export default Layout;
