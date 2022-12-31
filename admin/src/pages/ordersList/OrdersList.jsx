import "./ordersList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../redux/apiCalls";
import {format} from "timeago.js"

export default function ProductList() {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.order.orders);

  useEffect(() => {
    getOrders(dispatch);
  }, [dispatch]);

  /*const handleDelete = (id) => {
    deleteProduct(id, dispatch);
  };*/
  
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    { 
      field: "createdAt", 
      headerName: "Creado en", 
      width: 220,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            {format(params.row.createdAt)}
          </div>
        );
      },
    },
    {
      field: "amount",
      headerName: "Amount",
      width: 160,
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
        return (
          <>
            <td className="widgetLgStatus">
              <Button type={params.row.status} />
            </td>
          </>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 180,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/order/" + params.row._id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <div className="productTitleContainer">
        <h1 className="productTitle">Productos</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <DataGrid
        rows={orders}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={11}
        checkboxSelection
      />
    </div>
  );
}
