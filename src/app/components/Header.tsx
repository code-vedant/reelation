"use client";

import React from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

function Header() {
  const { data: session } = useSession();

  const handleSignout = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div>
      <button onClick={handleSignout}>Signout</button>
      {session ? (
        <div>Welcome</div>
      ) : (
        <div>
          <Link href="/login">Login</Link>
          <Link href="/register">Sign up</Link>
        </div>
      )}
    </div>
  );
}

export default Header;
