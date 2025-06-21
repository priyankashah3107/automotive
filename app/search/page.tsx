import { getSession } from "@/lib/auth";
import SearchClientPage from "./client-page";
import { cookies } from "next/headers";

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const sessionCookie = (await cookies()).get("session")?.value;
  const session = await getSession(sessionCookie);
  return <SearchClientPage session={session} searchParams={searchParams} />;
} 