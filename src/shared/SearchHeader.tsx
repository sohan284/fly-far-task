import SearchIcon from "@mui/icons-material/Search";
import ErrorIcon from "@mui/icons-material/Error";
import { Box, Typography } from "@mui/material";
import BalanceButton from "./BalanceButton";

const SearchHeader = () => {

  return (
    <Box
      sx={{
        display: "flex",
        maxWidth: "1180px",
        marginX: "auto",
        justifyContent: "center",
        width: { xs: "85vw", lg: "1180px" },
      }}
    >
      {/* Search Icon Container */}
      <Box
        sx={{
          backgroundColor: "white",
          paddingX: 1.5,
          paddingY: 1,
          marginRight: 0.5,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold",
          borderRadius: "3px",
        }}
      >
        <SearchIcon sx={{ backgroundColor: "white", fontSize: "30px" }} />
      </Box>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingX: 1,
          paddingY: 1,
          borderRadius: "3px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <ErrorIcon
            sx={{ color: "#E34825", marginRight: 1, backgroundColor: "white" }}
          />
          <Typography
            component="div"
            sx={{
              fontSize: "13px",
              color: "#333333",
              display: "flex",
              alignItems: "center",
              maxWidth: { xs: "90vw", lg: "100%" },
              overflow: "hidden",
              whiteSpace: "nowrap",
              position: "relative",
            }}
          >
            <Box
              sx={{
                display: "inline-block",
                whiteSpace: "nowrap",
                animation: "marquee 20s linear infinite",
              }}
            >
              প্রিয় ট্রেড পার্টনার, আমাদের সাথে হোয়াটসঅ্যাপ এ যোগাযোগ করতে
              উপরে থাকা হোয়াটসঅ্যাপ বাটনটিতে ক্লিক করুন, অথবা +৮৮০ ১৭৫৫ ৫৭২ ০৯৮
              এবং +৮৮০ ১৭৫৫ ৫৭২
            </Box>
            <style>
              {`
      @keyframes marquee {
        0% {
          transform: translateX(100%);
        }
        100% {
          transform: translateX(-100%);
        }
      }
    `}
            </style>
          </Typography>
        </Box>
        <Box
          sx={{
            display: { xs: "none", lg: "flex" },

          }}
        >   <BalanceButton/> </Box>
     
      </Box>
    </Box>
  );
};

export default SearchHeader;
