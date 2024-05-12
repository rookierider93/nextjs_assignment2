import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-gray-300 text-indigo-950">
      <body>
        <div className="bg-gray-300 text-indigo-950 text-center mt-10">
          {children}
        </div>
      </body>
    </html>
  );
}
