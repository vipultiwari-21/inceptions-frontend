import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import Header from "../Sidebar/Header";
import Loading from "../../Loading";
import CustomCheckbox from "./CustomCheckbox";
import axios from "../../features/Interceptors/apiInterceptor";

function Payment() {
  const [hasPaid, sethasPaid] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);
  const [isRegistered, setIsRegistered] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [totalFees, setTotalFees] = useState("");
  const [selectedEvents, setSelectedEvents] = useState([]);

  const getTeamRegisteredDetails = async () => {
    try {
      const { data } = await axios.get("/team/get-team-of-current-user");
      if (data.message == "This user has not registered any teams") {
        setIsRegistered(false);
      } else {
        //console.log(data);
        setIsRegistered(true);
        getSelectedEventDetails();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const checkPaymentStatus = async () => {
    try {
      const { data } = await axios.get("/payment/is-paid");
      sethasPaid(data.isPaid);

      // setHasVerified(data.paymentData.isVerified)
      data.paymentData
        ? setIsVerified(data.paymentData.isVerified)
        : setIsVerified(false);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
    setPageLoading(false);
  };

  const getSelectedEventDetails = async () => {
    try {
      const { data } = await axios.get("/team/get-event-fees-of-team");
      //console.log(data)
      setTotalFees(data.totalFees);

      const events = await axios.get("/team/get-events-of-team");
      const isOpen = events.data.some((event) => {
        return event.eventIsOpenEvent;
      });

      const isGC = events.data.some((event) => {
        return !event.eventIsOpenEvent;
      });

      if (isOpen && isGC) {
        const OpenEvents = events.data.filter((event) => {
          // if(event.eventIsOpenEvent){
          //   selectedEvents.push(event.eventName)
          // }

          return event.eventIsOpenEvent;
        });

        const openEventsArray = OpenEvents.map((event) => event.eventName);
        console.log(openEventsArray);
        setSelectedEvents(openEventsArray);
        //setSelectedEvents([OpenEvents.map((event) => event.eventName)])
      } else if (isOpen && !isGC) {
        const OpenEvents = events.data.filter((event) => {
          // if(event.eventIsOpenEvent){
          //   selectedEvents.push(event.eventName)
          // }

          return event.eventIsOpenEvent;
        });

        setSelectedEvents(OpenEvents.map((event) => event.eventName));
      } else if (isGC && !isOpen) {
        setSelectedEvents(["Group Events"]);
      }

      // isOpen && isGC
      //   ? setSelectedEvents([
      //       "Group Event",
      //       "Solveathon",
      //       "Strike Force",
      //       "IoT",
      //     ])
      //   : isOpen && !isGC
      //   ? setSelectedEvents(
      //       events.data.filter((event) => {
      //         // if(event.eventIsOpenEvent){
      //         //   selectedEvents.push(event.eventName)
      //         // }

      //         return event.eventIsOpenEvent;
      //       })
      //     )
      //   : isGC && !isOpen
      //   ? setSelectedEvents(["Group Event"])
      //   : setRegisteredEventType("");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTeamRegisteredDetails();
    checkPaymentStatus();
  }, []);

  return !pageLoading ? (
    isRegistered ? (
      isVerified ? (
        <Box
          m="20px"
          className="flex  justify-center items-center flex-col"
          sx={{ height: "90vh" }}
        >
          <Header
            title="Payment Succesfull"
            subtitle="You have already paid!! Please contact us for any queries."
          />
        </Box>
      ) : hasPaid ? (
        <Box
          m="20px"
          className="flex  justify-center items-center flex-col"
          sx={{ height: "90vh" }}
        >
          <Header
            title="Verifying Payment"
            subtitle="We are verifying your payment ! thanks for your patience , you will recieve an email soon."
          />
        </Box>
      ) : (
        <Box
          m="20px"
          className="flex flex-col justify-center items-center h-full "
          sx={{ height: "100vh" }}
        >
          <Header
            title="Payment details"
            subtitle="Please verify selected events and proceed to pay!"
          />

          <Box className="w-full">
            <span className="event-header text-warning text-2xl">
              Total : ₹{totalFees ? totalFees : 0}
            </span>
          </Box>

          <Box className="w-full mt-8 text-2xl">
            <span className="event-header text-primary text-xxl font-bold">
              Events that you have selected!
            </span>
          </Box>

          <Box className="paymentDetailsContainer flex flex-col items-start  lg:flex-row my-5">
            {selectedEvents
              ? selectedEvents.map((event) => {
                  return (
                    <Box className="flex items-center justify-center mx-8">
                      <CustomCheckbox />
                      <span className="text-info font-bold mx-3 w-full">
                        {event}
                      </span>
                    </Box>
                  );
                })
              : null}
          </Box>

          <Box className="">
            <button className="btn btn-warning btn-outline">
              <a href="https://rzp.io/l/saPTXGGI" target="_blank">
                Proceed to Payment
              </a>
            </button>
          </Box>
        </Box>
      )
    ) : (
      <Box
        m="20px"
        sx={{ height: "70vh" }}
        className="flex  justify-center items-center flex-col"
      >
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
