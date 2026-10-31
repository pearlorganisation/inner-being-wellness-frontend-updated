import ReflectionsPage from "@/views/reflections/ReflectionsPage";
import { reflectionsPage } from "@/data/reflectionsData";

export const metadata = {
  title: reflectionsPage.meta.title,
  description: reflectionsPage.meta.description,
};

export default function Page() {
  return <ReflectionsPage />;
}