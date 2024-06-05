import "./globals.css";

export const metadata = {
  title: "Three Social Midea",
  description: "Author Shariful Islam",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
