// import FreedomPage from "@/views/freedom/FreedomPage";

// export const metadata = { title: "Freedom from Resistance" };

// export default function Page() {
//   return <FreedomPage />;
// }


// new update


import FreedomPage from "@/views/freedom/FreedomPage";
import { freedomPageData } from "@/data/freedomPageData";

export const metadata = {
  title: freedomPageData.meta.title,
  description: freedomPageData.meta.description,
};

export default function Page() {
  return <FreedomPage />;
}
