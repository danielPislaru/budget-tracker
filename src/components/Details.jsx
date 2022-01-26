import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Divider,
} from "@mui/material";

import useTransactions from "../useTransactions";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

const Details = ({ title }) => {
  const { total, chartData } = useTransactions(title);
  return (
    <Card
      sx={{
        border: "none",
        borderBottom: "10px solid",
        borderColor: title === "Expenses" ? "#f0386b" : "#00a389",
        backgroundColor: "neutral.main",
      }}
    >
      <CardContent>
        <Typography variant="h6" color="neutral.dark">
          {title}
        </Typography>
        <Typography
          variant="h4"
          align="center"
          sx={{ mb: 2, fontWeight: "bold" }}
        >
          ${total}
        </Typography>
        <Divider />
        <Doughnut data={chartData} />
      </CardContent>
    </Card>
  );
};

export default Details;
