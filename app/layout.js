import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

export const metadata = {
  title: "Satja Chaiseanpha Resume",
  description: "Software Developer resume of Satja Chaiseanpha (Fluke)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}
