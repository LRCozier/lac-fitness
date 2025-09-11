'use client';

import { useEffect } from "react";
import { usePathname } from "next/navigation";

//include in the root layout to affect all pages
const ScrollToTop = () => {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;