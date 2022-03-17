import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const Form = ({ children, validationSchema, defaultValues, onSubmit }) => {
  let resolver;
  if (validationSchema) {
    resolver = yupResolver(validationSchema);
  }
  const methods = useForm({ resolver, defaultValues: defaultValues });
  const internalOnSubmit = (e) => {
    e.preventDefault();
    methods.handleSubmit(onSubmit)();
  };

  return (
    <FormProvider {...methods} triggerSubmit={internalOnSubmit}>
      <form onSubmit={internalOnSubmit}>{children}</form>
    </FormProvider>
  );
};

export default Form;
