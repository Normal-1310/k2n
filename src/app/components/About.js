import Image from "next/image"
export default function About() {
    return(
        <div>
            <section className="">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                    <div className="mx-auto mb-8 lg:mb-16">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">About K2n Team</h2>
                        <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">K2N is a dedicated team of developers creating high-quality apps and websites with innovative technology and precise design. We work closely with clients to deliver exceptional solutions that meet and exceed expectations. Choose K2N for your digital success.</p>
                    </div> 
                    <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        <div className="text-center text-gray-500 dark:text-gray-400">
                            <Image width="144" height="144" className="mx-auto mb-4 w-36 h-36 rounded-full hover:rounded-lg hover:scale-125" src="/khaoo.jpg" alt="Khao Avatar"/>
                            {/* <Image width="144" height="144" className="mx-auto mb-4 rounded-full hover:rounded-lg hover:scale-125 ring-2 ring-white hover:ring-transparent" src="./Khaoo.jpg" alt="Khao Avatar"/> */}
                            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <a href="#">Khao Seekakun</a>
                            </h3>
                            <p>Co-founder/Developers</p>
                            <ul className="flex justify-center mt-4 space-x-4">
                                <li>
                                    <a href="https://www.facebook.com/KhaoSeekakun" className="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="text-center text-gray-500 dark:text-gray-400">
                            <Image width="144" height="144" className="mx-auto mb-4 w-36 h-36 rounded-full hover:rounded-lg hover:scale-125" src="/nopp.jpg" alt="Nop Avatar"/>
                            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <a href="#">Nop Nopparat</a>
                            </h3>
                            <p>Co-founder/Developers</p>
                            <ul className="flex justify-center mt-4 space-x-4">
                                <li>
                                    <a href="https://www.facebook.com/nopparat1310/" className="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="text-center text-gray-500 dark:text-gray-400">
                            <Image width="144" height="144" className="mx-auto mb-4 w-36 h-36 rounded-full hover:rounded-lg hover:scale-125" src="/tonn.jpg" alt="Ton Avatar"/>
                            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <a href="#">Ton Koranit</a>
                            </h3>
                            <p>Co-founder/Developers</p>
                            <ul className="flex justify-center mt-4 space-x-4 ">
                                <li>
                                    <a href="https://www.facebook.com/TonKunGz.t" className="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="text-center text-gray-500 dark:text-gray-400">
                            <Image width="144" height="144" className="mx-auto mb-4 w-36 h-36 rounded-full hover:rounded-lg hover:scale-125" src="/moss.jpg" alt="Moss Avatar"/>
                            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <a href="#">Moss Phattaradon</a>
                            </h3>
                            <p>Co-founder/Consultant</p>
                            <ul className="flex justify-center mt-4 space-x-4">
                                <li>
                                    <a href="https://www.facebook.com/profile.php?id=100012139095553" className="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        
                    </div>  
                </div>
            </section>
        </div>
    )
}