import "./sliderList.css";
import { DataGrid } from "@material-ui/data-grid";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSliders } from "../../redux/apiCalls";

export default function SliderList() {
  const dispatch = useDispatch();
  const sliders = useSelector((state) => state.slider.sliders);

  useEffect(() => {
    getSliders(dispatch);
  }, [dispatch]);
  /*
  const handleDelete = (id) => {
    deleteProduct(id, dispatch);
  };*/

  const columns = [
    { field: "id", headerName: "ID", width: 89 },
    {
      field: "title",
      headerName: "Titulo",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            {params.row.title}
          </div>
        );
      },
    },
    {
      field: "img",
      headerName: "Imagen",
      width: 121,
      renderCell: (params) => {
        return (
          <img className="productListImg" src={params.row.img} alt="" />
        );
      },
    },
    { field: "desc", headerName: "Desc", width: 220 },
    {
      field: "bg",
      headerName: "Color",
      width: 160,
    },
    {
      field: "cat",
      headerName: "Categoria",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/slider/" + params.row._id}>
              <button className="productListEdit">Edit</button>
            </Link>
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <div className="productTitleContainer">
        <h1 className="productTitle">Slider</h1>
      </div>
      <DataGrid
        rows={sliders}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={3}
        checkboxSelection
      />
    </div>
  );
}
