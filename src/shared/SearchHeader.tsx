import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ErrorIcon from "@mui/icons-material/Error";
import { Box, Typography } from "@mui/material";

const SearchHeader = () => {
  return (
    <Box>
      <Box sx={{ display: "flex", maxWidth: "90%", overflow: "hidden" }}>
        {/* Search Icon Container */}
        <Box
          sx={{
            backgroundColor: "white",
            paddingX: 2,
            paddingY: 1,
            marginRight: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <SearchIcon sx={{ backgroundColor: "white" }} />
        </Box>

        {/* Error Icon and Marquee Text */}
        <Box
          sx={{
            display: "flex",
            backgroundColor: "white",
            textAlign: "center",
            alignItems: "center",
            whiteSpace: "nowrap",
            gap: 2,
            paddingX: 2,
            paddingY: 1,
          }}
        >
          <ErrorIcon sx={{ color: "#E34825", marginRight: 2 }} />
          <Typography
            variant="body2"
            sx={{
              fontSize: "14px",
            }}
          >
            <Box className="marquee-container">
              <Typography className="marquee-text">
                প্রিয় ট্রেড পার্টনার, আমাদের সাথে হোয়াটসঅ্যাপ এ যোগাযোগ করতে
                উপরে থাকা হোয়াটসঅ্যাপ বাটনটিতে ক্লিক করুন, অথবা +৮৮০ ১৭৫৫ ৫৭২ ০৯৮
                এবং +৮৮০ ১৭৫৫ ৫৭২
              </Typography>
            </Box>
          </Typography>

          {/* Check Balance Button */}
          <Box
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
              paddingX: 2,
              paddingY: 1,
              borderRadius: "999px",
            }}
          >
            <Box
              sx={{
                backgroundColor: "white",
                borderRadius: "50%",
                width: "20px",
                height: "20px",
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "12px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#E34825",
              }}
            >
              ৳
            </Box>
            Check Balance
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SearchHeader;