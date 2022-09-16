import { Button, Card, CardContent } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import NavBar from "../components/NavBar";
import { setResults } from "../reducers/student";

const Results = () => {
  const [options, setOptions] = useState({
    op1: 1,
    op2: 2,
    op3: 3,
    op4: 4,
  });
  const [total, setTotal] = useState(10);
  const dispatch = useDispatch();
  return (
    <div>
      <NavBar title="Polling results" />
      <div className="selection">
        {Object.keys(options).map((opt) => (
          <Card variant="outlined">
            <div className="flex-between" style={{ padding: "0 20px" }}>
              <p>{opt}</p>
              <p>{`${(options[opt] / total) * 100}%`}</p>
            </div>
          </Card>
        ))}
        <div>
          <Button
            variant="contained"
            onClick={() => {
              dispatch(setResults(false));
            }}>
            Ask another question
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Results;
