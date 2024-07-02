"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export const Appbar = () => {
  const router = useRouter();
  const session = useSession();
  return (
    <div>
      <div className="min-h-screen w-full bg-gray-100">
        {/* hero */}
        <section className="mx-auto flex max-w-6xl flex-col-reverse gap-2 px-4 pb-12 transition-all md:flex-row md:gap-4">
          {/* left div */}
          <div className="flex flex-col items-center gap-6 pt-8 text-center md:w-1/2 md:items-start md:gap-10 md:pt-32 md:text-left">
            <h1 className="text-4xl font-semibold leading-tight md:text-6xl md:leading-none">
              Welcome to RCE
            </h1>

            <h3 className="text-neutral-600 md:max-w-[400px]">
              Find the best content for DSA
            </h3>

            <button className="w-fit rounded-xl border-2 border-black bg-black px-4 py-2 text-white transition-all hover:bg-transparent hover:text-black/90">
              Learn more
            </button>
          </div>

          {/* right div */}
        </section>
      </div>
      <br />
      {JSON.stringify(session)}
    </div>
  );
};
