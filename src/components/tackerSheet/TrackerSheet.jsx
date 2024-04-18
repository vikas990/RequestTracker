import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box } from "@mui/material";

const TrackerSheet = ({ columns, data }) => {
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
