import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default function Home() {
  const cookieStore = cookies();
  // const isAuthenticated = cookieStore.get("auth-token");

  // if (!isAuthenticated) {
  //   redirect("/login");
  // }

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto p-6 space-y-6">
        <h1 className="text-3xl font-bold">Docker Dashboard</h1>
        <p className="text-muted-foreground">Manage your Docker images and repositories</p>
      </main>
    </div>
  );
}