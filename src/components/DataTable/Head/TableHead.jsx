import TableCell from "@mui/material/TableCell";
import MUITableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useContext } from "react";
import TableContext from "../context/TableContext";
import styled from "styled-components";

const TableHead = () => {
  const { columns } = useContext(TableContext);
  return (
    <MUITableHead>
      <TableRow>
        {columns?.map((column, index) => {
          const {
            headerItemTemplate = (props) => <DefaultTemplate {...props} />,
          } = column;
          return (
            <TableCell key={`headerCell_${column?.id || index}`}>
              {headerItemTemplate(column)}
            </TableCell>
          );
        })}
      </TableRow>
    </MUITableHead>
  );
};

export default TableHead;

const DefaultTemplate = ({ value }) => <HeaderCol>{value}</HeaderCol>;

const HeaderCol = styled.div`
  font-weight: bold;
`;
