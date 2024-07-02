import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req:NextRequest) {
  try {
    
    const body = await req.json();
    const { username, password } = body;
    console.log(body);


    const newUser = await prisma.users.create({
      data: {
       
        email:username,
        password:password
      },
    });
    console.log(body);

    return NextResponse.json({
      message: "User created successfully",
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Something Went Wrong",
      },
      { status: 500 }
    );
  }
}

// export function POST(){
//     return Response.json({
//         name:"Ravinder",
//         email:"ravi@gmail.com"
//     })
// }

// import { NextRequest } from "next/server";

// export async function POST(req:NextRequest){
//     const body=await req.json();
//     console.log(body);
//     return Response.json({
//         message:"logged in"
//     })
// }
