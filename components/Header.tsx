// "use client";

// import Image from "next/image";
// import { useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { signIn, useSession } from "next-auth/react";
// import { signOut } from "next-auth/react";
// import { Signup } from "./signup";

// type NavItem = {
//   label: string;
//   link?: string;
//   children?: NavItem[];
//   iconImage?: string;
// };

// const navItems: NavItem[] = [
//   {
//     label: "Features",
//     link: "#",
//     children: [
//       {
//         label: "Todo list",
//         link: "#",
//       },
//       {
//         label: "Calendar",
//         link: "#",
//       },
//       {
//         label: "Reminders",
//         link: "#",
//       },
//       {
//         label: "Planning",
//         link: "#",
//       },
//     ],
//   },
//   {
//     label: "Questions",
//     link: "#",
//     children: [
//       {
//         label: "Solved Questions",
//         link: "#",
//       },
//       {
//         label: "Recent Interview Problems",
//         link: "#",
//       },
//     ],
//   },

//   {
//     label: "About",
//     link: "#",
//   },
// ];

// export default function Navbar() {
//   const [isSideMenuOpen, setSideMenue] = useState(false);
//   const router = useRouter();
//   function openSideMenu() {
//     setSideMenue(true);
//   }
//   function closeSideMenu() {
//     setSideMenue(false);
//   }

//   const { data: session } = useSession();

//   return (
//     <div className="mx-auto flex w-full max-w-7xl justify-between px-4 py-3 text-sm">
//       {/* left side  */}
//       <section className="flex items-center gap-10">
//         {/* logo */}
//         {/* <Image src={logo} alt=" logo" /> */}
//         {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}
//         <div className="hidden md:flex items-center gap-4 transition-all">
//           {navItems.map((d, i) => (
//             <Link
//               key={i}
//               href={d.link ?? "#"}
//               className="relative group px-2 py-3 transition-all no-underline"
//             >
//               <p className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:text-black ">
//                 <span>{d.label}</span>
//                 {d.children && (
//                   <span className="rotate-180 transition-all group-hover:rotate-0">
//                     ▼
//                   </span>
//                 )}
//               </p>

//               {/* dropdown */}
//               {d.children && (
//                 <div className="absolute right-0 top-10 hidden w-auto flex-col gap-1 rounded-lg bg-white py-3 shadow-md transition-all group-hover:flex">
//                   {d.children.map((ch, i) => (
//                     <Link
//                       key={i}
//                       href={ch.link ?? "#"}
//                       className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black no-underline"
//                     >
//                       {/* image */}
//                       {ch.iconImage && (
//                         <Image src={ch.iconImage} alt="item-icon" />
//                       )}
//                       {/* item */}
//                       <span className="whitespace-nowrap pl-3">
//                         {ch.label}
//                       </span>
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </Link>
//           ))}
//         </div>
//         {/* navitems */}
//       </section>

//       {/* right side data */}
//       {session?.user ? (
//         <section className="hidden md:flex items-center gap-2">
//           <button
//             className="w-full max-w-[200px] rounded-xl border-2 border-neutral-400 px-4 py-2 text-neutral-400 transition-all hover:border-black hover:text-black/90"
//             onClick={() =>
//               signOut({
//                 redirect: true,
//                 callbackUrl: `${window.location.origin}/`,
//               })
//             }
//           >
//             Signout
//           </button>
//         </section>
//       ) : (
//         <section className="hidden md:flex items-center gap-2">
//           <button
//             className="h-fit rounded-xl border-2 border-neutral-400 px-4 py-2 text-neutral-400 transition-all hover:border-black hover:text-black/90"
//             onClick={() => {
//              signIn();
//             }}
//           >
//             Login
//           </button>

//           <button
//             className="h-fit rounded-xl border-2 border-neutral-400 px-4 py-2 text-neutral-400 transition-all hover:border-black hover:text-black/90"
//             onClick={() => {
//               router.push("./signup")
//             }}
//           >
//             Register
//           </button>
//         </section>
//       )}

//       <button onClick={openSideMenu} className="cursor-pointer text-4xl md:hidden">
//         ☰
//       </button>
//     </div>
//   );
// }

// function MobileNav({ closeSideMenu }: { closeSideMenu: () => void }) {
//   const router = useRouter();
//   const { data: session } = useSession();
//   return (
//     <div className="fixed left-0 top-0 flex h-full min-h-screen w-full justify-end bg-black/60 md:hidden">
//       <div className="h-full w-[65%] bg-white px-4 py-4">
//         <section className="flex justify-end">
//           <button onClick={closeSideMenu} className="cursor-pointer text-4xl">
//             ✕
//           </button>
//         </section>
//         <div className="flex flex-col text-base gap-2 transition-all">
//           {navItems.map((d, i) => (
//             <SingleNavItem
//               key={i}
//               label={d.label}
//               iconImage={d.iconImage}
//               link={d.link}
//             >
//               {d.children}
//             </SingleNavItem>
//           ))}
//         </div>

//         {session?.user ? (
//           <section className="flex flex-col gap-8 mt-4 items-center">
//             <button
//               className="w-full max-w-[200px] rounded-xl border-2 border-neutral-400 px-4 py-2 text-neutral-400 transition-all hover:border-black hover:text-black/90"
//               onClick={() =>
//                 signOut({
//                   redirect: true,
//                   callbackUrl: `${window.location.origin}/log-in`,
//                 })
//               }
//             >
//               Signout
//             </button>
//           </section>
//         ) : (
//           <section className="flex flex-col gap-8 mt-4 items-center">
//             <button
//               className="w-full max-w-[200px] rounded-xl border-2 border-neutral-400 px-4 py-2 text-neutral-400 transition-all hover:border-black hover:text-black/90"
//               onClick={() => {
//                signIn();
//                 closeSideMenu();
//               }}
//             >
//               Login
//             </button>

//             <button
//               className="w-full max-w-[200px] rounded-xl border-2 border-neutral-400 px-4 py-2 text-neutral-400 transition-all hover:border-black hover:text-black/90"
//               onClick={() => {
//               router.push("./signup")
//                 closeSideMenu();
//               }}
//             >
//               Register
//             </button>
//           </section>
//         )}
//       </div>
//     </div>
//   );
// }

// function SingleNavItem(d: NavItem) {
//   const [isItemOpen, setItem] = useState(false);

//   function toggleItem() {
//     setItem(!isItemOpen);
//   }

//   return (
//     <Link
//       onClick={toggleItem}
//       href={d.link ?? "#"}
//       className="relative px-2 py-3 transition-all no-underline"
//     >
//       <p className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:text-black">
//         <span>{d.label}</span>
//         {d.children && (
//           <span className={`text-xs transition-all ${isItemOpen ? "rotate-180" : ""}`}>
//             ▼
//           </span>
//         )}
//       </p>

//       {/* dropdown */}
//       {isItemOpen && d.children && (
//         <div className="w-auto flex-col gap-1 rounded-lg bg-white py-3 transition-all flex">
//           {d.children.map((ch, i) => (
//             <Link
//               key={i}
//               href={ch.link ?? "#"}
//               className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black no-underline"
//             >
//               {/* image */}
//               {ch.iconImage && <Image src={ch.iconImage} alt="item-icon" />}
//               {/* item */}
//               <span className="whitespace-nowrap pl-3">{ch.label}</span>
//             </Link>
//           ))}
//         </div>
//       )}
//     </Link>
//   );
// }
"use client"
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

<link
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
  rel="stylesheet"
></link>;

export default function Header() {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          
          <button className="text-4xl font-bold text-orange-600" onClick={ () => {
              router.push("/")
            }}>Logo</button>
          <nav className="flex space-x-6">
            <Link href="/explore" className="text-gray-600 hover:text-black text-3xl">
              Explore
            </Link>
            <Link href="/problems" className="text-black font-semibold text-3xl">
              Problems
            </Link>
            <Link href="/contest" className="text-gray-600 hover:text-black text-3xl">
              Contest
            </Link>
            <Link href="/discuss" className="text-gray-600 hover:text-black text-3xl">
              Discuss
            </Link>
            <Link href="/interview" className="text-gray-600 hover:text-black text-3xl">
              Interview
            </Link>
            <Link href="/store" className="text-gray-600 hover:text-black text-3xl">
              Store
            </Link>
          </nav>
        </div>
          {/* right side data */}
      {session?.user ? (
        <section className="hidden md:flex items-center gap-2">
          <button
            className="w-full max-w-[200px] rounded-xl border-2 border-neutral-400 px-4 py-2 text-neutral-400 transition-all hover:border-black hover:text-black/90"
            onClick={() =>
              signOut({
                redirect: true,
                callbackUrl: `${window.location.origin}/`,
              })
            }
          >
            Signout
          </button>
        </section>
      ) : (
        <section className="hidden md:flex items-center gap-2">
          <button
            className="h-fit rounded-xl border-2 border-neutral-400 px-4 py-2 text-neutral-400 transition-all hover:border-black hover:text-black/90"
            onClick={() => {
             signIn();
            }}
          >
            Login
          </button>

          <button
            className="h-fit rounded-xl border-2 border-neutral-400 px-4 py-2 text-neutral-400 transition-all hover:border-black hover:text-black/90"
            onClick={() => {
              router.push("./signup")
            }}
          >
            Register
          </button>
        </section>
      )}

      
       
      </div>
    </header>
  );
}
