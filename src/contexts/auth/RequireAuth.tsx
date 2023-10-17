import { useEffect, useState } from "react";
import { SignIn } from "../../pages/Login/Signin";
import Unauthorized from "../../pages/Unauthorized";

export const RequireAuth = ({
  children,
  allowedProfiles = [],
}: {
  children: JSX.Element;
  allowedProfiles?: string[];
}) => {
  const [loading, setLoading] = useState(true);
  const [userProfile, setUserProfile] = useState<string | null>(null);

  useEffect(() => {
    const profile = localStorage.getItem("userProfile");
    setUserProfile(profile);
    setLoading(false);
  }, []);

  if (loading) {
    return null;
  }

  if (!userProfile) {
    return <SignIn />;
  }

  if (allowedProfiles.length && !allowedProfiles.includes(userProfile)) {
    return <Unauthorized />;
  }

  return children;
};
