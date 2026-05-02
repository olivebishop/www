import { connection } from "next/server";
import { FooterClient } from "./footer-client";

/** Resolves current year after opting into request time (required for Cache Components prerender). */
export default async function Footer() {
  await connection();
  return <FooterClient year={new Date().getFullYear()} />;
}
