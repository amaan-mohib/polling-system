import { configureStore } from "@reduxjs/toolkit";
import role from "../reducers/role";
import student from "../reducers/student";

export default configureStore({
  reducer: {
    role: role,
    student: student,
  },
});
