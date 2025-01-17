import Link from "next/link"

export default function Page() {
  return (
    <main>
      <h1>Welcome to Jayden's Restaurant</h1>
      <Link href="/">Home</Link>
      <span> | </span>
      <Link href="/menu/appetizers">Appetizers</Link>
      <span> | </span>
      <Link href="/menu/entrees">Entrees</Link>
    </main>

  );
}