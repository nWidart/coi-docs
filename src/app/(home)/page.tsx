import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center text-center flex-1">
      <h1 className="text-2xl font-bold mb-4">Welcome to the unofficial Captain of Industry Modding documentation!</h1>

      <section className="mt-10">
        <div className="mx-auto max-w-2xl rounded-2xl border bg-card p-6 shadow-sm">
          <h2 className="text-lg font-semibold">Ready to start modding?</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Jump into the docs for setup steps, concepts, and practical examples.
          </p>

          <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
                href="/docs/getting-started/"
                className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90"
            >
              Read the documentation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
