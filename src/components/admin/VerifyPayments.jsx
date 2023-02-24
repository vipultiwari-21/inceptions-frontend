import React from "react";
import { Box } from "@mui/system";
import Header from "../Sidebar/Header";

function VerifyPayments() {
  return (
    <Box
      m="20px"
      sx={{
        height: "100vh",
        overflow: "hidden",
      }}
      className="flex justify-center items-center"
    >
      <Header
        title="Verify Payments"
        subtitle="Have a look at screenshot uploaded by participant and verify their payment"
      />

      <Box></Box>
    </Box>
  );
}

export default VerifyPayments;
