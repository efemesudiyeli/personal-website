import {
  Layout,
  UserCheck,
  Brush,
  SearchCheck,
} from "../node_modules/lucide-react";
import { useTranslations } from "next-intl";
export default function MyArea() {
  const t = useTranslations("myAreas");
  return (
    <div className="my-10">
      <h2 className="text-3xl font-extrabold font-sans mb-2">{t("header")}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="bg-gradient-to-tl dark:from-black dark:to-gray-500/10 from-black/20 to-white rounded-lg shadow-2xl p-5">
          <div className="flex items-center gap-x-4 mb-2">
            <Layout />
            <h3 className="font-bold font-sans text-3xl text-[#fb233b]">
              {t("webDevelopment.header")}
            </h3>
          </div>
          <p>{t("webDevelopment.description")}</p>
        </div>
        <div className="bg-gradient-to-tr dark:from-black dark:to-gray-500/10 from-black/20 to-white  rounded-lg shadow-2xl p-5">
          <div className="flex items-center gap-x-4 mb-2">
            <UserCheck />
            <h3 className="font-bold font-sans text-3xl text-blue-500">
              {t("UIUX.header")}
            </h3>
          </div>
          <p>{t("UIUX.description")}</p>
        </div>
        <div className="bg-gradient-to-bl dark:from-black dark:to-gray-500/10 from-black/20 to-white  rounded-lg shadow-2xl p-5">
          <div className="flex items-center gap-x-4 mb-2">
            <Brush />
            <h3 className="font-bold font-sans text-3xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
              {t("webDesign.header")}
            </h3>
          </div>
          <p>{t("webDesign.description")}</p>
        </div>
        <div className="bg-gradient-to-br dark:from-black dark:to-gray-500/10 from-black/20 to-white  rounded-lg shadow-2xl p-5">
          <div className="flex items-center gap-x-4 mb-2">
            <SearchCheck />
            <h3 className="font-bold font-sans text-3xl text-green-500">
              {t("SEO.header")}
            </h3>
          </div>
          <p>{t("SEO.description")}</p>
        </div>
      </div>
    </div>
  );
}
