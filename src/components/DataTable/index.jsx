import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Context from "./context/TableContext";

const DataTable = ({ columns, data, children }) => {
  return (
    <Context.Provider value={{ columns, data }}>
      <TableContainer>
        <Table>{children}</Table>
      </TableContainer>
    </Context.Provider>
  );
};

export default DataTable;
