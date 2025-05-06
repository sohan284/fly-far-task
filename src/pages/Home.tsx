import CarouselHome from "../components/Home/CarouselHome";
import CategoryTabs from "../components/Home/CategoryTabs";
import FlightTypeTab from "../components/Home/FlightTypeTab";
import SearchCheckBoxes from "../components/Home/SearchCheckBoxes";
import SearchHeader from "../shared/SearchHeader";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <Box>
      <SearchHeader />
      <CategoryTabs />
      <FlightTypeTab />
      <SearchCheckBoxes/>
      <CarouselHome />
    </Box>
  );
};

export default Home;
