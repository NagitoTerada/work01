import { AppBar, Toolbar, Typography } from "@mui/material";

export const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography>タイトル</Typography>
      </Toolbar>
    </AppBar>
  );
};
