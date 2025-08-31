import { useRef } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export const Signin = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  async function handleSignin() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    await axios.post(`${BACKEND_URL}/api/v1/user/signin`, {
      username,
      password,
    });
    navigate("/dashboard");
  }
  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-200 via-slate-300 to-slate-400"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

      {/* Main content */}
      <div className="w-full max-w-md relative z-10">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 space-y-8 border border-white/20">
          {/* Header Section */}
          <div className="text-center space-y-3">
            <Heading label={"Welcome back"} />
            <SubHeading label={"Sign in to your account to continue"} />
          </div>

          {/* Form Section */}
          <div className="space-y-6">
            <InputBox
              ref={usernameRef}
              placeholder="user@gmail.com"
              label={"Email"}
            />
            <InputBox
              ref={passwordRef}
              placeholder="123456"
              label={"Password"}
            />
          </div>

          {/* Button Section */}
          <div className="pt-4">
            <Button label={"Sign in"} onClick={handleSignin} />
          </div>

          {/* Bottom Warning */}
          <div className="pt-4">
            <BottomWarning
              label={"Don't have an account?"}
              buttonText={"Sign up"}
              to={"/"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
