import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profile from "public/images/profile/Profile3.jpeg";
import TransitionEffect from "@/components/TransitionEffect";
import ProgrammingSkills from "@/components/NewSkills_spare";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";


export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="Learn more" />
      </Head>
      <TransitionEffect />
      <main className={`flex w-full items-center justify-center dark:text-light`}>
        <Layout className="pt-16">
          <div className="grid w-full grid-cols-2 gap-16 sm:gap-8 md:grid-cols-1 lg:grid-cols-1">
            <div className="order-1 md:order-1 flex justify-center">
              <Image
                className="h-auto max-w-full rounded-2xl"
                src={profile}
                alt="Soujanya"
                width={300}
                height={300}
                priority
              />
            </div>
            <div className="order-2 md:order-2 flex flex-col justify-center">
              <div className="mb-4 text-base font-bold uppercase text-dark/75 dark:text-light/75" style={{ color: '#5888FF' }}>
                About me
              </div>
              <p className="font-medium text-justify">
                Hi, I&apos;m <strong style={{ color: '#5888FF' }}>Soujanya</strong>, a Data enthusiast with over six years of diverse experience across various industries. 
                My expertise lies in the art of decoding, analyzing, and visualizing complex data, uncovering unique insights 
                from each dataset. I've tackled intricate data challenges in manufacturing, e-commerce, finance, and 
                digital marketing, realizing the profound impact data has on shaping business strategies. 
                Proficient in Python and SQL, I'm dedicated to transforming raw data into actionable knowledge.
              </p>
              <p className="my-4 font-medium text-justify">
                I'm committed to delivering 
                data-driven solutions that create a tangible impact. For more, please download my resume or reach out via email. 
                I'd love to connect with you.
              </p>
              <div className="flex flex-row justify-between items-center">
              <div className="flex items-center bg-dark rounded-lg border-2 border-solid p-2.5 px-6 text-lg capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light md:p-2 md:px-4 md:text-base">
                <Link
                  href="Soujanya.pdf"
                  target="_blank"
                  download
                  className="flex items-center"
                >
                  Download Resume
                  <LinkArrow className="ml-1 !w-6 md:!w-4" />
                </Link>
              </div>
              <div className="flex items-center bg-dark rounded-lg border-2 border-solid p-2.5 px-6 text-lg capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light md:p-2 md:px-4 md:text-base">
                <Link href="mailto:soujanya.cheruvu19@gmail.com">Contact</Link>
              </div>
            </div>
            </div>
          </div>
          <ProgrammingSkills />
        </Layout>
        
      </main>
    </>
  );
}
