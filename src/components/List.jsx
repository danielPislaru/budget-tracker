import React, { useContext } from "react";

import {
  List as MUIList,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  ListItemSecondaryAction,
  IconButton,
  Slide,
} from "@mui/material";

import { Delete, MoneyOff } from "@mui/icons-material";

import { ExpenseTrackerContext } from "../context/context";

const List = () => {
  const { deleteTransaction, transactions } = useContext(ExpenseTrackerContext);
  return (
    <MUIList dense={false} sx={{ maxHeight: "200px", overflowY: "auto" }}>
      {transactions?.map((transaction) => (
        <Slide
          direction="down"
          in
          mountOnEnter
          unmountOnExit
          key={transaction.id}
        >
          <ListItem>
            <ListItemAvatar>
              <Avatar
                sx={{
                  backgroundColor:
                    transaction.type === "Income" ? "#00a389" : "#f0386b",
                }}
              >
                <MoneyOff />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={transaction.category}
              secondary={`$${transaction.amount} - ${transaction.date}`}
            />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => {
                  deleteTransaction(transaction.id);
                }}
              >
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </MUIList>
  );
};

export default List;
