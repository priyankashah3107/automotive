import AuthForm from "@/components/AuthForm";

const SignupPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <AuthForm type="signup" />
    </div>
  );
};

export default SignupPage;
