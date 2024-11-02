"use client";

import { LOGIN_ROUTE, PROFILE_ROUTE } from "@/constants/routes";
import { UserAuth } from "@/lib/firebase/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const useAuthentication = () => {
  const { user } = UserAuth();
  const router = useRouter();
  useEffect(() => {
    if (user.isLogin) {
      router.push(PROFILE_ROUTE);
    }
    else {
        router.push(LOGIN_ROUTE)
    }
  }, [user]);
};

export default useAuthentication;
