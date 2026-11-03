import AdminConsultationsPage from "@/views/admin/AdminConsultationsPage";

export const metadata = {
  title: "Admin | Inner Being Wellness",
};

// section (URL ka hissa) -> asli page component
// Naya page banate jao to yahan jodte jao.
const PAGES = {
  appointments: AdminConsultationsPage,
  // clients: AdminClientsPage,
};

export default async function Page({ params }) {
  const { section } = await params;
  const Component = PAGES[section];

  // Asli page ban chuka hai to wahi dikhao
  if (Component) return <Component />;

  // Baaki sections ke liye placeholder
  const title = section.replace(/-/g, " ");

  return (
    <div style={{ padding: "clamp(16px,3vw,34px)" }}>
      <h1
        style={{
          margin: 0,
          fontFamily: "var(--font-cormorant, Georgia), serif",
          fontSize: 36,
          textTransform: "capitalize",
          color: "#241B4B",
        }}
      >
        {title}
      </h1>
      <p style={{ marginTop: 8, color: "#7B7590" }}>This section is coming soon.</p>
    </div>
  );
}