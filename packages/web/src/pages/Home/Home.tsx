import React from "react";
import { Box, Button, Stack, TextField } from "@mui/material";
import { Header } from "src/components";
import { format } from "date-fns";

export const Home: React.FC = () => {
  const today = format(new Date(), "yyyy-MM-dd");
  return (
    <>
      <Header />
      <Box mt={2} mx={1}>
        <Stack spacing={1}>
          <TextField required label="日付" type="date" defaultValue={today} />
          <TextField label="テキスト" />
          <TextField label="金額" type="number" />
        </Stack>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button>登録</Button>
        </Box>
      </Box>
    </>
  );
};
