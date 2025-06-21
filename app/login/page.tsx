import AuthForm from "@/components/AuthForm";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <AuthForm type="login" />
    </div>
  );
};

export default LoginPage;
