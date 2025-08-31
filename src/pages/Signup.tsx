import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";

export const Signup = () => {
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
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 space-y-6 border border-white/20">
          {/* Header Section */}
          <div className="text-center space-y-2">
            <Heading label={"Sign up"} />
            <SubHeading label={"Enter your information to create an account"} />
          </div>

          {/* Form Section */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <InputBox placeholder="John" label={"First Name"} />
              <InputBox placeholder="Doe" label={"Last Name"} />
            </div>
            <InputBox placeholder="harkirat@gmail.com" label={"Email"} />
            <InputBox placeholder="123456" label={"Password"} />
          </div>

          {/* Button Section */}
          <div className="pt-2">
            <Button label={"Sign up"} />
          </div>

          {/* Bottom Warning */}
          <div className="pt-2">
            <BottomWarning
              label={"Already have an account?"}
              buttonText={"Sign in"}
              to={"/dashboard"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
