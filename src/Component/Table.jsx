import { useState } from "react";
import Dropdown from "./common/Dropdown";
import {
  discountList,
  productNameList,
  quantityList,
} from "../constant/Listing";

const Table = ({setShow , show}) => {
  const [tableData, setTableData] = useState([]);
  const [grandTotal, setGrandTotal] = useState(0);
  const [selectshow , setSelectShow] = useState(false);
  const [delId , setDelId] = useState();
  const [newRowData, setNewRowData] = useState({
    productName: "",
    quantity: "",
    price: "",
    discount: "",
    description: "",
    checked: false,
  });

  const addRow = () => {
    if(newRowData.productName === "" || newRowData.quantity === "" || newRowData.price === ""){
        setShow(true)
        return false;
    }else{
        const newRow = { ...newRowData };
        const total =
          Number(newRow.price) * Number(newRow.quantity) -
          [
            (Number(newRow.price) *
              Number(newRow.quantity) *
              Number(newRow.discount)) /
              100,
          ];
        newRow.total = total;
        const grandtotal = grandTotal + total;
        setTableData([...tableData, newRow]);
        setGrandTotal(grandtotal);
        setNewRowData({
          productName: "",
          quantity: "",
          price: "",
          discount: "",
          description: "",
        });
    }
  };

  const handleInputChange = (e) => {
    const val = e.target.value.replace(/[^0-9\-]/g, "");
    setNewRowData({ ...newRowData, price: val });
  };

  const handleTextarea = (e) => {
    setNewRowData({ ...newRowData, description: e.target.value });
  };
  const handleSelectProduct = (e) => {
    setNewRowData({ ...newRowData, productName: e.target.value });
  };
  const handleSelectQunatity = (e) => {
    setNewRowData({ ...newRowData, quantity: e.target.value });
  };
  const handleSelectDiscount = (e) => {
    setNewRowData({ ...newRowData, discount: e.target.value });
  };

  const handleCheckBox = (e, index) => {
    const product = [...tableData];
    product[index].checked = e.target.checked;
    setTableData(product);
  };

  const okay = () =>{
    setShow(false)
  }

  const selectRow = (index) =>{
    const product = [...tableData];
    debugger
    setSelectShow(!selectshow)
    setDelId(index)
  }

  const removeRow = () =>{
    const product = [...tableData];
    product.splice(delId,1)
    setDelId("")
    setTableData(product)
  }

  return (
    <>
      <div className="table_container">
        {
            show ? (<>
            <div className="popup_window">
                <p style={{color:"red",margin:"0px"}}>Please fill All Field*</p>
                <button className="okay_btn" onClick={okay}>okay</button>
            </div>
            </>) : (<>
            
        <table>
          <thead>
            <tr>
              {tableData?.length > 0 ? (
                <>
                  <th>S.No.</th>
                </>
              ) : (
                ""
              )}
              <th>ProductName</th>
              <th>Quanity</th>
              <th>Price</th>
              <th>Discount</th>
              <th>
                {tableData?.length > 0 ? (
                  <span style={{ color: "#03C988" }}>Total</span>
                ) : (
                  <span>Action</span>
                )}
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData?.map((row, index) => (
              <>
                <tr key={index} onClick={()=>selectRow(index)} className={ delId ? "select_bg" : ""}>
                  <td>
                    <input
                      type="checkbox"
                      checked={row.checked}
                      onChange={(e) => handleCheckBox(e, index)}
                    />
                  </td>
                  <td>{row.productName}</td>
                  <td>{row.quantity}</td>
                  <td>
                    <i class="fa fa-rupee" style={{ color: "#395B64" }}></i>
                    {row.price}
                  </td>
                  <td>{row.discount}%</td>
                  <td>
                    <i class="fa fa-rupee" style={{ color: "#395B64" }}></i>{" "}
                    {row.total}
                    /-
                  </td>
                </tr>
                {row.checked ? (
                  <tr>
                    <td colSpan={6}>
                      {row.description ? (
                        row.description
                      ) : (
                        <span style={{ color: "red" }}>No Discription</span>
                      )}
                    </td>
                  </tr>
                ) : (
                  ""
                )}
              </>
            ))}

            {tableData?.length > 0 ? (
              <>
                <tr>
                  <td colSpan={5} className="grand_total">
                    Grand Total
                  </td>
                  <td>
                    <i class="fa fa-rupee" style={{ color: "#395B64" }}></i>{" "}
                    {grandTotal} /-
                  </td>
                </tr>
              </>
            ) : (
              ""
            )}
            <tr>
              {tableData?.length > 0 ? (
                <>
                  <td className="ar_td">
                    <i className="fa fa-arrow-right"></i>
                  </td>
                </>
              ) : (
                ""
              )}
              <td>
                <Dropdown
                  onSelect={handleSelectProduct}
                  value={newRowData.productName}
                  label="Product"
                  data={productNameList}
                />
              </td>
              <td>
                <Dropdown
                  onSelect={handleSelectQunatity}
                  value={newRowData.quantity}
                  label="Qunatity"
                  data={quantityList}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="price"
                  placeholder="Price"
                  onChange={handleInputChange}
                  value={newRowData.price}
                />
              </td>
              <td>
                <Dropdown
                  onSelect={handleSelectDiscount}
                  value={newRowData.discount}
                  label="Discount"
                  data={discountList}
                />
              </td>
              <td>
                <button className="add_btn" onClick={addRow}>
                  <i className="fa fa-plus"></i>
                </button>
                <button className="rmv_btn" onClick={removeRow}>
                  <i className="fa fa-minus"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td colSpan={6}>
                <textarea
                  placeholder="Enter product discription"
                  onChange={handleTextarea}
                  value={newRowData.description}
                ></textarea>
              </td>
            </tr>
          </tbody>
        </table>
            </>)
        }
      </div>
    </>
  );
};

export default Table;
