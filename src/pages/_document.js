import { Html, Head, Main, NextScript } from "next/document";
import Header from "/components/header";
import Footer from "/components/footer";
import MaintenanceMode from "/components/MaintenanceMode";

export default function Document() {
  const isMaintenanceMode = process.env.MAINTENANCE_MODE === "true";

  return (
    <Html lang="en">
      <Head />
        <body>
          <Header />
          <Main />
          <Footer />
          <NextScript />
        </body>
    </Html>
  );
}
