import { useMediaQuery } from "react-responsive";

export const ResponseCheck = () => {
  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 1224px)" });
  return isMobileOrTablet;
};
