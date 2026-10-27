// app/viewallprotocols/page.jsx
// Route: /viewallprotocols
// Reads the SAME data as the offerings page: siteData.offeringsPage.services
import ProtocolsExplorer from "@/components/offerings/ProtocolsExplorer";
import { siteData } from "@/data/siteData";

export const metadata = {
  title: "All Frequency Protocols",
  description: "Explore every frequency protocol in one place.",
};

// Used only if services are missing from siteData, so the page is never empty.
const FALLBACK = [
  ["chakra-balancing", "Chakra Balancing Frequency"],
  ["holistic-health", "Holistic Health Frequency"],
  ["prosperity", "Prosperity Frequency"],
  ["cell-harmony", "Cell Harmony Frequency"],
  ["prostate-harmony", "Prostate Harmony Frequency"],
  ["vagus", "Vagus Frequency"],
  ["mental-clarity", "Mental Clarity Frequency"],
  ["detoxify", "Detoxify Frequency"],
  ["negative-entities-clearance", "Negative Entities Clearance Frequency"],
].map(([id, title]) => ({ id, title }));

export default function ViewAllProtocolsPage() {
  const services = siteData?.offeringsPage?.services;
  const protocols = Array.isArray(services) && services.length ? services : FALLBACK;
  return <ProtocolsExplorer protocols={protocols} />;
}