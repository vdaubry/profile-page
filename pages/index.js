import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import LandingHeader from "@/components/LandingHeader";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Title</title>
        <meta name="description" content="Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-max lg:h-screen">
        <div className="pt-16 text-center">
          <h1 className="text-5xl md:text-7xl text-orange-500 dark:text-white font-extrabold mb-8">
            Gm fren
          </h1>
        </div>

        <div class="container mx-auto max-w-7xl">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div class="flex justify-center text-6xl mt-8">
              <div className="max-w-sm border-2 bg-white border-black rounded-lg shadow text-center">
                <Image
                  className="rounded-lg mx-auto mt-4 ml-4 mr-4"
                  src="/avatar.jpg"
                  alt=""
                  width="300"
                  height="300"
                />

                <div class="p-5 text-black">
                  <Link href="vdaubry.eth">
                    <h5 class="text-lg font-bold tracking-tight">
                      vdaubry.eth
                    </h5>
                  </Link>
                  <Link href="vdaubry.eth">
                    <h5 class="text-lg font-bold tracking-tight">
                      vincentdaubry.lens
                    </h5>
                  </Link>
                  <hr class="h-px my-6 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                  <div className="text-base font-normal">
                    <p class="mb-1">Web3 fullstack dev</p>
                    <p class="mb-1">Technical advisor</p>
                    <p class="mb-1">Token deisgn & tokenomics</p>
                  </div>

                  <div className="flex justify-center mt-8">
                    <Link className="mr-2" href="https://github.com/vdaubry/">
                      <Image
                        className="rounded-lg mx-auto"
                        src="/github.png"
                        alt=""
                        width="30"
                        height="30"
                      ></Image>
                    </Link>
                    <Link
                      className="mr-2 mt-1"
                      href="https://twitter.com/vdaubry"
                    >
                      <Image
                        className="rounded-lg mx-auto"
                        src="/twitter.png"
                        alt=""
                        width="30"
                        height="30"
                      ></Image>
                    </Link>
                    <Link
                      className="mr-2"
                      href="https://lenster.xyz/u/vincentdaubry"
                    >
                      <Image
                        className="rounded-lg mx-auto"
                        src="/lenster.svg"
                        alt=""
                        width="30"
                        height="30"
                      ></Image>
                    </Link>
                    <Link
                      className="mr-2"
                      href="https://www.linkedin.com/in/vincent-daubry-74937428/"
                    >
                      <Image
                        className="rounded-lg mx-auto"
                        src="/linkedin.png"
                        alt=""
                        width="30"
                        height="30"
                      ></Image>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex justify-center lg:justify-start text-6x mt-8">
              <div className="lg:w-full w-9/12 text-white">
                <p className="text-2xl font-extrabold bg-clip-text mb-4">
                  I love to turn ideas into code, on public blockchains.
                </p>

                <div className="mb-8">
                  <h5 className="text-2xl text-orange-500 mb-2">
                    🛠 As a founder:
                  </h5>

                  <p className="flex">
                    <Link className="mr-2" href="https://nextory.com/">
                      <Image
                        className="rounded-lg mx-auto bg-white mt-2 lg:mt-0"
                        src="/youboox.jpg"
                        alt=""
                        width="100"
                        height="100"
                      ></Image>
                    </Link>
                    <span className="lg:pt-2">
                      CTO & Founder - 3M€ raised, Acquired by Nextory{" "}
                    </span>
                  </p>
                  <p className="flex mt-2">
                    <Link className="mr-2" href="https://nextory.com/">
                      <Image
                        className="rounded-lg mx-auto"
                        src="/corpogames.png"
                        alt=""
                        width="100"
                        height="100"
                      ></Image>
                    </Link>
                    <span className="pt-0">CTO & Founder - 1M€ ARR </span>
                  </p>
                </div>

                <div className="mb-8">
                  <h5 className="text-2xl text-orange-500">
                    🧙‍♂️ As a Web3 Tech Advisor:
                  </h5>
                  <p>
                    DeFi / Technical advisor @ UpDownStreet : Real Estate
                    Tokenisation (Hackathon winner){" "}
                  </p>
                  <p>Web3 dev @ People4People : kickstarter for Ukraine</p>
                  <p>
                    Partner @{" "}
                    <Link
                      className="underline"
                      href="https://whiteloop.capital/en/"
                    >
                      WhitelooCapital
                    </Link>
                  </p>
                </div>

                <div className="mb-8">
                  <h5 className="text-2xl text-orange-500">
                    👨‍💻 Side projects:
                  </h5>
                  <p>
                    <Link
                      className="underline"
                      href="https://github.com/vdaubry/MiniDca"
                    >
                      MiniDca
                    </Link>
                  </p>
                  <p>
                    <Link
                      className="underline"
                      href="https://github.com/vdaubry/MiniVesting"
                    >
                      MiniVesting
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
