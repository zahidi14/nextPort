import StarfieldCanvas from "@/components/backg/Background";
import "../styles/global.scss";

export const metadata = {
  title: "Zahidi Portfolio",
  description: "Personal Portfolio of Zahidi D Kusuma",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="bg">
          <StarfieldCanvas />
        </div>

        <main>
          <div className="container">{children}</div>
        </main>
      </body>
    </html>
  );
}
