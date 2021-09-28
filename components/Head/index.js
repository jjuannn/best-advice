import NextHead from "next/head";

export default function Head() {
  return (
    <NextHead>
      <meta chardet="utf-8" />
      <meta
        name="description"
        content="Application where you can make posts and comments"
      />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <title>Best Advice</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
        rel="stylesheet"
      ></link>
    </NextHead>
  );
}
