import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex min-h-full justify-center flex-row align-middle">
      <SignIn />
    </div>
  );
}
