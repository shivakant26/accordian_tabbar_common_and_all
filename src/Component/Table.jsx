import { useState } from "react";
import Dropdown from "./common/Dropdown";
import {
  discountList,
  productNameList,
  quantityList,
} from "../constant/Listing";

const Table = ({ setShow, show }) => {
  const [tableData, setTableData] = useState([]);
  const [grandTotal, setGrandTotal] = useState(0);
  const [selectedRows, setSelectedRows] = useState([]);
  const [newRowData, setNewRowData] = useState({
    productName: "",
    quantity: "",
    price: "",
    discount: "",
    description: "",
    checked: false,
  });

  const addRow = () => {
    if (
      newRowData.productName === "" ||
      newRowData.quantity === "" ||
      newRowData.price === ""
    ) {
      setShow(true);
      return false;
    } else {
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
      const grandTotalValue = grandTotal + total;
      setTableData([...tableData, newRow]);
      setGrandTotal(grandTotalValue);
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

  const handleRowSelection = (e, row) => {
    if (e.target.checked) {
      setSelectedRows([...selectedRows, row]);
    } else {
      setSelectedRows(
        selectedRows?.filter((selectedRow) => selectedRow !== row)
      );
    }
  };

  const removeSelectedRows = () => {
    const updatedTableData = tableData?.filter(
      (row) => !selectedRows?.includes(row)
    );
    setTableData(updatedTableData);
    var result = updatedTableData?.reduce(function (acc, obj) { return acc + obj.total; }, 0);
    setGrandTotal(result)
    setSelectedRows([]);
  };
 

  return (
    <>
      <div className="table_container">
        {show ? (
          <>
            <div className="popup_window">
              <p style={{ color: "red", margin: "0px" }}>
                Please fill all fields*
              </p>
              <button className="okay_btn" onClick={() => setShow(false)}>
                okay
              </button>
            </div>
          </>
        ) : (
          <>
            <table className={tableData.length > 0 ? "edual_width" : ""}>
              <thead>
                <tr>
                  {tableData.length > 0 && <th>S.No.</th>}
                  <th>ProductName</th>
                  <th>Quanity</th>
                  <th>Price</th>
                  <th>Discount</th>
                  {tableData.length > 0 && <th>Delete Row</th>}
                  <th style={{ width: '100px' }}>
                    {tableData.length > 0 ? (
                      <span style={{ color: "#03C988" }}>Total</span>
                    ) : (
                      <span>Action</span>
                    )}
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <>
                    <tr
                      key={index}
                      className={selectedRows.includes(row) ? "select_bg" : ""}
                    >
                      {tableData.length > 0 && (
                        <td>
                          <input
                            type="checkbox"
                            checked={row.checked}
                            onChange={(e) => handleCheckBox(e, index)}
                          />
                        </td>
                      )}
                      <td>{row.productName}</td>
                      <td>{row.quantity}</td>
                      <td>
                        <i
                          className="fa fa-rupee"
                          style={{ color: "#395B64" }}
                        ></i>
                        {row.price}
                      </td>
                      <td>{row.discount}%</td>
                      <td>
                        {tableData.length > 0 && (
                          <input
                            type="checkbox"
                            checked={selectedRows.includes(row)}
                            onChange={(e) => handleRowSelection(e, row)}
                          />
                        )}
                      </td>
                      <td class="total">
                        <i
                          className="fa fa-rupee"
                          style={{ color: "#395B64" }}
                        ></i>{" "}
                        {row.total} /-
                      </td>
                    </tr>
                    {row.checked && (
                      <tr>
                        <td colSpan={6} style={{ textAlign: "left" }}>
                          {row.description ? (
                            <span style={{ color: "green" }}>
                              {row.description}
                            </span>
                          ) : (
                            <span style={{ color: "red" }}>
                              Sorry! you have not entered any Description
                            </span>
                          )}
                        </td>
                      </tr>
                    )}
                  </>
                ))}

                {tableData.length > 0 && (
                  <tr>
                    <td colSpan={6} className="grand_total">
                      Grand Total
                    </td>
                    <td>
                      <i
                        className="fa fa-rupee"
                        style={{ color: "#395B64" }}
                      ></i>{" "}
                      {grandTotal} /-
                    </td>
                  </tr>
                )}

                <tr>
                  {tableData.length > 0 && (
                    <td className="ar_td">
                      <i className="fa fa-arrow-right"></i>
                    </td>
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
                      label="Quantity"
                      data={quantityList}
                    />
                  </td>
                  <td colSpan={tableData.length > 0 ? "2" : ""}>
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
                    {selectedRows.length > 0 && (
                      <button className="rmv_btn" onClick={removeSelectedRows}>
                        <i className="fa fa-minus"></i>
                      </button>
                    )}
                  </td>
                </tr>
                <tr>
                  <td colSpan={7}>
                    <textarea
                      placeholder="Enter product description"
                      onChange={handleTextarea}
                      value={newRowData.description}
                    ></textarea>
                  </td>
                </tr>
              </tbody>
            </table>
          </>
        )}
      </div>
    </>
  );
};

export default Table;
