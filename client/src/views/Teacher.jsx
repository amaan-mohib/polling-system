import { useSelector } from "react-redux";
import CreatePoll from "./CreatePoll";
import Results from "./Results";

const Teacher = () => {
  const results = useSelector((state) => state.student);
  return <div>{results.results ? <Results /> : <CreatePoll />}</div>;
};

export default Teacher;
