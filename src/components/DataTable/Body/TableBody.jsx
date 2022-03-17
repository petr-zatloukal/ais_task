import MUITableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { useContext } from "react";
import TableContext from "../context/TableContext";

const TableBody = () => {
  const { columns, data } = useContext(TableContext);

  return (
    <MUITableBody>
      {data?.map((row, index) => (
        <TableRow key={`line_${index}`}>
          {columns?.map((column, index) => {
            const { itemTemplate = (props) => <DefaultTemplate {...props} /> } =
              column;

            return (
              <TableCell key={`item_${column?.id || index}`}>
                {itemTemplate({ value: row?.[column?.id], row })}
              </TableCell>
            );
          })}
        </TableRow>
      ))}
    </MUITableBody>
  );
};

export default TableBody;

const DefaultTemplate = ({ value }) => <div>{value}</div>;
