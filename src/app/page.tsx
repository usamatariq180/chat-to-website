'use client'
import Link from "next/link";
import React from 'react';
import { Github, Mail, Building } from 'lucide-react';

export default function Home() {
  const githubData = {
    username: 'usamatariq180',
    name: 'Usama Tariq',
    bio: 'Full Stack Developer | AI Application Engineer',
    company: 'Reactive Space',
    email: 'usamatariq180@gmail.com',
  };
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
          <a href="https://github.com/usamatariq180/">
            <div className="flex-1 rounded-lg overflow-hidden shadow-lg bg-[#0d1117] text-white">
              <div className="border-b border-gray-700 p-4">
                <div className="flex items-center gap-2">
                  <Github className="h-6 w-6" />
                  <h2 className="text-xl font-bold">GitHub Profile</h2>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={`https://github.com/${githubData.username}.png`}
                    alt="GitHub Avatar"
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <h3 className="font-bold text-xl">{githubData.name}</h3>
                    <p className="text-gray-400">@{githubData.username}</p>
                  </div>
                </div>

                <p className="text-gray-300 mb-4">{githubData.bio}</p>

                <div className="space-y-2 text-gray-300">
                  {githubData.company && (
                    <div className="flex items-center gap-2">
                      <Building className="h-4 w-4 text-gray-400" />
                      <span>{githubData.company}</span>
                    </div>
                  )}
                  {githubData.email && (
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-gray-400" />
                      <span>{githubData.email}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
}
