import React from "react";
import { Snackbar, Alert } from "@mui/material";

const CustomizedSnackbar = ({ open, setOpen }) => {
  const handleClose = (e, reason) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
    >
      <Alert
        onClose={handleClose}
        severity="success"
        sx={{ width: "100%" }}
        elevation={6}
        variant="filled"
      >
        Transaction succesfully created!
      </Alert>
    </Snackbar>
  );
};

export default CustomizedSnackbar;
