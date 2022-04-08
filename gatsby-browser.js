import React, { useState, useEffect } from "react"
import { check_session } from "./src/utils/auth"

const SessionCheck = ({ children }) => {
  const [loading, stillLoading] = useState(true);
  useEffect(() => check_session(() => stillLoading(false)));
  return loading === false && <>{children}</>
};

export const wrapRootElement = ({ element }) => (
  <SessionCheck>{element}</SessionCheck>
);
