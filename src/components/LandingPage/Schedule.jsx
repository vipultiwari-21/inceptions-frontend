import React from "react";
import "./Schedule.css";


export default function Schedule() {
  const eventsArray = [
    {
      svgPath: `M567.663,0v190.423h64.679V0h-64.685H567.663z M303.553,57.225
      l-52.992,37.103l109.203,155.946l52.963-37.104L303.553,57.225z M896.439,57.225L787.268,213.171l52.971,37.104L949.44,94.328
      l-52.992-37.103H896.439z M599.989,242.524c-158.227,0-286.493,96.083-286.493,214.625l162.772,492.948h247.47l162.758-492.948
      c0-118.54-128.258-214.625-286.492-214.625H599.989z M85.465,299.673l-22.099,60.814l178.849,65.114l22.181-60.785L85.461,299.673
      H85.465z M1114.527,299.673l-178.936,65.148l22.106,60.792l178.936-65.125L1114.527,299.673z M255.756,577.681L71.856,627.007
      l16.686,62.431l183.9-49.255l-16.683-62.502H255.756z M944.236,577.681l-16.674,62.501l183.9,49.247l16.674-62.432l-183.9-49.318
      V577.681z M472.66,986.032v85.686h254.687v-85.673H472.661L472.66,986.032z M472.66,1114.314V1200h254.687v-85.672H472.661
      L472.66,1114.314z`,
      eventName: "SOLVEATHON",
      rounds: [
        {
          roundName: "Round 1",
          status: "Not Started",
          venue: "Updating Shortly",
          time: "MAR 3, 11:00 AM-1:30 PM",
        },
        {
          roundName: "Round 2",
          status: "Not Started",
          venue: "Updating Shortly",
          time: "MAR 3, 2:30 PM-3:30 PM",
        },
        {
          roundName: "Round 3",
          status: "Not Started",
          venue: "Updating Shortly",
          time: "MAR 4, 9:00 AM-01:30 PM",
        },
      ],
    },





  ];

  return (
    <div className="schedule-body">
      {eventsArray.map((event)=>{
        return <div className="container">
        <div
          style={{display:'flex',width:'100%',justifyContent:'center',alignItems:'center'}}
          
        >
          <div>
            
          </div>
          <div>
           <svg
              version="1.1"
              id="svg2"
              xmlns:dc="http://purl.org/dc/elements/1.1/"
              xmlns:cc="http://creativecommons.org/ns#"
              xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
              xmlns:svg="http://www.w3.org/2000/svg"
              xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
              xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
              sodipodi:docname="idea.svg"
              inkscape:version="0.48.4 r9939"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="100px"
              height="100px"
              viewBox="0 0 1200 1200"
              enableBackground="new 0 0 1200 1200"
              xmlSpace="preserve"
            >
              <sodipodi:namedview
                inkscape:cy="448"
                inkscape:cx="-67.796606"
                inkscape:zoom="0.26339286"
                showgrid="false"
                id="namedview3101"
                guidetolerance="10"
                gridtolerance="10"
                objecttolerance="10"
                borderopacity="1"
                bordercolor="#666666"
                pagecolor="#ffffff"
                inkscape:current-layer="svg2"
                inkscape:window-maximized="1"
                inkscape:window-y="24"
                inkscape:window-height="876"
                inkscape:window-width="1535"
                inkscape:pageshadow="2"
                inkscape:pageopacity="0"
                inkscape:window-x="65"
              ></sodipodi:namedview>
              <path
                fill="#d4af37"
                id="rect2989-0"
                inkscape:connector-curvature="0"
               d={event.svgPath}
              />
            </svg>
            <h1>SOLVEATHON</h1>
          </div>
        </div>

        <table className="responsive-table">
          <thead className="responsive-table__head">
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
          {event.rounds.map((round)=>{
            return <tr className="responsive-table__row">
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
          })}
       
        
          </tbody>
        </table>
      </div>
      })}
    </div>
  );
}
