import React, { useState } from "react";
import Inspector from "@open-rpc/inspector";
import { MDXProvider } from "@mdx-js/react";

const Layout: React.FC = ({children}) => {
  return (
    <>
      <MDXProvider components={{ Inspector }}>
        <h1>POMPLAMOOSE</h1>
        {children}
      </MDXProvider>
    </>
  );
};

export default Layout;
