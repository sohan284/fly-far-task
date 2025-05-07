import { Box, Button, Typography } from "@mui/material";
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
        display: { lg: "grid", xs: "flex" },
        flexDirection: { lg: "none", xs: "column" },
        gridTemplateColumns: "repeat(8, 1fr)",
        gap: 2,
        backgroundColor: "white",
        borderRadius: "5px",
        padding: 2,
      }}
    >
      {/* Airline Logo and Name - Responsive version */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          gridColumn: "span 2",
          justifyContent: { xs: "space-between", lg: "flex-start" }
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Box sx={{ width: { lg: 55, xs: 36 } }}>
            <img
              src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${flight?.carrier}.png`}
              alt=""
              width="100%"
              style={{ border: "2px solid #E34825", borderRadius: "50px" }}
            />
          </Box>
          <Box>
            <Typography sx={{ fontSize: "clamp(13px, 2vw, 17px)", color: "#333333" }}>
              {flight?.carrierName}
            </Typography>
            <Typography sx={{ fontSize: "clamp(10px, 2vw, 12px)", color: "#E34825" }}>
              {flight?.carrier}
            </Typography>
          </Box>
        </Box>
        
        {/* Refundable and Baggage info - Mobile only */}
        <Box sx={{ display: { lg: "none", xs: "grid" } }}>
          <Typography
            sx={{
              color: "#E34825",
              display: "flex",
              gap: 1,
              alignItems: "center",
              justifyContent: "start",
            }}
          >
            <ErrorIcon sx={{ color: "#E34825", fontSize: "clamp(16px, 2vw, 20px)" }} />
            <Typography
              sx={{
                fontSize: "clamp(10px, 2vw, 12px)",
                color: "#E34825",
                textWrap: "nowrap",
                overflow: "clip",
              }}
            >
              {flight?.isRefundable}
            </Typography>
          </Typography>
          <Typography
            sx={{
              fontSize: "clamp(10px, 2vw, 12px)",
              color: "#777777",
              display: "flex",
              gap: 1,
              alignItems: "center",
              justifyContent: "start",
            }}
          >
            <LuggageIcon sx={{ color: "#777777", fontSize: "clamp(16px, 2vw, 20px)" }} />
            Baggage {flight?.baggage[0][0]?.baggage}
          </Typography>
        </Box>
      </Box>

      {/* Flight Details */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 2,
          gridColumn: "span 3",
        }}
      >
        {/* Departure */}
        <Box>
          <Typography
            variant="body2"
            sx={{
              fontSize: "clamp(20px, 3vw, 24px)",
              color: "#333333",
              fontWeight: "500",
              textAlign: "center",
            }}
          >
            {flightCity?.departureCityCode}
          </Typography>
          <Box
            sx={{
              color: "#E34825",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              style={{ color: "#E34825", display: "inline", fontSize: "clamp(10px, 2vw, 13px)" }}
            >
              {flightCity?.departureTime.slice(0, 5)},
            </Typography>{" "}
            <Typography
              style={{ color: "gray", display: "inline", fontSize: "clamp(10px, 2vw, 13px)" }}
            >
              {flightCity?.departureCityName}
            </Typography>{" "}
          </Box>
        </Box>

        {/* Duration and Stops */}
        <Box
          sx={{
            gridColumn: "span 2",
            textAlign: "center",
            color: "#A3A1A1",
          }}
        >
          <Typography sx={{ fontSize: "clamp(10px, 2vw, 13px)" }} variant="body2">
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
          <Typography sx={{ fontSize: "clamp(10px, 2vw, 13px)" }} variant="body2">
            {flightCity?.hiddenStops?.length ? flightCity?.hiddenStops : "No Stop"}
          </Typography>
        </Box>

        {/* Arrival */}
        <Box>
          <Typography
            variant="body2"
            sx={{
              fontSize: "clamp(20px, 3vw, 24px)",
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
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              style={{ color: "#E34825", display: "inline", fontSize: "clamp(10px, 2vw, 13px)" }}
            >
              {flightCity?.arrivalTime.slice(0, 5)},
            </Typography>{" "}
            <Typography
              style={{ color: "gray", display: "inline", fontSize: "clamp(10px, 2vw, 13px)" }}
            >
              {flightCity?.arrivalCityName}
            </Typography>{" "}
          </Box>
        </Box>
      </Box>

      {/* Refundable and Baggage info - Desktop only */}
      <Box sx={{ display: { lg: "grid", xs: "none" } }}>
        <Typography
          sx={{
            color: "#E34825",
            display: "flex",
            gap: 1,
            alignItems: "center",
            justifyContent: "start",
          }}
        >
          <ErrorIcon sx={{ color: "#E34825", fontSize: "clamp(16px, 2vw, 20px)" }} />
          <Typography
            sx={{
              fontSize: "clamp(10px, 2vw, 12px)",
              color: "#E34825",
              textWrap: "nowrap",
              overflow: "clip",
            }}
          >
            {flight?.isRefundable}
          </Typography>
        </Typography>
        <Typography
          sx={{
            fontSize: "clamp(10px, 2vw, 12px)",
            color: "#777777",
            display: "flex",
            gap: 1,
            alignItems: "center",
            justifyContent: "start",
          }}
        >
          <LuggageIcon sx={{ color: "#777777", fontSize: "clamp(16px, 2vw, 20px)" }} />
          Baggage {flight?.baggage[0][0]?.baggage}
        </Typography>
      </Box>

      {/* Price */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          mt: { lg: 0, xs: 1 },
          borderTop: { lg: "none", xs: "1.5px dashed #E1E1E1" },
          gap: 1,
        }}
      >
        <Typography
          sx={{
            fontSize: "12px",
            color: "#777777",
            display: { lg: "flex", xs: "none" },
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
            fontSize: "clamp(19px, 3vw, 25px)",
            color: {lg:"#E34825",sx:'#282E2C'},
            display: "flex",
            gap: 1,
            mt: { lg: 0, xs: 1 },
            alignItems: "center",
          }}
        >
          ৳ {flight?.totalBasePrice}
        </Typography>
      </Box>

      {/* Book Now - Desktop only */}
      <Box
        sx={{
          display: { lg: "flex", xs: "none" },
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