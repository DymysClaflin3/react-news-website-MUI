import { AppBar, Toolbar, Typography, Container } from "@mui/material";

const Layout = ({ header: { title, action }, children }) => {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography variant="h5" textAlign='center'>{title}</Typography>
          <div style={{flexGrow: 1}}></div>
          {action}
        </Toolbar>
      </AppBar>
      <Container sx={{marginTop: '70px'}}>
        {children}
      </Container>
    </>
  );
};

export default Layout;
