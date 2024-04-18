import React, { useEffect, useState } from "react";
import axios from "axios";
import TrackerSheet from "../../components/tackerSheet/TrackerSheet";

const TrackerSheetContainer = () => {
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
    { field: "partyName", headerName: "Client Name" },
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
      headerName: "Delivery Date",
      type: "date",
      valueGetter: (value) => new Date(value),
      headerAlign: "left",
      align: "left",
    },
    {
      field: "time",
      headerName: "Delivery Time",
    },
    {
      field: "senderName",
      headerName: "Delivery Sender Name",
    },
    {
      field: "option",
      headerName: "Delivery Option",
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
  return <TrackerSheet columns={columns} data={data} />;
};

export default TrackerSheetContainer;
