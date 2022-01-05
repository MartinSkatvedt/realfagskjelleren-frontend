import React from "react";
import { useReactOidc } from "@axa-fr/react-oidc-context";

const DashBoard: React.FC = () => {
  const { oidcUser } = useReactOidc();
  const { profile } = oidcUser;

  return (
    <div>
      Dashboard
      <div>
        {profile.given_name} {profile.family_name}
      </div>
    </div>
  );
};

export default DashBoard;
