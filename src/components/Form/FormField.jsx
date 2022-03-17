import { cloneElement } from "react";
import { useController, useFormContext } from "react-hook-form";
import styled from "styled-components";

const FormField = ({ label, name, children, required = true }) => {
  const {
    formState: { errors },
  } = useFormContext();
  const { field } = useController({ name });

  const errorMessage = errors[name]?.message || null;

  return (
    <div>
      {cloneElement(children, {
        name,
        label,
        required,
        value: field?.value,
        onChange: field?.onChange,
        error: !!errorMessage,
      })}
      {!!errorMessage && <ErrorBox>{errorMessage}</ErrorBox>}
    </div>
  );
};

export default FormField;

const ErrorBox = styled.div`
  color: red;
`;
