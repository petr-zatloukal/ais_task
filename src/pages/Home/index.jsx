import { Button } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import * as yup from "yup";
import DataTable from "../../components/DataTable";
import TableBody from "../../components/DataTable/Body/TableBody";
import TableHead from "../../components/DataTable/Head/TableHead";
import Form from "../../components/Form";
import FormField from "../../components/Form/FormField";
import TextField from "../../components/Form/TextField";
import BodyBox from "../../components/Layout/BodyBox";
import { FETCH_USERS } from "../../store/actions/users";

const columns = [
  {
    id: "name",
    value: "name",
  },
  {
    id: "username",
    value: "username",
  },
  {
    id: "email",
    value: "email",
  },
];

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state?.usersReducer?.data);

  useEffect(() => {
    dispatch({ type: FETCH_USERS });
  }, [dispatch]);

  const validationSchema = yup.object({
    name: yup.string().required("povinné"),
    email: yup.string().required("povinné").email("špatný formát"),
  });

  return (
    <>
      <BodyBox style={{ margin: 20 }}>
        <DataTable columns={columns} data={data || []}>
          <TableHead />
          <TableBody />
        </DataTable>
      </BodyBox>

      <BodyBox style={{ margin: 20 }}>
        <div>
          <Form
            onSubmit={(val) => console.log({ val })}
            validationSchema={validationSchema}
          >
            <FormBody />
          </Form>
        </div>
      </BodyBox>
    </>
  );
};

export default Home;

const FormBody = () => {
  return (
    <VerticalDiv>
      <FormField name={"name"} label={"name"}>
        <TextField />
      </FormField>

      <FormField name={"email"} label={"email"}>
        <TextField />
      </FormField>

      <Button variant="outlined" type="submit">
        Submit
      </Button>
    </VerticalDiv>
  );
};

const VerticalDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
