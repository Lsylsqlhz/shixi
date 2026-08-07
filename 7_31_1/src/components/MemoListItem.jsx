import { Divider, ListItem, ListItemText } from "@mui/material";
import React from "react";
function MemoListItem({ memo }) {
  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={memo.title}
          secondary={<React.Fragment>{memo.body}</React.Fragment>}
        />
      </ListItem>
      <Divider component="li" />
    </>
  );
}

export default MemoListItem;
