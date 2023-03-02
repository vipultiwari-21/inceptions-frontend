import React from "react";
import "./Schedule.css";
import Solvathon from "../../../public/scheduleIcons/solvathon.svg";
import StrikeForce from "../../../public/scheduleIcons/strikeForce.svg";
import InfinityAndBeyond from "../../../public/scheduleIcons/iandb.svg";
import GenGeeks from "../../../public/scheduleIcons/gengeeks.svg";
import BigBang from "../../../public/scheduleIcons/bigBang.svg";
import Zest from "../../../public/scheduleIcons/zest.svg";
import Gravity from "../../../public/scheduleIcons/gravity.svg";
import Constellation from "../../../public/scheduleIcons/constellation.svg";
import NebulaX from "../../../public/scheduleIcons/nebulax.svg";
import MysteryEventX from "../../../public/scheduleIcons/EventX.svg";
import ScheduleNavbar from "./ScheduleNavbar";

export default function Schedule() {
  const eventsArray = [
    {
      id: "inaugration",
      svgPath: Solvathon,
      eventName: "EXCEPTIONS-2023 INAUGRATION",
      rounds: [
        {
          roundName: "Inaugration",
          status: "Not Started",
          venue: "IEM AUDITORIUM",
          time: "MAR 3, 09:00 AM-10:30 AM",
        },
      ],
    },
    {
      id: "solveathon",
      svgPath: Solvathon,
      eventName: "SOLVEATHON",
      rounds: [
        {
          roundName: "Round 1",
          status: "Not Started",
          venue: "AI/ML LAB 2",
          time: "MAR 3, 11:00 AM-1:30 PM",
        },
        {
          roundName: "LUNCH BREAK",
          status: "Not Started",
          venue: "BUS SHELTER",
          time: "MAR 3, 1:30 PM-2:30 PM",
        },
        {
          roundName: "Round 1 (Continued)",
          status: "Not Started",
          venue: "MCA LAB 8",
          time: "MAR 3, 02:30 PM-05:30 PM",
        },
      ],
    },

    {
      id: "strikeforce",
      svgPath: StrikeForce,
      eventName: "STRIKE FORCE",
      rounds: [
        {
          roundName: "Round 1",
          status: "Not Started",
          venue: "MCA LAB 2 and MCA LAB 3",
          time: "MAR 3, 11:00 AM-1:30 PM",
        },
        {
          roundName: "LUNCH BREAK",
          status: "Not Started",
          venue: "BUS SHELTER",
          time: "MAR 3, 1:30 PM-2:30 PM",
        },
        {
          roundName: "Round 2",
          status: "Not Started",
          venue: "MCA LAB 2 and MCA LAB 3",
          time: "MAR 3, 2:30 PM-5:30 PM",
        },
        {
          roundName: "Round 3",
          status: "Not Started",
          venue: "MCA LAB 2 and MCA LAB 3",
          time: "MAR 4, 9:00 AM-01:30 PM",
        },
      ],
    },

    {
      id: "infinityandbeyond",
      svgPath: InfinityAndBeyond,
      eventName: "INFINITY & BEYOND",
      rounds: [
        {
          roundName: "Round 1",
          status: "Not Started",
          venue: "MCA LAB 1",
          time: "MAR 3, 11:00 AM-1:30 PM",
        },
        {
          roundName: "LUNCH BREAK",
          status: "Not Started",
          venue: "BUS SHELTER",
          time: "MAR 3, 1:30 PM-2:30 PM",
        },
        {
          roundName: "Round 1 (Continued)",
          status: "Not Started",
          venue: "MCA LAB 1",
          time: "MAR 3, 2:30 PM-5:30 PM",
        },
        {
          roundName: "Round 2",
          status: "Not Started",
          venue: "MCA LAB 1",
          time: "MAR 4, 9:00 AM-01:30 PM",
        },
      ],
    },

    {
      id: "gravity",
      svgPath: Gravity,
      eventName: "GRAVITY",
      rounds: [
        {
          roundName: "Round 1",
          status: "Not Started",
          venue: "IEM AUDITORIUM",
          time: "MAR 3, 11:00 AM-12:00 PM",
        },
        {
          roundName: "Round 2",
          status: "Not Started",
          venue: "IEM AUDITORIUM",
          time: "MAR 3, 12:00 PM-1:30 PM",
        },
        {
          roundName: "LUNCH BREAK",
          status: "Not Started",
          venue: "BUS SHELTER",
          time: "MAR 3, 1:30 PM-2:30 PM",
        },
        {
          roundName: "Round 3",
          status: "Not Started",
          venue: "IEM AUDITORIUM",
          time: "MAR 3, 2:30 PM-4:30 PM",
        },
        {
          roundName: "Round 4",
          status: "Not Started",
          venue: "MCA QUADRANGLE",
          time: "MAR 3, 9:00 AM-11:00 AM",
        },
        {
          roundName: "Round 5",
          status: "Not Started",
          venue: "MCA SEMINAR HALL",
          time: "MAR 4, 12:00 PM-1:30 PM",
        },
      ],
    },

    {
      id: "bigbang",
      svgPath: BigBang,
      eventName: "BIG BANG",
      rounds: [
        {
          roundName: "Round 1",
          status: "Not Started",
          venue: "MCA SEMINAR HALL",
          time: "MAR 3, 11:00 AM-12:00 PM",
        },
        {
          roundName: "Round 2",
          status: "Not Started",
          venue: "MCA SEMINAR HALL",
          time: "MAR 3, 12:00 PM-1:30 PM",
        },
        {
          roundName: "LUNCH BREAK",
          status: "Not Started",
          venue: "BUS SHELTER",
          time: "MAR 3, 1:30 PM-2:30 PM",
        },
        {
          roundName: "Round 3",
          status: "Not Started",
          venue: "MCA SEMINAR HALL",
          time: "MAR 3, 2:30 PM-4:30 PM",
        },
        {
          roundName: "Round 4",
          status: "Not Started",
          venue: "MCA SEMINAR HALL",
          time: "MAR 4, 9:00 AM-10:30 AM",
        },
        {
          roundName: "Round 5",
          status: "Not Started",
          venue: "MCA SEMINAR HALL",
          time: "MAR 4, 10:30 AM-12:00 PM",
        },
      ],
    },
    {
      id: "gengeeks",
      svgPath: GenGeeks,
      eventName: "Gen-Geeks",
      rounds: [
        {
          roundName: "Round 1",
          status: "Not Started",
          venue: "MC210",
          time: "MAR 3, 11:00 AM-11:45 AM",
        },
        {
          roundName: "LUNCH BREAK",
          status: "Not Started",
          venue: "BUS SHELTER",
          time: "MAR 3, 1:30 PM-2:30 PM",
        },
        {
          roundName: "Round 2",
          status: "Not Started",
          venue: "MC210 and MC005",
          time: "MAR 3, 2:30 PM-4:30 PM",
        },
        {
          roundName: "Round 3",
          status: "Not Started",
          venue: "MC210",
          time: "MAR 4, 9:00 AM-11:00 AM",
        },
      ],
    },

    {
      id: "constellation",
      svgPath: Constellation,
      eventName: "CONSTELLATION",
      rounds: [
        {
          roundName: "Round 1",
          status: "Not Started",
          venue: "MC213",
          time: "MAR 3, 11:00 AM-11:45 AM",
        },
        {
          roundName: "LUNCH BREAK",
          status: "Not Started",
          venue: "BUS SHELTER",
          time: "MAR 3, 1:30 PM-2:30 PM",
        },
        {
          roundName: "Round 2",
          status: "Not Started",
          venue: "MC213",
          time: "MAR 3, 2:30 PM-4:30 PM",
        },
        {
          roundName: "Round 3",
          status: "Not Started",
          venue: "MC213",
          time: "MAR 4, 9:00 AM-11:00 AM",
        },
      ],
    },

    {
      id: "nebulax",
      svgPath: NebulaX,
      eventName: "NEBULA X",
      rounds: [
        {
          roundName: "Round 1",
          status: "Not Started",
          venue: "AI/ML LAB 1",
          time: "MAR 3, 11:00 AM-11:30 AM",
        },
        {
          roundName: "Round 2",
          status: "Not Started",
          venue: "AI/ML LAB 1",
          time: "MAR 3, 11:30 AM-1:30 PM",
        },
        {
          roundName: "LUNCH BREAK",
          status: "Not Started",
          venue: "BUS SHELTER",
          time: "MAR 3, 1:30 PM-2:30 PM",
        },
        {
          roundName: "Round 3",
          status: "Not Started",
          venue: "AI/ML LAB 1",
          time: "MAR 4, 10:00 AM-12:00 PM",
        },
      ],
    },

    {
      id: "zest",
      svgPath: Zest,
      eventName: "ZEST",
      rounds: [
        {
          roundName: "Round 1",
          status: "Not Started",
          venue: "MC005",
          time: "MAR 3, 11:30 AM-1:30 PM",
        },
        {
          roundName: "LUNCH BREAK",
          status: "Not Started",
          venue: "BUS SHELTER",
          time: "MAR 3, 1:30 PM-2:30 PM",
        },
        {
          roundName: "Round 2",
          status: "Not Started",
          venue: "MC005",
          time: "MAR 4, 11:00 AM-1:30 PM",
        },
      ],
    },

    {
      id: "mysteryevent",
      svgPath: MysteryEventX,
      eventName: "MYSTERY EVENT",
      rounds: [
        {
          roundName: "Round X",
          status: "Not Started",
          venue: "AMPHITHEATRE",
          break: "01:30 PM-02:30 PM",
          time: "MAR 3, 4:30 PM-5:30 PM",
        },
      ],
    },

    {
      id: "valedictory",
      svgPath: Solvathon,
      eventName: "EXCEPTIONS-2023 VALEDICTORY",
      rounds: [
        {
          roundName: "Inaugration",
          status: "Not Started",
          venue: "IEM AUDITORIUM",
          time: "MAR 4, 02:30 PM-04:30 PM",
        },
      ],
    },

    {
      id: "dj",
      svgPath: Solvathon,
      eventName: "EXCEPTIONS-2023 DJ",
      rounds: [
        {
          roundName: "DJ",
          status: "Not Started",
          venue: "BUS SHELTER",
          time: "MAR 4, 06:00 PM-09:00 PM",
        },
      ],
    },
  ];
  return (
    <div className="schedule-body">
      <ScheduleNavbar style={{ marginBottom: "5rem" }} />
      {eventsArray.map((event) => {
        return (
          <div
            className="container"
            key={event.id}
            id={event.id}
            style={{ marginTop: "5rem" }}
            // style={{ padding: "3rem" }}
          >
            <div
              style={{
                display: "flex",
                width: "100%",
                // margin: "5rem 0",
                marginBottom: "1rem",
                justifyContent: "space-around",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              {/* <div>
                <img
                  src={event.svgPath}
                  alt={event.eventName}
                  style={{ width: "300px", padding: "20px" }}
                />
              </div> */}
              <div>
                <h1 className="text-primary text-xl font-bold">
                  {event.eventName}
                </h1>
              </div>
            </div>

            <table className="responsive-table">
              <thead className="responsive-table__head text-neutral">
                <tr className="responsive-table__row">
                  <th className="responsive-table__head__title responsive-table__head__title--name">
                    Rounds
                  </th>
                  <th className="responsive-table__head__title responsive-table__head__title--status">
                    Status
                  </th>
                  <th className="responsive-table__head__title responsive-table__head__title--types">
                    Venue
                  </th>
                  <th className="responsive-table__head__title responsive-table__head__title--update">
                    Time
                  </th>
                </tr>
              </thead>

              <tbody className="responsive-table__body">
                {event.rounds.map((round) => {
                  return (
                    <tr className="responsive-table__row">
                      <td className="responsive-table__body__text responsive-table__body__text--name">
                        {round.roundName}
                      </td>
                      <td className="responsive-table__body__text responsive-table__body__text--status">
                        <span className="status-indicator status-indicator--new"></span>
                        {round.status}
                      </td>
                      <td className="responsive-table__body__text responsive-table__body__text--types">
                        {round.venue}{" "}
                      </td>
                      <td className="responsive-table__body__text responsive-table__body__text--update">
                        {" "}
                        {round.time}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
}
