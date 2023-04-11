import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  return <main className="text-emerald-900 text-3xl">Hello</main>;
}
