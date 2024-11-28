'use client'
import Link from "next/link";
import React from 'react';
import LinkedInProfileBadge from 'react-linkedin-profile-badge';

export default function Home() {
  return (
    <main className="flex min-h-screen justify-center items-center">
      <div className="w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        <div className="mb-3 ml-3 mr-3">
          Enter a website URL as the route to get started
          <Link className="block underline" href="/https://example.com">
            {"https://chat-to-web.vercel.app/example.com"}
          </Link>
        </div>
        <div className="flex flex-col md:flex-row gap-4 w-full max-w-4xl mx-auto p-4">
          <div className="pt-2 pb-1 pl-2 pr-1  bg-white rounded-lg">
            <LinkedInProfileBadge
              profileId="usamatariq180"
              theme="dark"
              size="large"
              orientation="horizontal" 
              version="v1" 
              locale="en_US" 
            />
          </div>

        </div>
      </div>
    </main>
  );
}
