"use client";

import { useUser } from "@clerk/nextjs";

const WelcomeMessage = () => {
  const { isLoaded, user } = useUser();

  return (
    <div className="space-y-2 mb-4">
      <h2 className="text-2xl lgtext-4xl text-white font-medium">
        Welcome Back {isLoaded ? ", " : " "}{user?.firstName} 👋
      </h2>
      <p className="text-sm lg:text-base text-[#89b6fd]">
        This is your Financial Overview Report
      </p>
    </div>
  );
};

export default WelcomeMessage;
