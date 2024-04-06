import { useRouter } from "next/router";
import React from "react";

const page = () => {
  const route = useRouter();
  route.push("/");
  return <div>page</div>;
};

export default page;
