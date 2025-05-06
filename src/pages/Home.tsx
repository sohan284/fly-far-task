import CarouselHome from "../components/Home/CarouselHome";
import CategoryTabs from "../components/Home/CategoryTabs";
import SearchCheckBoxes from "../components/Home/SearchCheckBoxes";
import SearchHeader from "../shared/SearchHeader";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <Box  sx={{
      width: { xs: "90vw", lg: "1180px" },
      marginX: "auto",
      marginTop: 2,
    }}>
      <SearchHeader />
      <CategoryTabs />
      <SearchCheckBoxes/>
      <CarouselHome />
    </Box>
  );
};

export default Home;
