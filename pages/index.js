import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;
  return (
    <>
      <Head>
        <title>vdaubry.eth</title>
        <meta property='og:title' content='vdaubry.eth' />
        <meta property='og:description' content='Web3 fullstack builder' />
        <meta
          property='og:image'
          content='https://vdaubry.eth.limo/avatar.jpg'
        />
        <meta name='description' content='Web3 fullstack builder' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <body className='bg-gradient-to-r from-blue-500 to-indigo-500 xl:h-screen'>
        <div className='flex items-center justify-center w-full py-8'>
          <h1 className='text-7xl text-orange-500 font-extrabold mb-8'>
            Gm fren
          </h1>
        </div>

        <div className='grid grid-cols-1 xl:grid-cols-2 xl:px-60'>
          {/* Column 1 */}
          <div>
            <div className='flex items-center justify-center'>
              <div className='border-2 bg-white border-black rounded-lg shadow text-center'>
                <Image
                  className='rounded-lg mt-4 ml-4 mr-4'
                  src='./avatar.jpg'
                  alt=''
                  width='300'
                  height='300'
                />
                <div className='p-5 text-black'>
                  <Link href='https://vdaubry.eth.limo'>
                    <h5 className='text-lg font-bold tracking-tight'>
                      vdaubry.eth
                    </h5>
                  </Link>
                  <Link href='https://lenster.xyz/u/vincentdaubry'>
                    <h5 className='text-lg font-bold tracking-tight'>
                      vincentdaubry.lens
                    </h5>
                  </Link>
                  <hr className='h-px my-6 bg-gray-200 border-0 dark:bg-gray-700'></hr>
                  <div className='text-base font-normal'>
                    <p className='mb-1'>Web3 fullstack dev</p>
                    <p className='mb-1'>Technical advisor</p>
                    <p className='mb-1'>Token design & tokenomics</p>
                  </div>

                  <div className='flex justify-center mt-8'>
                    <Link className='mr-2' href='https://github.com/vdaubry/'>
                      <Image
                        className='rounded-lg'
                        src='./github.png'
                        alt=''
                        width='30'
                        height='30'
                      ></Image>
                    </Link>
                    <Link
                      className='mr-2 mt-1'
                      href='https://twitter.com/vdaubry'
                    >
                      <Image
                        className='rounded-lg'
                        src='./twitter.png'
                        alt=''
                        width='30'
                        height='30'
                      ></Image>
                    </Link>
                    <Link
                      className='mr-2'
                      href='https://lenster.xyz/u/vincentdaubry'
                    >
                      <Image
                        className='rounded-lg'
                        src='./lenster.svg'
                        alt=''
                        width='30'
                        height='30'
                      ></Image>
                    </Link>
                    <Link
                      className='mr-2'
                      href='https://www.linkedin.com/in/vincent-daubry-74937428/'
                    >
                      <Image
                        className='rounded-lg'
                        src='./linkedin.png'
                        alt=''
                        width='30'
                        height='30'
                      ></Image>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            {/* Column 2 */}
            <div className='flex justify-center mt-8 xl:mt-0'>
              <div className='text-white'>
                <div className='px-20 xl:px-0'>
                  <p className='text-center xl:text-left text-2xl w-full font-extrabold bg-clip-text mb-8'>
                    I love to turn ideas into code, on public blockchains.
                  </p>
                </div>

                <div className='px-8 xl:px-0'>
                  <div className='mb-8'>
                    <h5 className='text-2xl text-orange-500 font-bold mb-4'>
                      🛠 As Founder & CTO:
                    </h5>

                    <p className='flex'>
                      <Link className='mr-2' href='https://nextory.com/'>
                        <Image
                          className='rounded-lg'
                          src='./youboox.jpg'
                          alt=''
                          width='100'
                          height='100'
                        ></Image>
                      </Link>
                      <span className=''>
                        {" "}
                        3M€ raised, acquired by Nextory{" "}
                      </span>
                    </p>
                    <p className='flex mt-2'>
                      <Link className='mr-2' href='https://corporico.fr/'>
                        <Image
                          className='rounded-lg'
                          src='./corpogames.png'
                          alt=''
                          width='100'
                          height='100'
                        ></Image>
                      </Link>
                      <span className='pt-0'>1M€ ARR </span>
                    </p>
                  </div>

                  <div className='mb-8'>
                    <h5 className='text-2xl text-orange-500 font-bold mb-2'>
                      🧙‍♂️ As Web3 fullstack engineer:
                    </h5>
                    <p className='mb-3'>
                      <Link
                        className='underline'
                        href='https://turtleshell.xyz/'
                      >
                        TurtleShell - On-Chain Firewall
                      </Link>
                    </p>
                    <p>
                      <Link
                        className='underline'
                        href='https://www.bcf-lab.com/'
                      >
                        BCFLab - Asset Tokenisation blockchain
                      </Link>
                    </p>
                  </div>
                  <div className='mb-8'>
                    <h5 className='text-2xl text-orange-500 font-bold mb-2'>
                      👨‍💻 Side projects:
                    </h5>
                    <p>
                      <Link
                        className='underline'
                        href='https://github.com/vdaubry/MiniDca'
                      >
                        MiniDca
                      </Link>
                    </p>
                    <p>
                      <Link
                        className='underline'
                        href='https://github.com/vdaubry/MiniVesting'
                      >
                        MiniVesting
                      </Link>
                    </p>
                    <p>
                      <Link
                        className='underline'
                        href='https://github.com/vdaubry/ethlisbon'
                      >
                        Slice (ETHGlobal Lisbon 1st prize winner)
                      </Link>
                    </p>
                    <p>
                      <Link
                        className='underline'
                        href='https://github.com/ikigai-labs-xyz/ethglobal-paris'
                      >
                        Decentralised Circuit Breaker (ETHGlobal Paris 1st prize
                        winner)
                      </Link>
                    </p>
                  </div>

                  <div className='mb-8'>
                    <h5 className='text-2xl text-orange-500 font-bold mb-2'>
                      💸 Other:
                    </h5>
                    <p className='mt-3'>
                      Partner @{" "}
                      <Link
                        className='underline'
                        href='https://whiteloop.capital/en/'
                      >
                        White Loop Capital
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
