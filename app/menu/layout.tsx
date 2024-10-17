import Link from 'next/link';

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <header>
      <h1>Welcome to Jayden's Restaurant</h1>
      <Link href="/">Home</Link>
      <span> | </span>
      <Link href="/menu/appetizers">Appetizers</Link>
      <span> | </span>
      <Link href="/menu/entrees">Entrees</Link>
      </header>
        <div>
          <br />
          {children}
        </div>
      </section>
  );
}