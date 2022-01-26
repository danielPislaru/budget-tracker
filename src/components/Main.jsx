import React, { useContext } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  Divider,
} from "@mui/material";

import { ExpenseTrackerContext } from "../context/context";

import Form from "./Form";
import List from "./List";

const Main = () => {
  const { balance } = useContext(ExpenseTrackerContext);
  return (
    <Card>
      <CardHeader
        title="Expense Tracker"
        subheader="Powered by JavascriptMastery"
      />
      <CardContent>
        <Typography align="center" variant="h5">
          Total balance:{" "}
          <Typography variant="span" sx={{ fontWeight: "bold" }}>
            ${balance}
          </Typography>
        </Typography>

        <Divider />
        <Form />
      </CardContent>
      <Divider />

      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Main;
