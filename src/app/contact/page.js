import ContactPage from "@/views/contact/ContactPage";

export const metadata = { title: "Contact" };
export default async function Page({ searchParams }) {
  const { interest } = await searchParams;
  const initialInterest = Array.isArray(interest) ? interest[0] : interest || "";
  return <ContactPage initialInterest={initialInterest} />;
}
