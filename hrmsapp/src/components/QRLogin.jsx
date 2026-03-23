export default function QRLogin() {
  return (
    <div className="mt-10 text-center">
      
      {/* Divider */}
      <div className="flex items-center gap-4 my-6">
        <div className="flex-1 h-px bg-gray-300"></div>
        <span className="text-gray-400 text-sm">Or</span>
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>

      {/* QR */}
      <div className="flex items-center gap-4">
        <img
          src="/images/QRCode.png"
          alt="QR Code"
          className="w-32 h-32"
        />

        <div className="text-left">
          <h3 className="font-semibold">Log In with QR Code</h3>
          <p className="text-sm text-gray-500">
            Use your mobile app to scan and log in seamlessly.
          </p>
        </div>
      </div>

      {/* Register */}
      <p className="mt-6 text-sm">
        Don't have an account?{" "}
        <span className="text-blue-500 cursor-pointer">
          Register now
        </span>
      </p>
    </div>
  );
}