import { redirect } from "next/navigation";

export function GET() {
  // redirect to the home page
  redirect("/");
}
