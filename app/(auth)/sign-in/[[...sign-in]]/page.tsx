import prisma from "@/lib/db";
import { SignIn } from "@clerk/nextjs";

export default async function Page() {
  const data = await prisma.store.findMany();
  const storeId = data[0].id;
  console.log(storeId);
  return (
    <div className="flex min-h-full justify-center flex-row align-middle">
      <SignIn afterSignInUrl={`/${storeId}`} />
    </div>
  );
}
