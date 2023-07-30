import { GenerateLinkForm } from "@/components/GenerateLinkForm";

export default function Home() {
  return (
    <section className="h-[100vh] flex items-center justify-center">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col isolate overflow-hidden px-6 py-24  sm:rounded-3xl sm:px-24 xl:py-32">
          <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Get notified when we’re launching.
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300">
            Reprehenderit ad esse et non officia in nulla. Id proident tempor
            incididunt nostrud nulla et culpa.
          </p>

          <GenerateLinkForm />
        </div>
      </div>
    </section>
  );
}
