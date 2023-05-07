import { TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useContext } from "react";
import { FileAboutContext } from "../../App";
import BaseLayout from "../template/BaseLayout";

const UserPage: React.FC = () => {
  const { state: FileAbout } = useContext(FileAboutContext);

  return <BaseLayout></BaseLayout>;
};

export default UserPage;
