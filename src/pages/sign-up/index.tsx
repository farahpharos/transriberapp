import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => (
  // tailwindcss classes for a sign up component on a sign-up page
  <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 py-12 sm:px-6 lg:px-8">
    <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
  </div>
);
export default SignUpPage;
