import Btn from "@/components/button/Btn";
import Input from "@/components/input/Input";
import TextArea from "@/components/input/TextArea";
import React from "react";

const Contact = () => {
  return (
    <div>
      {" "}
      <form
        className="form"
        id="form"
        action="https://www.freecodecamp.com/email-submit"
      >
        <Input type="text" placeholder=" " label="Name" />
        <Input type="email" placeholder=" " label="Email" />
        <TextArea type="text" placeholder=" " label="Message" />
        <div className="submit">
          <Btn type="submit" label="Launch" />
        </div>
      </form>
    </div>
  );
};

export default Contact;
