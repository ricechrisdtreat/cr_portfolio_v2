import React from "react";
import Head from "next/head";
import NavBar from "./NavBar";
import { Box } from "@chakra-ui/react";

export default function ContainerBlock({ children, ...customMeta }) {
  const meta = {
    title: "Chris Rice: Developer Portfolio",
    description: `v2 of portfolio page, recreated using next.js and Chakra UI`,
    icon: "/gramophone-record.ico",
    ...customMeta,
  };
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name="description" />
        <link rel="icon" href={meta.icon} />
      </Head>
      <NavBar />
      <Box bg="primary" minH="100vh" textColor={"white"}>
        <div>{children}</div>
      </Box>
      {/* <main position="relative">
        <div>{children}</div>
      </main> */}
    </>
  );
}
