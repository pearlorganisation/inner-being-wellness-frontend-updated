import { redirect } from "next/navigation";

export default function ProtocolRedirect() {
  redirect("/offerings#protocols");
}