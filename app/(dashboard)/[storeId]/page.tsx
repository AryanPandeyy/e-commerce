"use client";
import { useParams } from "next/navigation";
import { FC } from "react";

interface pageProps {
}

const page: FC<pageProps> = ({}) => {
  const { storeId }: { storeId: string } = useParams();
  return <div>OverView of StoreID -&gt; {storeId}</div>;
};

export default page;
