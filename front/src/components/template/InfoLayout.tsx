import { Box, Stack } from "@mui/material";
import { TsxChildType } from "../../util/tsType";
import BaseLayout from "./BaseLayout";

const InfoLayout: React.FC<TsxChildType> = (props) => {
  const { children } = props;
  return (
    <BaseLayout>
      <Stack
        justifyContent='center'
        direction='row'
        sx={{ mt: 8 }}
      >
        <Box sx={{ mx: 3, p: 8, borderRadius: 2, bgcolor: "secondary.main", boxShadow: 1 }}>
          {children}
        </Box>
      </Stack>
    </BaseLayout>
  );
};

export default InfoLayout;
