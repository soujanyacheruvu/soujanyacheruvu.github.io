import Head from "next/head";
import Layout from "@/components/Layout";
import Link from "next/link";

export default function Articles() {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Explore articles..." />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light overflow-hidden">
        <Layout className="pt-10">
          <ul className="grid grid-cols-3 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            <li className="max-w-lg py-4 border-b border-gray-300 w-full text-left">
              <Link href="/">
                <p className="text-xl font-semibold hover:underline dark:text-light" style={{ color: '#FF914D' }}>
                  The Significance of Data Collection
                </p>
              </Link>
              <p className="mt-2 text-gray-600">
                This article emphasizes the significance of data collection in the digital age. 
                It highlights how data collection is essential for informed decision-making, the different methods and types 
                of data, and its role in various industries. 
              </p>
            </li>

            <li className="max-w-lg py-4 border-b border-gray-300 w-full text-left">
              <Link href="https://devdreaming.com/blogs/create-pagination-component-reactjs">
                <p className="text-xl font-semibold hover:underline dark:text-light" style={{ color: '#FF914D' }}>
                  Role of Data Analysis and AI in RealEstate
                </p>
              </Link>
              <p className="mt-2 text-gray-600 justify-center">
                This article delves into the impact of data analysis and AI on the real estate industry. 
                It covers common algorithms, the importance of data analysis, problems AI addresses, and spotlights 
                10 companies 
              </p>
            </li>
            <li className="max-w-lg py-4 border-b border-gray-300 w-full text-left">
              <Link href="/">
                <p className="text-xl font-semibold hover:underline dark:text-light" style={{ color: '#FF914D' }}>
                  The Significance of Data Collection
                </p>
              </Link>
              <p className="mt-2 text-gray-600">
                This article emphasizes the significance of data collection in the digital age. 
                It highlights how data collection is essential for informed decision-making, the different methods and types 
                of data, and its role in various industries. 
              </p>
            </li>

            <li className="max-w-lg py-4 border-b border-gray-300 w-full text-left">
              <Link href="https://devdreaming.com/blogs/create-pagination-component-reactjs">
                <p className="text-xl font-semibold hover:underline dark:text-light" style={{ color: '#FF914D' }}>
                  Role of Data Analysis and AI in RealEstate
                </p>
              </Link>
              <p className="mt-2 text-gray-600 justify-center">
                This article delves into the impact of data analysis and AI on the real estate industry. 
                It covers common algorithms, the importance of data analysis, problems AI addresses, and spotlights 
                10 companies 
              </p>
            </li>
            <li className="max-w-lg py-4 border-b border-gray-300 w-full text-left">
              <Link href="/">
                <p className="text-xl font-semibold hover:underline dark:text-light" style={{ color: '#FF914D' }}>
                  The Significance of Data Collection
                </p>
              </Link>
              <p className="mt-2 text-gray-600">
                This article emphasizes the significance of data collection in the digital age. 
                It highlights how data collection is essential for informed decision-making, the different methods and types 
                of data, and its role in various industries. 
              </p>
            </li>

            <li className="max-w-lg py-4 border-b border-gray-300 w-full text-left">
              <Link href="https://devdreaming.com/blogs/create-pagination-component-reactjs">
                <p className="text-xl font-semibold hover:underline dark:text-light" style={{ color: '#FF914D' }}>
                  Role of Data Analysis and AI in RealEstate
                </p>
              </Link>
              <p className="mt-2 text-gray-600 justify-center">
                This article delves into the impact of data analysis and AI on the real estate industry. 
                It covers common algorithms, the importance of data analysis, problems AI addresses, and spotlights 
                10 companies 
              </p>
            </li>
            <li className="max-w-lg py-4 border-b border-gray-300 w-full text-left">
              <Link href="/">
                <p className="text-xl font-semibold hover:underline dark:text-light" style={{ color: '#FF914D' }}>
                  The Significance of Data Collection
                </p>
              </Link>
              <p className="mt-2 text-gray-600">
                This article emphasizes the significance of data collection in the digital age. 
                It highlights how data collection is essential for informed decision-making, the different methods and types 
                of data, and its role in various industries. 
              </p>
            </li>

            <li className="max-w-lg py-4 border-b border-gray-300 w-full text-left">
              <Link href="https://devdreaming.com/blogs/create-pagination-component-reactjs">
                <p className="text-xl font-semibold hover:underline dark:text-light" style={{ color: '#FF914D' }}>
                  Role of Data Analysis and AI in RealEstate
                </p>
              </Link>
              <p className="mt-2 text-gray-600 justify-center">
                This article delves into the impact of data analysis and AI on the real estate industry. 
                It covers common algorithms, the importance of data analysis, problems AI addresses, and spotlights 
                10 companies 
              </p>
            </li>

            
          </ul>
        </Layout>
      </main>
    </>
  );
}
