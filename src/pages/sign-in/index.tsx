import { SignIn } from "@clerk/nextjs";

const SignInPage = () => (
  // tailwindcss classes for a sign in component on a sign-in page
  <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 py-12 sm:px-6 lg:px-8">
    <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
  </div>
);
export default SignInPage;
