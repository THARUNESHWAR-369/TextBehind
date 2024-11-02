"use client"

import { useContext, createContext, useState, useEffect } from "react";
import {
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../firebaseConfig";
import Loader from "@/components/loader";

const AuthContext = createContext<{ user: UserT; setUser: (user: UserT) => void; googleSignIn: () => void; logOut: () => void }>({
  user: {
    user: null, isLogin: false,
    photoURL: ""
  },
  setUser: () => {},
  googleSignIn: () => {},
  logOut: () => {},
});

// { user: null, setUser: (user: any) => {}, googleSignIn: () => {}, logOut: () => {} }

type UserT = {
  photoURL: string;
  user: any;
  isLogin: boolean;
  
}

export const AuthContextProvider = ({ children }: any) => {
  const [loading, setLoading] = useState<boolean>(true)
  const initialState: UserT = {
    user: null,
    isLogin: false,
    photoURL: ""
  }
  const [user, setUser] = useState<UserT>(initialState);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const logOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    const subscriber = auth.onAuthStateChanged(userState => {
      if (userState) {
        setUser({ user: userState, isLogin: true, photoURL: userState?.photoURL || "" });
      } else {
        setUser({ user: null, isLogin: false, photoURL: "" });
      }
      setLoading(false)
    });
    return subscriber;
  }, [])

  return (
    <AuthContext.Provider value={{ user, setUser, googleSignIn, logOut }}>
      {loading && (<Loader />)}
      {!loading && children}
    </AuthContext.Provider>
  );
};
export const UserAuth = () => {
  return useContext(AuthContext);
};