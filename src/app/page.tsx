import Image from "next/image";
import styles from "./page.module.css";
import Preview from "@/components/home/preview/preview";
import About from "@/components/home/about/about";
import Benefits from "@/components/home/benefits/benefits";
import Filter from "@/components/home/filter/filter";
import Schedule from "@/components/home/schedule/schedule";
import Notes from "@/components/home/notes/notes";
import Reviews from "@/components/home/reviews/reviews";
import Contacts from "@/components/home/contacts/contacts";

export default function Home() {
  return (
    <main className={styles.main}>
      <Preview></Preview>
      <About></About>
      <Benefits></Benefits>
      <Filter></Filter>
      <Schedule></Schedule>
      <Notes></Notes>
      <Reviews></Reviews>
      <Contacts></Contacts>
    </main>
  );
}
