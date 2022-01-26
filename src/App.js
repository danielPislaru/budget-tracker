import { Grid } from "@mui/material";
import Details from "./components/Details";
import Main from "./components/Main";

function App() {
  return (
    <Grid
      container
      spacing={0}
      className="App"
      alignItems="center"
      justifyContent="center"
      sx={{
        height: "100vh",
        "> * ": { p: 2 },
      }}
    >
      <Grid item xs={12} md={4}>
        <Details title="Income" />
      </Grid>
      <Grid item xs={12} md={4}>
        <Main />
      </Grid>
      <Grid item xs={12} md={4}>
        <Details title="Expenses" />
      </Grid>
    </Grid>
  );
}

export default App;
