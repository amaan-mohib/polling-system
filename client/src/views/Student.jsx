import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStudentName } from "../reducers/student";
import AnswerPoll from "./AnswerPoll";
import Results from "./Results";

const Name = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="selection">
      <TextField
        label="Name"
        placeholder="Enter your name"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        <Button
          variant="contained"
          onClick={() => {
            sessionStorage.setItem("name", name);
            dispatch(setStudentName(name));
          }}>
          Continue
        </Button>
      </div>
    </div>
  );
};

const Student = () => {
  const studentName = useSelector((state) => state.student);
  const results = useSelector((state) => state.student);

  return studentName.name ? (
    results.results ? (
      <Results />
    ) : (
      <AnswerPoll />
    )
  ) : (
    <Name />
  );
};

export default Student;
