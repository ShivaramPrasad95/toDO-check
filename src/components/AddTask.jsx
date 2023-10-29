import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";
import { PropTypes } from "prop-types";
import { useState } from "react";

export default function AddTask({ addTask }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [reminder, setReminder] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(title, desc, reminder);
    setTitle("");
    setDesc("");
    setReminder(false);
  };

  return (
    <Box
      className="form-container"
      display={"flex"}
      flexDirection={"column"}
      width={"80%"}
      justifyContent={"center"}
      margin={"0 auto"}
      alignItems={"center"}
      gap={2}
      mb={2}
    >
      <TextField
        id="outlined-basic"
        label="Task Name"
        variant="outlined"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        sx={{
          width: "40%",
        }}
      />
      <TextField
        id="outlined-basic"
        label="Description"
        variant="outlined"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        sx={{
          width: "40%",
        }}
      />
      <Box
        display={"flex"}
        width={"40%"}
        justifyContent={"left"}
        alignSelf={"left"}
      >
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                value={reminder}
                onChange={(e) => setReminder(e.currentTarget.checked)}
              />
            }
            label="Set Reminder"
          />
        </FormGroup>
      </Box>
      <Box
        display={"flex"}
        width={"40%"}
        justifyContent={"left"}
        alignSelf={"left"}
      >
        <Button
          variant="contained"
          sx={{
            background: "#748E63",
            textTransform: "capitalize",
            "&:hover": {
              background: "#748E63",
            },
          }}
          onClick={handleSubmit}
        >
          Save Task
        </Button>
      </Box>
    </Box>
  );
}

AddTask.propTypes = {
  addTask: PropTypes.func,
};
