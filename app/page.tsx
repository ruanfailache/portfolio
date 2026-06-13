import { redirect } from "next/navigation";
import { cookies, headers } from "next/headers";
import { LOCALES, type Locale } from "@/lib/i18n";

export default async function RootPage() {
  const [cookieStore, reqHeaders] = await Promise.all([cookies(), headers()]);

  const saved = cookieStore.get("rf-lang")?.value;
  if (saved && LOCALES.includes(saved as Locale)) {
    redirect(`/${saved}`);
  }

  const acceptLang = reqHeaders.get("accept-language") ?? "";
  const preferred = acceptLang.split(",")[0]?.split(/[-_]/)[0]?.toLowerCase();
  if (preferred && LOCALES.includes(preferred as Locale)) {
    redirect(`/${preferred}`);
  }

  redirect("/en");
}
