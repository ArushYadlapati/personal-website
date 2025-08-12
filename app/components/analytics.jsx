"use client";

import { GoogleTagManager } from "@next/third-parties/google";
import { useEffect, useState } from "react";

export default function Analytics({ gtmId }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient || !gtmId) {
    return null;
  }

  return <GoogleTagManager gtmId={gtmId} />;
}
