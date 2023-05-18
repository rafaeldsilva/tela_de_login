import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./FormLogin.module.css";

export function FormLogin({
  as: _Component = _Builtin.Block,
  heading = "Login",
  button = {},
  labalEmail = "E-mail",
  labelPin = "Pin",
  labelSenha = "Senha",
  visibilidade = true,
  visibilidadeDoForm = true,
}) {
  return (
    <_Component className={_utils.cx(_styles, "form-login-block")} tag="div">
      {visibilidadeDoForm ? (<_Builtin.FormWrapper
        className={_utils.cx(_styles, "form-block")}
      >
        <_Builtin.Heading className={_utils.cx(_styles, "heading")} tag="h1">
          {heading}
        </_Builtin.Heading>
        <_Builtin.FormForm
          name="email-form"
          data-name="Email Form"
          method="get"
          id="email-form"
        >
          <_Builtin.FormBlockLabel
            className={_utils.cx(_styles, "field-label")}
            htmlFor="email-3"
          >
            {labalEmail}
          </_Builtin.FormBlockLabel>
          {visibilidade ? (
            <_Builtin.FormTextInput
              className={_utils.cx(_styles, "field")}
              autoFocus={false}
              maxLength={256}
              name="email-3"
              data-name="Email 3"
              placeholder="Digite seu email"
              type="email"
              disabled={false}
              required={true}
              id="email-3"
            />
          ) : null}
          <_Builtin.FormBlockLabel
            className={_utils.cx(_styles, "field-label")}
            htmlFor="email-2"
          >
            {labelPin}
          </_Builtin.FormBlockLabel>
          <_Builtin.FormTextInput
            className={_utils.cx(_styles, "field")}
            autoFocus={false}
            maxLength={256}
            name="email-2"
            data-name="Email 2"
            type="password"
            disabled={false}
            required={true}
            id="email-2"
          />
          <_Builtin.FormBlockLabel
            className={_utils.cx(_styles, "field-label")}
            htmlFor="email-4"
          >
            {labelSenha}
          </_Builtin.FormBlockLabel>
          <_Builtin.FormTextInput
            className={_utils.cx(_styles, "field")}
            autoFocus={false}
            maxLength={256}
            name="email-2"
            data-name="Email 2"
            type="password"
            disabled={false}
            required={true}
            id="email-2"
          />
          <_Builtin.FormButton
            className={_utils.cx(_styles, "button")}
            type="submit"
            value="Logar"
            data-wait="Please wait..."
            {...button}
          />
        </_Builtin.FormForm>
        <_Builtin.FormSuccessMessage>
          <_Builtin.Block tag="div">
            {"Thank you! Your submission has been received!"}
          </_Builtin.Block>
        </_Builtin.FormSuccessMessage>
        <_Builtin.FormErrorMessage>
          <_Builtin.Block tag="div">
            {"Oops! Something went wrong while submitting the form."}
          </_Builtin.Block>
        </_Builtin.FormErrorMessage>
      </_Builtin.FormWrapper>) :
      null}
      
    </_Component>
  );
}
