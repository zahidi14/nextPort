import Link from "next/link";

import Btn from "@/components/button/Btn";

import Pero from "@/components/about/pero";

const About = () => {
  return (
    <>
      <Pero />

      <Link href="/project">
        <Btn label="Mission Log" />
      </Link>
    </>
  );
};
export default About;
