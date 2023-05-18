import * as React from "react";
import * as Types from "./types";

declare function FormLogin(props: {
  as?: React.ElementType;
  heading?: React.ReactNode;
  button?: Types.Devlink.RuntimeProps;
  labalEmail?: React.ReactNode;
  labelPin?: React.ReactNode;
  labelSenha?: React.ReactNode;
  visibilidade?: Types.Visibility.VisibilityConditions;
  visibilidadeDoForm?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
