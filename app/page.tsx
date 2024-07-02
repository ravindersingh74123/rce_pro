"use client";
import { Appbar } from "@/components/appbar";
import { Signup } from "@/components/signup";
import axios from "axios";
import { useState } from "react";

// async function getUserDetails() {
//   const response = await axios.get("http://localhost:3000/api/user")
// 	return response.data;
// }

export default async function Home() {
  // const userData = await getUserDetails();

  const [signedUp, setSignedUp] = useState(false);

  return (
    <div>
      <Appbar></Appbar>
    </div>
  );
}
