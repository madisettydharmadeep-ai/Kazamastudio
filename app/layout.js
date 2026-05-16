import "./globals.css";

export const metadata = {
  title: "Kazama Studio | Modern Internet Products",
  description:
    "An independent creative agency focused on building quiet, cozy, and deeply human web experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
