const TableComponent = ({ rowData=[] }) => {
  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Model Name:</th>
            <th>Mobile Number</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          {rowData.map((eachRow) => {
            return (
              <tr>
                {/* for reUsability :used eachRow.data instead of each Row.model */}
                <td>{eachRow.data1}</td>
                <td>{eachRow.data2}</td>
                <td>{eachRow.data3}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default TableComponent;
