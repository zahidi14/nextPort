import Btn from "@/components/button/Btn";
import Fetch from "@/components/home/fetch";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Fetch />
      <Link href="/about">
        <Btn label="Access Bio-data" />
      </Link>
    </>
  );
}
