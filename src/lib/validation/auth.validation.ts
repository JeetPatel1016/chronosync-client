import { LoginPayload } from "@/routes/Auth/Login";

export const LoginValidation = (payload: LoginPayload) => {
  const errors: Partial<LoginPayload> = {};
  // email
  if (payload.email == "") {
    errors.email = "Email is required.";
  } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(payload.email)) {
    errors.email = "Invalid Email Address.";
  }
  // passworc
  if (payload.password == "") {
    errors.password = "Password is required.";
  } else if (
    !/^(?=.*[0-9])(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{6,}$/.test(payload.password)
  ) {
    errors.password =
      "Password must contain atleast 6 chracters, 1 special character and 1 digit.";
  }
  return errors;
};
