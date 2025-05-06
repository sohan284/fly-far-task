import { Box, Button, Typography } from "@mui/material";
import airline from "../../assets/airline.png";
import ErrorIcon from "@mui/icons-material/Error";
import LuggageIcon from "@mui/icons-material/Luggage";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
interface Flight {
  carrierName: string;
  carrier: string;
  cityCount: {
    departureCityCode: string;
    departureTime: string;
    departureCityName: string;
    totalFlightDuration: string;
    hiddenStops?: string[];
    arrivalCityCode: string;
    arrivalTime: string;
    arrivalCityName: string;
  }[][];
  isRefundable: string;
  baggage: {
    baggage: string;
  }[][];
  totalBasePrice: number;
}

const FlightCard = ({ flight }: { flight: Flight }) => {
  const flightCity = flight.cityCount[0][0];
  return (
    <Box
      sx={{
        marginTop: 3,
        display: "grid",
        gridTemplateColumns: "repeat(8 , 1fr)",
        gap: 2,
        backgroundColor: "white",
        borderRadius: "5px",
        padding: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          gridColumn: "span 2",
        }}
      >
        <img src={airline} alt="" width={57} />
        <Box>
          <Typography sx={{ fontSize: "17px", color: "#333333" }}>
            {flight?.carrierName}
          </Typography>
          <Typography sx={{ fontSize: "12px", color: "#E34825" }}>
            {flight?.carrier}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 2,
          gridColumn: "span 3",
        }}
      >
        <Box>
          <Typography
            variant="body2"
            sx={{
              fontSize: "24px",
              color: "#333333",
              fontWeight: "500",
              textAlign: "center",
            }}
          >
            {flightCity?.departureCityCode}
          </Typography>
          <Box sx={{ color: "#E34825", display: "flex", fontSize: "13px",justifyContent: "center", alignItems: "center" }}>
            <Typography
              style={{ color: "#E34825", display: "inline", fontSize: "13px" }}
            >
              {flightCity?.departureTime.slice(0, 5)},
            </Typography>{" "}
            <Typography
              style={{ color: "gray", display: "inline", fontSize: "13px" }}
            >
              {flightCity?.departureCityName}
            </Typography>{" "}
          </Box>
        </Box>
        <Box
          sx={{
            gridColumn: "span 2",

            textAlign: "center",
            fontSize: "12px",
            color: "#A3A1A1",
          }}
        >
          {/* Time */}
          <Typography variant="body2">
            {flightCity?.totalFlightDuration}
          </Typography>
          {/* Line with dots */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                height: "11px",
                width: "11px",
                backgroundColor: "#E34825",
                borderRadius: "50%",
              }}
            />
            <Box
              sx={{
                height: "2.8px",
                backgroundColor: "#E34825",
                flex: 1,
              }}
            />
            <Box
              sx={{
                height: "11px",
                width: "11px",
                backgroundColor: "#E34825",
                borderRadius: "50%",
              }}
            />
          </Box>
          {/* Stops */}
          <Typography variant="body2">{flightCity?.hiddenStops?.length ? flightCity?.hiddenStops : "No Stop" }</Typography>
        </Box>
        <Box>
          <Typography
            variant="body2"
            sx={{
              fontSize: "24px",
              color: "#333333",
              fontWeight: "500",
              textAlign: "center",
            }}
          >
            {flightCity?.arrivalCityCode}
          </Typography>
          <Box
            sx={{
              color: "#E34825",
              display: "flex",
              flexWrap: "wrap",
              fontSize: "13px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              style={{ color: "#E34825", display: "inline", fontSize: "13px" }}
            >
              {flightCity?.arrivalTime.slice(0, 5)},
            </Typography>{" "}
            <Typography
              style={{ color: "gray", display: "inline", fontSize: "13px" }}
            >
              {flightCity?.arrivalCityName}
            </Typography>{" "}
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "grid",
        }}
      >
        <Typography
          sx={{
            fontSize: "12px",
            color: "#E34825",
            display: "flex",
            gap: 1,
            alignItems: "center",
            justifyContent: "start",
          }}
        >
          <ErrorIcon sx={{ color: "#E34825", fontSize: "20px"  }} />
          <Typography sx={{ fontSize: "12px", color: "#E34825",textWrap:'nowrap' ,overflow:'clip' }}>

          {flight?.isRefundable}
          </Typography>
        </Typography>
        <Typography
          sx={{
            fontSize: "12px",
            color: "#777777",
            display: "flex",
            gap: 1,
            alignItems: "center",
            justifyContent: "start",
          }}
        >
          <LuggageIcon sx={{ color: "#777777", fontSize: "20px" }} />
          Baggage {flight?.baggage[0][0]?.baggage}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
        }}
      >
        <Typography
          sx={{
            fontSize: "12px",
            color: "#777777",
            display: "flex",
            gap: 1,
            fontWeight: "bold",
            alignItems: "center",
          }}
        >
          <ErrorIcon sx={{ color: "#777777", fontSize: "20px" }} />
          Gross Fare
        </Typography>
        <Typography
          sx={{
            fontSize: "24px",
            color: "#E34825",
            display: "flex",
            gap: 1,
            alignItems: "center",
          }}
        >
          ৳ {flight?.totalBasePrice}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
        }}
      >
        <Button
          sx={{
            fontSize: "12px",
            color: "white",
            display: "flex",
            gap: 1,
            paddingX: 2,
            paddingY: 1,
            borderRadius: "5px",
            fontWeight: "bold",
            alignItems: "center",
            backgroundColor: "#333333",
          }}
        >
          Book Now
        </Button>
        <Typography
          sx={{
            fontSize: "12px",
            color: "#777777",
            display: "flex",
            cursor: "pointer",
            alignItems: "center",
            ml: 3,
          }}
        >
          Flight Details
          <ArrowDropDownIcon sx={{ color: "#777777", fontSize: "20px" }} />
        </Typography>
      </Box>
    </Box>
  );
};

export default FlightCard;
