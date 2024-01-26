import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Explore portfolio" />
      </Head>
      <Layout>
        <article className=" flex flex-col min-h-screen text-center text-dark dark:text-light sm:items-start">
          <div>
            <h1 className="text-7xl font-serif font-normal" style={{ color: '#5888FF' }}>
              Soujanya Cheruvu
            </h1>
            <h2 className="mt-3 text-4xl font-serif font-normal" style={{ color: '#504B4B' }}>
              Data Scientist
            </h2>
            <p className="mt-3 text-lg" style={{ color: '#504B4B' }}>
              Collect, process, analyse, predict, and implement end-to-end AI/ML solutions for informed decision-making.
            </p>
          </div>
          <div className="mt-6 flex flex-col items-center">
            <Link
              href="mailto:soujanya.cheruvu19@gmail.com"
              target="_blank"
              className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light md:p-2 md:px-4 md:text-base`} 
            >
              Get in touch 
            </Link>
          </div>
        </article>
      </Layout>
    </>
  );
}
