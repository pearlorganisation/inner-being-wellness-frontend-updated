import CustomerFeedback from "@/components/feedback/CustomerFeedback";

export const metadata = { title: "Share Your Feedback | Inner Being Wellness" };

export default function Page() {
  return (
    <div className="w-full bg-[#FAF7F2]">
      <CustomerFeedback />
    </div>
  );
}