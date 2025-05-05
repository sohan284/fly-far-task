import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ErrorIcon from "@mui/icons-material/Error";
import { Box, Typography } from "@mui/material";

const SearchHeader = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [showAmount, setShowAmount] = useState(false);

  const handleClick = () => {
    // If already showing amount, toggle back immediately
    if (isAnimating) {
      setIsAnimating(false);
      setShowAmount(false);
    } else {
      // First click - show animation and amount
      setIsAnimating(true);
      setShowAmount(true);

      // Reset after 5 seconds automatically if user doesn't click again
      setTimeout(() => {
        setIsAnimating(false);
        setShowAmount(false);
      }, 5000);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        maxWidth: "1180px",
        width: "100%",
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
              maxWidth: { xs: "400px", sm: "300px", md: "200px", lg: "100%" },
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
          onClick={handleClick}
          sx={{
            backgroundColor: "#E34825",
            display: "flex",
            height: "32px",
            width: "147px",
            textAlign: "center",
            alignItems: "center",
            gap: 2,
            color: "white",
            fontSize: "13px",
            paddingX: 1,
            marginLeft: 1,
            borderRadius: "999px",
            cursor: "pointer", // Added to show it's clickable
            transition: "all 0.3s ease", // Smooth transition
            "&:hover": {
              opacity: 0.9,
            },
            position: "relative", // For positioning the amount
          }}
        >
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: "50%",
              width: "24px",
              height: "24px",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "14px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#E34825",
              textWrap: "nowrap",
              transform: isAnimating ? "translateX(120px)" : "translateX(0)",
              transition: "transform 0.5s ease",
            }}
          >
            ৳
          </Box>

          {showAmount ? (
            <Typography
              sx={{
                fontSize: "13px",
                color: "white",
                textWrap: "nowrap",
                position: "absolute",
                left: "12px",
                opacity: isAnimating ? 1 : 0,
                transition: "opacity 0.5s ease",
              }}
            >
              1,225.00
            </Typography>
          ) : (
            <Typography
              sx={{
                fontSize: "13px",
                color: "white",
                textWrap: "nowrap",
              }}
            >
              Check Balance
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default SearchHeader;
