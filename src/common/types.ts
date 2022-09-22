import { UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

export interface UseFormType<T extends FormType> {
  register: UseFormRegister<T>;
  onSubmit: ReturnType<UseFormHandleSubmit<T>>;
}

export interface FormType {
  [key: string]: any;
}
