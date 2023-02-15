import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import Header from "../Sidebar/Header";
import Loading from "../../Loading";

function Payment() {
  const [hasPaid, sethasPaid] = useState(false);
  const [pageLoading, setPageLoading] = useState(false);
  const [isRegistered, setIsRegistered] = useState(true);


  const checkPaymentStatus=async()=>{
    try{
      const {data}= await axios.get('/payment/is-paid')
      sethasPaid(data.isPaid)
    }catch(err){
      console.log(err)
    }
  }

  return !pageLoading ? (
    isRegistered ? (
      hasPaid ? (
        <Box m="20px">
          <Header title="Payment Succesfull" subtitle="You have already paid !" />
        </Box>
      ) : (
        <Box m="20px">
          <Header title="Payment details" subtitle="Please verify selected events and proceed to pay" />

          <Box className="flex flex-col"></Box>

        </Box>
      )
    ) : (
      <Box m="20px">
        <Header
          title="Pending registration!!!"
          subtitle="Please register your team name and event type in the Add team section"
        />
      </Box>
    )
  ) : (
    <Loading />
  );
}

export default Payment;
