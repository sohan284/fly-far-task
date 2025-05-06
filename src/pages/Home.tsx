import CarouselHome from "../components/Home/CarouselHome";
import CategoryTabs from "../components/Home/CategoryTabs";
import SearchCheckBoxes from "../components/Home/SearchCheckBoxes";
import SearchHeader from "../shared/SearchHeader";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <Box>
      <SearchHeader />
      <CategoryTabs />
      <SearchCheckBoxes/>
      <CarouselHome />
    </Box>
  );
};

export default Home;
