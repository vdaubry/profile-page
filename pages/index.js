import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>vdaubry.eth</title>
        <meta property="og:title" content="vdaubry.eth" />
        <meta property="og:description" content="Web3 fullstack builder" />
        <meta
          property="og:image"
          content="https://vdaubry.eth.limo/avatar.jpg"
        />
        <meta name="description" content="Web3 fullstack builder" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-max lg:h-screen">
        <div className="pt-16 text-center">
          <h1 className="text-5xl md:text-7xl text-orange-500 font-extrabold mb-8">
            Gm fren
          </h1>
        </div>

        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="flex justify-center text-6xl mt-8">
              <div className="max-w-sm border-2 bg-white border-black rounded-lg shadow text-center">
                <Image
                  className="rounded-lg mx-auto mt-4 ml-4 mr-4"
                  src="./avatar.jpg"
                  alt=""
                  width="300"
                  height="300"
                />

                <div className="p-5 text-black">
                  <Link href="https://vdaubry.eth.limo">
                    <h5 className="text-lg font-bold tracking-tight">
                      vdaubry.eth
                    </h5>
                  </Link>
                  <Link href="https://lenster.xyz/u/vincentdaubry">
                    <h5 className="text-lg font-bold tracking-tight">
                      vincentdaubry.lens
                    </h5>
                  </Link>
                  <hr className="h-px my-6 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                  <div className="text-base font-normal">
                    <p className="mb-1">Web3 fullstack dev</p>
                    <p className="mb-1">Technical advisor</p>
                    <p className="mb-1">Token design & tokenomics</p>
                  </div>

                  <div className="flex justify-center mt-8">
                    <Link className="mr-2" href="https://github.com/vdaubry/">
                      <Image
                        className="rounded-lg mx-auto"
                        src="./github.png"
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
                        src="./twitter.png"
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
                        src="./lenster.svg"
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
                        src="./linkedin.png"
                        alt=""
                        width="30"
                        height="30"
                      ></Image>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-start text-6x mt-8">
              <div className="lg:w-full w-9/12 text-white">
                <p className="text-2xl font-extrabold bg-clip-text mb-8">
                  I love to turn ideas into code, on public blockchains.
                </p>

                <div className="mb-8">
                  <h5 className="text-2xl text-orange-500 mb-4">
                    🛠 As Founder & CTO:
                  </h5>

                  <p className="flex">
                    <Link className="mr-2" href="https://nextory.com/">
                      <Image
                        className="rounded-lg"
                        src="./youboox.jpg"
                        alt=""
                        width="100"
                        height="100"
                      ></Image>
                    </Link>
                    <span className=""> 3M€ raised, acquired by Nextory </span>
                  </p>
                  <p className="flex mt-2">
                    <Link className="mr-2" href="https://corporico.fr/">
                      <Image
                        className="rounded-lg mx-auto"
                        src="./corpogames.png"
                        alt=""
                        width="100"
                        height="100"
                      ></Image>
                    </Link>
                    <span className="pt-0">1M€ ARR </span>
                  </p>
                </div>

                <div className="mb-8">
                  <h5 className="text-2xl text-orange-500 mb-2">
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
                      White Loop Capital
                    </Link>
                  </p>
                </div>

                <div className="mb-8">
                  <h5 className="text-2xl text-orange-500 mb-2">
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
