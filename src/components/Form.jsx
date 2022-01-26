import React, { useState, useContext } from "react";
import {
  Grid,
  TextField,
  Typography,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

import { ExpenseTrackerContext } from "../context/context";
import CustomizedSnackbar from "./Snackbar";

import { incomeCategories, expenseCategories } from "../constants/categories";

import { v4 as uuidv4 } from "uuid";
import formatDate from "../utils/formatDate";

const initialState = {
  amount: "",
  category: "",
  type: "Income",
  date: formatDate(new Date()),
};

const Form = () => {
  const { addTransaction } = useContext(ExpenseTrackerContext);
  const [formData, setFormData] = useState(initialState);
  const [open, setOpen] = useState(false);

  const selectedCategories =
    formData.type === "Income" ? incomeCategories : expenseCategories;

  const createTransaction = () => {
    const transaction = {
      ...formData,
      amount: Number(formData.amount),
      id: uuidv4(),
    };

    setOpen(true);
    addTransaction(transaction);
    setFormData(initialState);
  };

  console.log(formData);
  return (
    <Grid container spacing={2}>
      <CustomizedSnackbar open={open} setOpen={setOpen} />
      <Grid item xs={12}>
        <Typography variant="subtitle2" gutterBottom align="center">
          ...
        </Typography>
      </Grid>
      <Grid item xs={12} lg={6}>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select
            label="Type"
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          >
            <MenuItem value="Income">Income</MenuItem>
            <MenuItem value="Expenses">Expenses</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} lg={6}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select
            label="Category"
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
          >
            {selectedCategories?.map((category) => (
              <MenuItem value={category.type} key={category.type}>
                {category.type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} lg={6}>
        <TextField
          size="small"
          type="number"
          label="Amount"
          fullWidth
          value={formData.amount}
          onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
        />
      </Grid>
      <Grid item xs={12} lg={6}>
        <TextField
          size="small"
          type="date"
          fullWidth
          value={formData?.date}
          onChange={(e) =>
            setFormData({
              ...formData,
              date: formatDate(e.target.value),
            })
          }
        />
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="outlined"
          color="primary"
          fullWidth
          onClick={createTransaction}
        >
          Create
        </Button>
      </Grid>
    </Grid>
  );
};

export default Form;
