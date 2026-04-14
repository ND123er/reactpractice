import LeftPanel from "../components/LeftPanel";
import LoginForm from "../components/LoginForm";
import QRLogin from "../components/QRLogin";

export default function LoginPage() {
  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row bg-gray-100 p-2 gap-[15px]">
      
      {/* LEFT */}
      <div className="w-full basis-[28%] min-w-[300px] border border-black/20 rounded-lg overflow-hidden">
        <LeftPanel />
      </div>

      {/* RIGHT */}
      <div className="w-full flex basis-[70%] items-center justify-center p-8 border border-black/20 rounded-lg bg-white">
        <div className="w-full max-w-[800px]">
          <LoginForm />
          <QRLogin />
        </div>
      </div>

    </div>
  );
}