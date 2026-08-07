import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import MemoListItem from "./MemoListItem";

export default function MemoList() {
  const memoList = [
    {
      id: 1,
      title: "Brunch this weekend?",
      body: "I'll be in your neighborhood doing errands this weekend. Do you want to grab brunch?",
    },
    {
      id: 2,
      title: "Birthday gift",
      body: "Have any ideas about what we should get Heidi for her birthday?",
    },
    {
      id: 3,
      title: "Recipe to try",
      body: "We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
    },
  ];

  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {memoList.map((memo) => (
        <MemoListItem memo={memo} key={memo.id} />
      ))}
    </List>
  );
}
