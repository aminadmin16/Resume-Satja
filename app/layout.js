import { Noto_Sans_Thai } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

const notoSansThai = Noto_Sans_Thai({
  display: "swap",
  subsets: ["latin", "thai"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Satja Chaiseanpha Resume",
  description: "Software Developer resume of Satja Chaiseanpha (Fluke)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body className={notoSansThai.className}>{children}</body>
    </html>
  );
}
