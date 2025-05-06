import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';

const BalanceButton = () => {
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
    );
};

export default BalanceButton;