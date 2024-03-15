import { ChangeEventHandler, FormEventHandler, useState } from "react";
import AuthLayout from "../AuthLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    if (!validate(email)) {
      return;
    }
  };
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (error) {
      setError("");
    }
    setEmail(e.target.value);
  };

  const validate = (email: string) => {
    let err = "";
    let flag = true;
    if (!email) {
      err = "Email is required.";
      flag = false;
    }
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      err = "Invalid email pattern.";
      flag = false;
    }
    setError(err);
    return flag;
  };
  return (
    <AuthLayout>
      <form onSubmit={handleSubmit} className="md:w-[400px] flex flex-col m-2">
        <h2 className="text-2xl text-center mb-3">Forgot your Password?</h2>
        <p className="text-center text-slate-500 mb-6">
          Enter the email linked to your account and we will send the password
          reset link.
        </p>
        <label>
          <span className="block mb-1">Email ID</span>
          <Input
            onChange={handleChange}
            type="text"
            className={`input-control ${error ? "error" : ""}`}
          />
          <span className="text-xs md:text-sm text-rose-500 sm:text-rose-300">
            {error}
          </span>
        </label>
        <Button type="submit" className="btn mt-10">
          Send password reset link
        </Button> 
      </form>
    </AuthLayout>
  );
}
