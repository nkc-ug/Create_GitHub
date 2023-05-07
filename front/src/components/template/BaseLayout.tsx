import { Box } from "@mui/material";
import NavBar from "../organism/NavBar";
import { FC } from "react";

const BaseLayout: FC = (props) => {
  const { children } = props;
  return (
    <Box sx={{ bgcolor: "primary.light" }}>
      <NavBar />
      {children}
      <Box sx={{ height: "500px" }}></Box>
    </Box>
  );
};

export default BaseLayout;
