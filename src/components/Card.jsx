import { Box, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { PropTypes } from "prop-types";

export default function Card({
  taskName,
  description,
  reminder,
  id,
  onDelete,
  onToggle,
}) {
  return (
    <Box
      className="stack-container"
      display={"flex"}
      width={"100"}
      border={"2px solid black"}
      flexDirection={"row"}
      justifyContent={"space-between"}
      p={2}
      borderRadius={"5px"}
      borderLeft={reminder ? "10px solid #F9B572" : ""}
      onDoubleClick={() => onToggle(id)}
      mb={2}
      key={id}
    >
      <Box display={"flex"} flexDirection={"column"}>
        <Typography variant="h6" color={"#748E63"}>
          {taskName}
        </Typography>
        <Typography variant="subtitle2">{description}</Typography>
      </Box>
      <Box display={"flex"}>
        <IconButton
          aria-label="delete"
          color="error"
          disableRipple
          onClick={() => onDelete(id)}
        >
          <CloseIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

Card.propTypes = {
  taskName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reminder: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func,
  onToggle: PropTypes.func,
};
