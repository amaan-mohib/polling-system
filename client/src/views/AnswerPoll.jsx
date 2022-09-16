import { Button, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import CircularProgressWithLabel from "../components/CPLabel";
import NavBar from "../components/NavBar";
import { setResults } from "../reducers/student";

const AnswerPoll = () => {
  const [value, setValue] = useState("female");
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div>
      <NavBar title={"Select correct option and submit"}>
        <CircularProgressWithLabel value={75} />
      </NavBar>
      <div className="poll">
        <h2>Q. How many movies has ShahRikh ifhiehiu</h2>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}>
          {[1, 2, 3, 4].map((val) => (
            <FormControlLabel value={val} control={<Radio />} label="Label" />
          ))}
        </RadioGroup>
        <div style={{ marginTop: "20px" }}>
          <Button
            variant="contained"
            onClick={() => {
              dispatch(setResults(true));
            }}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AnswerPoll;
