import Link from "next/link";

export const Hero = () => {
  return (
    <section className="container mx-auto py-12 text-center border-b">
      <div>
        <h1 className="text-2xl md:text-4xl">
          الصفحة الرئيسية للموقع الإلكتروني بلبريس
        </h1>
        <p className="my-6 text-lg">
          Par Stoph{" "}
          <Link
            href="https://twitter.com/JeffreySunny1"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-500"
          >
            Twitter
          </Link>
          
        </p>
        <p className="text-center">😎😎😎</p>
      </div>
    </section>
  );
};
