import AboveTitle from "@/components/elements/abovetitle";
import Highlight from "@/components/elements/highlight";
import MainTitle from "@/components/elements/maintitle";
import Paragraph from "@/components/elements/paragraph";
import Title from "@/components/elements/title";
import Image from "next/image";

export default function RsvpProject() {
  return (
    <>
      <AboveTitle text="An Easy Way To RSVP" />
      <MainTitle gradientText="RSVP" text="Project" />
      <Paragraph>
        This was a small project made for a family member of my partner. It is a
        simple form hosted on a <Highlight>Digital Ocean</Highlight> droplet,
        that allows people to RSVP to the wedding. It includes a form made using
        the colour scheme and style that was requested. It is built on{" "}
        <Highlight>Laravel</Highlight> and has a backend{" "}
        <Highlight>Admin Dashboard</Highlight> that allows the couple to login
        and check who has responded. It uses a simple{" "}
        <Highlight>Session Authorisation</Highlight> system to allow them to get
        into easily and review who has responded.
      </Paragraph>
      <Title text="Project Image:" isLeft={true} />
        <Image
          src="/project-images/rsvp/form-image.png"
          alt="Image showcasing the RSVP form"
          sizes="100vw"
          width={0}
          height={0}
          className="w-96 h-auto mx-auto"
        />
    </>
  );
}
