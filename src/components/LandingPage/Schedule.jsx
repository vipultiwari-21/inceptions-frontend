import React from "react";
import "./Schedule.css";


export default function Schedule() {
 

const eventsArray=
[
   
{
    svgPath: ``,
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


  
    {
      svgPath: ``,
      eventName: "STRIKE FORCE",
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

   
    {
        svgPath: ``,
        eventName: "INFINITY & BEYOND",
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

    
      {
        svgPath: ``,
        eventName: "Gen-Geeks",
        rounds: [
          {
            roundName: "Round 1",
            status: "Not Started",
            venue: "Updating Shortly",
            time: "MAR 3, 11:00 AM-11:45 AM<",
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
            time: "MAR 4, 9:00 AM-11:00 AM",
          },
        ],
      },

     
      {
        svgPath: `M18 18v29.75l36.09 31.578c13.506-3.722 27.044-6.596 40.193-8.146L47.75 18zm89.25 0l34.172 54.676c19.488 4.303 38.114 12.753 55.457 25.668L166.75 18zm120.656 0l28.092 129.424S278.068 45.746 284.092 18zm117.344 0l-30.13 80.344c17.344-12.915 35.97-21.365 55.458-25.668L404.75 18zm119 0l-46.533 53.182c13.15 1.55 26.687 4.424 40.193 8.146L494 47.75V18zM118.736 88.04c-1.488-.026-2.997-.025-4.525.003-28.57.524-63.666 10.44-96.21 22.7v143.114c2.86-7.516 7.632-14.432 13.44-20.22 7.7-7.675 17.647-13.693 28.706-14.117.79-.03 1.586-.032 2.387-.004.8.028 1.607.086 2.418.175 7.908.875 13.682 5.74 18.136 10.994 4.454 5.252 7.902 11.385 10.74 17.312 5.676 11.853 8.844 23.21 8.844 23.21l-17.326 4.878s-2.89-10.16-7.754-20.315c-2.432-5.078-5.373-10.072-8.233-13.444-2.86-3.372-5.325-4.627-6.382-4.744-5.24-.58-12.662 2.66-18.83 8.805-6.165 6.145-10.49 14.778-10.98 20.923-1.776 22.332 7.533 36.257 18.413 45.745 5.44 4.743 11.306 8.183 16.06 10.357 2.375 1.087 4.48 1.858 6.012 2.32 1.534.462 2.868.52 1.875.512l-.146 18c-2.76-.022-4.48-.542-6.92-1.277-2.44-.736-5.233-1.78-8.308-3.186-6.148-2.81-13.41-7.06-20.402-13.16-8.955-7.808-17.41-18.972-21.75-33.386V427.39c24.102 26.71 51.126 51.064 81.078 61.965 12.463 4.536 28.87 3.676 40.942-2.03.215-.717.515-2.225.86-4.427.74-4.75 2.008-13.206 9.718-18.332 6.447-4.286 12.678-4.82 15.756-5.78-3.493-7.43-10.868-26.54-6.184-48.735 3.417-16.19 15.896-29.056 30.18-35.605 7.14-3.274 14.995-4.98 22.87-3.648 3.937.667 7.822 2.23 11.307 4.615 3.25-4.3 6.502-8.302 8.506-11.1l3.62-5.054 4.005 1.594c4.42 1.172 6.194 1.58 6.215 1.703.18-.15.412-.382.828-.793.182-.354 2.685-9.4.513-20.692-2.187-11.373-5.665-25.125-15.215-37.41-5.235.462-10.274.937-14.357 1.643-5.597.966-9.288 2.814-9.607 3.125l-12.566-12.887c3.454-3.367 7.37-5.176 11.527-6.354-5.143-1.766-10.087-2.734-15.598-2.49l-.792-17.983c15.547-.686 27.433 5.062 39.65 10.902-7.522-7.768-13.75-15.06-19.606-20.476-7.838-7.25-14.08-10.976-23.085-10.95-1.806.007-4.95 2.097-9.334 6.88-4.386 4.784-8.75 11.637-17.673 14.957l-6.278-16.87c1.232-.46 5.672-4.788 10.68-10.25 5.006-5.463 11.842-12.683 22.548-12.716 14.558-.043 26.002 7.077 35.36 15.732 5.22 4.825 10.085 10.18 15.134 15.62 5.293-23.545 9.614-46.54 8.076-69.415-31.038-64.935-71.1-95.532-115.53-103.06-4.063-.613-8.346-.945-12.812-1.026zm274.528 0c-4.466.082-8.75.414-12.813 1.026-44.428 7.53-84.49 38.126-115.528 103.06-1.538 22.876 2.783 45.87 8.076 69.417 5.05-5.44 9.915-10.796 15.133-15.62 9.36-8.656 20.804-15.776 35.362-15.732 10.706.034 17.542 7.254 22.55 12.716 5.006 5.463 9.446 9.79 10.68 10.25l-6.28 16.87c-8.92-3.32-13.286-10.172-17.67-14.956-4.385-4.783-7.53-6.873-9.334-6.88-9.006-.026-15.248 3.7-23.086 10.95-5.856 5.414-12.084 12.707-19.606 20.475 12.217-5.84 24.103-11.588 39.65-10.902l-.792 17.982c-5.51-.243-10.455.725-15.598 2.49 4.157 1.18 8.073 2.988 11.527 6.356l-12.566 12.888c-.32-.31-4.01-2.158-9.608-3.125-4.084-.705-9.123-1.18-14.358-1.643-9.55 12.285-13.028 26.037-15.215 37.41-2.172 11.293.33 20.338.512 20.692.415.41.646.642.827.793.02-.122 1.794-.53 6.215-1.703l4.006-1.594 3.62 5.053c2.003 2.8 5.255 6.802 8.505 11.102 3.485-2.384 7.37-3.948 11.308-4.615 7.875-1.333 15.73.374 22.87 3.648 14.284 6.55 26.763 19.415 30.18 35.606 4.684 22.195-2.69 41.306-6.184 48.735 3.078.96 9.31 1.495 15.756 5.78 7.71 5.127 8.978 13.582 9.72 18.333.343 2.202.643 3.71.858 4.428 12.073 5.705 28.48 6.565 40.942 2.03 29.952-10.902 56.976-35.257 81.078-61.965V293.235c-4.34 14.414-12.795 25.578-21.75 33.387-6.993 6.1-14.254 10.35-20.402 13.16-3.075 1.407-5.867 2.45-8.307 3.187-2.44.735-4.16 1.255-6.92 1.277l-.145-18c-.993.008.34-.05 1.875-.512 1.533-.462 3.637-1.233 6.013-2.32 4.753-2.174 10.62-5.613 16.06-10.357 10.88-9.488 20.188-23.413 18.41-45.744-.488-6.145-4.813-14.778-10.98-20.923-6.166-6.146-13.59-9.384-18.828-8.805-1.057.117-3.523 1.372-6.382 4.744-2.86 3.372-5.8 8.366-8.233 13.444-4.863 10.155-7.754 20.314-7.754 20.314l-17.326-4.88s3.168-11.355 8.844-23.208c2.838-5.927 6.286-12.06 10.74-17.312 4.454-5.253 10.228-10.12 18.135-10.993.81-.088 1.616-.146 2.417-.174.8-.03 1.597-.027 2.387.004 11.06.424 21.006 6.443 28.707 14.117 5.808 5.788 10.58 12.705 13.44 20.22V110.743c-32.544-12.26-67.64-22.175-96.21-22.7-1.53-.027-3.038-.028-4.526 0zM207.568 388.366c-2.844.06-6.23.844-9.716 2.442-.61.28-1.218.587-1.823.914l15.636 9.07s2.62-4.082 5.238-8.237c-1.925-2.575-3.95-3.546-6.69-4.01-.81-.137-1.698-.198-2.646-.178zm96.864 0c-.948-.02-1.836.04-2.647.178-2.738.464-4.764 1.435-6.69 4.01 2.62 4.155 5.24 8.238 5.24 8.238l15.636-9.07c-.604-.326-1.212-.634-1.822-.913-3.485-1.598-6.872-2.382-9.716-2.442zM176.795 427.13c.727 14.314 6.52 25.452 6.945 26.253 4.71-1.988 8.2-3.552 8.26-3.867.104-.54-7.425-11.492-15.205-22.387zm158.41 0c-7.78 10.894-15.31 21.847-15.205 22.386.06.315 3.55 1.88 8.26 3.867.425-.8 6.218-11.94 6.945-26.254zM18 454.503V494h49.19C49.272 483.442 32.927 469.57 18 454.504zm476 0c-14.928 15.066-31.273 28.938-49.19 39.496H494z`,
        eventName: "BIG BANG",
        rounds: [
          {
            roundName: "Round 1",
            status: "Not Started",
            venue: "Updating Shortly",
            time: "MAR 3, 11:00 AM-12:00 PM",
          },
          {
            roundName: "Round 2",
            status: "Not Started",
            venue: "Updating Shortly",
            time: "MAR 3, 12:00 PM-1:30 PM",
          },
          {
            roundName: "Round 3",
            status: "Not Started",
            venue: "Updating Shortly",
            time: "MAR 3, 2:30 PM-4:30 PM",
          },
          {
            roundName: "Round 4",
            status: "Not Started",
            venue: "Updating Shortly",
            time: "MAR 4, 9:00 AM-10:30 AM",
          },
          {
            roundName: "Round 5",
            status: "Not Started",
            venue: "Updating Shortly",
            time: "MAR 4, 10:30 AM-12:00 PM",
          }
        ],
      },

     
      {
        svgPath: ``,
        eventName: "ZEST",
        rounds: [
          {
            roundName: "Round 1",
            status: "Not Started",
            venue: "Updating Shortly",
            time: "MAR 3, 11:45 AM-1:30 PM",
          },
          {
            roundName: "Round 2",
            status: "Not Started",
            venue: "Updating Shortly",
            time: "MAR 4, 11:00 AM-1:30 PM",
          }
        ],
    },

    
    {
        svgPath: ``,
        eventName: "GRAVITY",
        rounds: [
            {
                roundName: "Pre Round",
                status: "Not Started",
                venue: "Updating Shortly",
                time: "MAR 3, 11:00 AM-12:00 PM",
              },
          {
            roundName: "Round 1",
            status: "Not Started",
            venue: "Updating Shortly",
            time: "MAR 3, 12:00 PM-1:30 PM",
          },
          {
            roundName: "Round 2",
            status: "Not Started",
            venue: "Updating Shortly",
            time: "MAR 3, 2:30 PM-4:30 PM",
          },
          {
            roundName: "Round 3",
            status: "Not Started",
            venue: "Updating Shortly",
            time: "MAR 3, 9:00 AM-10:30 AM",
          },
          {
            roundName: "Round 4",
            status: "Not Started",
            venue: "Updating Shortly",
            time: "MAR 4, 12:30 PM-1:30 PM",
          }
        ],
    },


    {
        svgPath: ``,
        eventName: "CONSTELLATION",
        rounds: [
          {
            roundName: "Round 1",
            status: "Not Started",
            venue: "Updating Shortly",
            time: "MAR 3, 11:00 AM-11:45 AM",
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
            time: "MAR 4, 9:00 AM-11:00 AM",
          }
        ],
    },

    {
        svgPath: ``,
        eventName: "NEBULA X",
        rounds: [
          {
            roundName: "Round 1",
            status: "Not Started",
            venue: "Updating Shortly",
            time: "MAR 3, 11:00 AM-11:45 AM",
          },
          {
            roundName: "Round 2",
            status: "Not Started",
            venue: "Updating Shortly",
            time: "MAR 3, 11:45 AM-1:30 PM",
          },
          {
            roundName: "Round 3",
            status: "Not Started",
            venue: "Updating Shortly",
            time: "MAR 4, 10:00 AM-1:00 PM",
          }
        ],
    },

   
    {
        svgPath: `M355.102 21.097c-33.682.164-64.173 18.585-74.615 50.5 21.357-.79 23.203 53.922 23.203 53.922l41.619 6.262c-13.41 12.963-50.025 5.967-50.025 5.967-17.14 19.182-33.124 40.966-47.758 57.578-15.952 18.127-35.2 38.103-57.018 60.086-6.79 6.823 41.594-9.821 34.342-2.604-24.567 12.751-42.297 16.097-61.764 32.069-31.312 25.674-62.853 60.71-81.146 79.431-7.711 7.91-44.362 37.674 20.469 34.74 2.404 7.52-1.621 9.456-7.493 15.293-4.327 4.303-18.082.283-22.263 2.828-22.172 35.055-17.246 37.975-27.43 58.047-4.252 11.635 41.68-14.404 64.305-34.18 13.974-7.58 25.147-21.652 35.002-17.202 43.11 18.984 129.826 35.53 141.328 27.619 18.368-12.646-10.321-46.343 3.832-97.912 23.47 5.817 43.825 13.657 66.767 11.459-1.581 49.307 3.56 55.306-3.888 104.777l59.129 21.127 1.91-13.809-33.815-22.478c14.568-50.659 16.809-72.578 15.227-121.719-.16-5.372-45.168-24.325-74.492-33.133l18.593-30.412c30.393-44.788 124.141-62.055 127.932-88.258-13.02-19.676 3.022-27.384-25.092-21.912-6.295 1.318-13.771 24.346-18.023 27.213-7.843 5.276-40.655 24.477-51.951 18.377-1.9-1.026 7.246-33.441 6.85-44.78-.116-3.205-1.19-6.625-2.866-10.001.185-.64 15.24-52.482 54.809-94.016-43.978 25.134-65.332 79.925-65.354 79.98-2.207-2.134-4.476-3.983-6.639-5.423-1.916-14.7-4.819-73.02 68.598-78.776-21.427-21.177-47.704-30.78-72.283-30.66z`,
        eventName: "MYSTERY EVENT 'X'",
        rounds: [
          {
            roundName: "Round X",
            status: "Not Started",
            venue: "Updating Shortly",
            time: "MAR 3, 4:30 PM-5:30 PM",
          }
        ],
    },

]
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
            <h1>{event.eventName}</h1>
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
