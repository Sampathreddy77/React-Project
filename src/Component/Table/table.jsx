const TableComponent = ({ rowData }) => {
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
                <td>{eachRow.model}</td>
                <td>{eachRow.mobileNumber}</td>
                <td>{eachRow.state}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default TableComponent;
