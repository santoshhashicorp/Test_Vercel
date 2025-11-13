export const metadata = {
  title: 'Test Vercel Project',
  description: 'Test project for connecting with Vercel',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
