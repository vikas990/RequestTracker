import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import { useMediaQuery } from "@mui/material";
import "./AddRequest.css";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const initialValues = {
  partyName: "",
  description: "",
  quantity: "",
  amount: "",
  date: "",
  time: "",
  senderName: "",
  option: "",
};

const userSchema = yup.object().shape({
  partyName: yup.string().required("required"),
  description: yup.string().required("required"),
  quantity: yup.number().required("required"),
  amount: yup.string().required("required"),
  date: yup.date().required("required"),
  time: yup.string().required("required"),
  senderName: yup.string().required("required"),
  option: yup.string().required("required"),
});
const AddRequest = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  let navigate = useNavigate();

  const handleFormSubmit = async (values) => {
    try {
      await axios.post(`${process.env.REACT_APP_API_URI}/request`, values);

      Swal.fire("Uploaded 😄", "New Request Saved", "success");

      navigate("/");
    } catch (error) {
      Swal.fire(
        "Error",
        "Something went wrong! Please try again later 🔺",
        "error"
      );
    }
  };
  return (
    <Box m="20px">
      <p className="heading">New Request Form</p>
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0,1fr))"
              sx={{
                "& > div": { gridcolumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Party Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.partyName}
                name="partyName"
                error={!!touched.partyName && !!errors.partyName}
                helperText={touched.partyName && errors.partyName}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                multiline
                maxRows={10}
                variant="filled"
                type="text"
                label="Description"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.description}
                name="description"
                error={!!touched.description && !!errors.description}
                helperText={touched.description && errors.description}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Quantity"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.quantity}
                name="quantity"
                error={!!touched.quantity && !!errors.quantity}
                helperText={touched.quantity && errors.quantity}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Amount"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.amount}
                name="amount"
                error={!!touched.amount && !!errors.amount}
                helperText={touched.amount && errors.amount}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="date"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.date}
                name="date"
                error={!!touched.date && !!errors.date}
                helperText={touched.date && errors.date}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Time"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.time}
                name="time"
                error={!!touched.time && !!errors.time}
                helperText={touched.time && errors.time}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Delivery Sender Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.senderName}
                name="senderName"
                error={!!touched.senderName && !!errors.senderName}
                helperText={touched.senderName && errors.senderName}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Option"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.option}
                name="option"
                error={!!touched.option && !!errors.option}
                helperText={touched.option && errors.option}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="success" variant="contained">
                Create Request
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default AddRequest;
