import React, { useEffect, useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import axios from "axios";

const TrackerSheet = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getAllRequestsData = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URI}/allRequest`
      );
      setData(res.data.requests);
    };
    getAllRequestsData();
  }, []);

  const columns = [
    { field: "id", headerName: "S.No" },
    { field: "partyName", headerName: "Party Name" },
    {
      field: "description",
      headerName: "Description",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "quantity",
      headerName: "Quantity",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "amount",
      headerName: "Amount",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "date",
      headerName: "Date",
      type: "date",
      valueGetter: (value) => new Date(value),
      headerAlign: "left",
      align: "left",
    },
    {
      field: "time",
      headerName: "time",
    },
    {
      field: "senderName",
      headerName: "Delivery Sender Name",
    },
    {
      field: "option",
      headerName: "Option",
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 0.5,
      renderCell: (params) => (
        <a href={`/edit/${params.row.id}`}>Edit Request</a>
      ),
    },
  ];
  return (
    <Box
      m="40px 0 0 0"
      height="75vh"
      sx={{
        "& .MuiDataGrid-columnHeader": {
          backgroundColor: "#BE5431",
          color: "white",
        },
        "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
          color: `#BE5431 !important`,
        },
      }}
    >
      {" "}
      <DataGrid
        rows={data}
        getRowId={(row) => row.id + row.partyName}
        columns={columns}
        slots={{ toolbar: GridToolbar }}
      />
    </Box>
  );
};

export default TrackerSheet;
