import { Box, Button, Typography } from "@mui/material";
import { PropTypes } from "prop-types";

export default function Header({ showAdd, btnToggle }) {
  return (
    <>
      <Box
        className="header-container"
        display={"flex"}
        justifyContent={"space-between"}
        width={"100%"}
        minHeight={"10vh"}
        mb={2}
        sx={{ background: "#748E63" }}
      >
        <Box m={2} display={"flex"} flex={1}>
          <Typography variant="h6" color={"white"}>
            Task Planner
          </Typography>
        </Box>
        <Box m={2} display={"flex"}>
          <Button
            variant="contained"
            sx={{
              background: "#F9B572",
              textTransform: "capitalize",
              "&:hover": {
                background: "#FAF8ED",
                color: "#F9B572",
              },
            }}
            onClick={btnToggle}
          >
            {showAdd}
          </Button>
        </Box>
      </Box>
    </>
  );
}

Header.propTypes = {
  showAdd: PropTypes.string,
  btnToggle: PropTypes.func,
};
