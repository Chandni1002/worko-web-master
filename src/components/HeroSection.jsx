import { SparklesIcon} from '@heroicons/react/24/outline';
import HeroBannerCodeArea from './sub-components/HeroBannerCodeArea';


function HeroSection() {
    return (
        <aside className='max-w-[1140px] min-h-min mx-auto mt-20'>
            <div className="h-[486px] flex items-center justify-between flex-col py-20" style={{ backgroundImage: "radial-gradient(38.7% 85.6% at 50% 100%,#7808ff 0%,rgba(3,6,13,0) 100%)" }}>
                <div className="flex items-center justify-between flex-col gap-y-8">
                    <button className="flex items-center bg-[#121218] text-xs py-2 px-4 rounded-full shadow-[inset_0px_0px_5px_rgba(225,225,225,0.1)]">
                        <SparklesIcon className='h-4 me-3' />
                        Made By Vite + React
                    </button>
                    <h1 className="text-center md:text-5xl sm:text-2xl text-xl font-medium text-slate-200">
                        The best platform for cross-<br /> <span className='text-gray-500'>functional work.</span>
                    </h1>
                    <p className='max-w-[640px] text-center sm:text-base text-sm font-light'>
                        Want better results in your organization? Worko helps teams get clarity, achieve greater impact, and scale to meet company goals.
                    </p>
                </div>
                <div className='flex justify-center items-center'>
                    <button className='me-2 text-base font-semibold bg-[#7808ff] text-white rounded-full px-5 py-3'>Get started</button>
                    <button className='ms-2 text-base font-semibold hover:bg-[#933aff20] text-white rounded-full px-5 py-3'>See how it works</button>
                </div>
            </div>
            <HeroBannerCodeArea />
            {/* <div className='w-full h-[640px]'>
                <div className='bg-[##09090f] flex justify-between items-center w-full py-2 px-4 border border-1 border-gray-900 rounded-t-lg'>
                    <div className='flex'>
                        <div className='w-3 aspect-square bg-[#ee6a5f] rounded-full mx-1'></div>
                        <div className='w-3 aspect-square bg-[#f4be4f] rounded-full mx-1'></div>
                        <div className='w-3 aspect-square bg-[#62c555] rounded-full mx-1'></div>
                    </div>
                    <div className='hidden md:flex'>
                        <button className="flex items-center bg-[#121218] text-xs py-1 px-10 rounded-md shadow-[inset_0px_0px_5px_rgba(225,225,225,0.1)] cursor-default">
                            <LockClosedIcon className='h-4 me-3 text-gray-600' />
                            <span className='cursor-text text-xs text-gray-600 font-semibold'>https://www.worko.io/workspace</span>
                        </button>
                    </div>
                    <div></div>
                </div>
                <div className='border border-1 border-gray-900 h-[598px] rounded-b-lg overflow-hidden flex'>
                    <div className='w-[72px] h-full hidden md:flex justify-between items-center flex-col border border-gray-900'>
                        <div className='flex justify-between items-center flex-col w-full'>
                            <div className='mt-6 mb-8'>
                                <img src="https://framerusercontent.com/images/6roiDdrqmas4HzNCgAEhhoNknA.png" alt="Worko" width={"24"} />
                            </div>
                            <div className=''>
                                <span className='uppercase text-[11px] text-gray-400'>MENU</span>
                            </div>
                            <div className='flex flex-col gap-y-5 mt-4'>
                                <HomeIcon className='h-4 text-gray-500' />
                                <ChartBarIcon className='h-4 text-gray-500' />
                                <CubeIcon className='h-4 text-gray-500' />
                                <UserGroupIcon className='h-4 text-gray-500' />
                                <DocumentIcon className='h-4 text-gray-500' />
                                <div className='bg-[#ffffff10] p-2 rounded-md'>
                                    <SwatchIcon className='h-4 text-slate-300' />
                                </div>
                                <TagIcon className='h-4 text-gray-500' />
                            </div>
                        </div>
                        <div className='border-t-2 border-gray-900 w-full flex justify-center items-center flex-col'>
                            <div className='mt-4 text-center'>
                                <span className='text-[11px] text-gray-400'>Labels</span>
                            </div>
                            <div className='bg-[#b17af5] w-[6px] aspect-square rounded-full my-5'></div>
                            <div className='bg-[#a2e435] w-[6px] aspect-square rounded-full my-3'></div>
                            <div className='bg-[#fc8181] w-[6px] aspect-square rounded-full my-5'></div>
                        </div>
                    </div>
                    <div className='w-full h-full bg-[#121218]'>
                        <div className='flex justify-between items-center h-[46px] border-b-2 border-gray-800'>
                            <div className='flex items-center'>
                                <h3 className='px-4 md:border-e-2 md:border-gray-800 text-gray-400'>
                                    Workspace
                                </h3>
                                <h4 className='mx-5 text-xs md:flex hidden'>Tasks</h4>
                                <h4 className='text-xs text-gray-400 md:flex hidden'>Document</h4>
                            </div>
                            <div className='items-center md:flex hidden'>
                                <Cog8ToothIcon className='h-6 text-gray-400 mx-3 md:flex hidden' />
                                <div className='relative me-3'>
                                    <div className='w-1 aspect-square bg-[#fc8181] absolute top-[0.15rem] right-[0.3rem]'></div>
                                    <BellIcon className='h-6 text-gray-500' />
                                </div>
                                <div className='px-4 border-s-2 border-gray-800'>
                                    <img src="https://framerusercontent.com/images/MERjg8hlRV3juxAX1aCaOgI9KHo.png?scale-down-to=512" alt="" className='h-6 rounded-full' />
                                </div>
                                <p className='text-xs me-2'>
                                    Worko Profile
                                </p>
                                <ChevronDownIcon className='h-4 text-gray-500 me-4' />
                            </div>
                            <div className='items-center flex md:hidden'>
                                <Bars3Icon className="h-6 w-6 mx-4" />
                            </div>
                        </div>
                        <div className='p-5 w-full flex justify-between items-end border-b-2 border-gray-800'>
                            <div className='max-w-[338px] min-w-[200px]'>
                                <h3 className='font-bold mb-2'>
                                    Maily - Chrome Extentention
                                </h3>
                                <p className='text-[0.6rem] text-gray-500'>
                                    This project will be create awesome product. Will running around 6 months with superfast pace working but touch with awesome visual
                                </p>
                            </div>
                            <div className='w-[172px] h-[27px] md:flex justify-between items-center hidden'>
                                <div className='flex justify-start relative'>
                                    <img src="https://framerusercontent.com/images/r2WiR7zD0P2vUq9W2ZgEBYwYrQ.png?scale-down-to=512" alt="" className='h-6 rounded-full z-[1]' />
                                    <img src="https://framerusercontent.com/images/dd62dYQNyyynWEmy6n61i7CltYc.jpg?scale-down-to=512" alt="" className='h-6 rounded-full absolute top-0 left-5 shadow-[0px_0px_1px_3px_black] z-[2]' />
                                    <img src="https://framerusercontent.com/images/5AR5WjJxyvJ43labZsGKHxyRNaw.jpg?scale-down-to=512" alt="" className='h-6 w-6 rounded-full object-cover z-[3] absolute top-0 left-10 shadow-[0px_0px_1px_3px_black]' />
                                    <div className='h-6 aspect-square rounded-full bg-[#1b1b21] text-[0.65rem] flex justify-center items-center absolute top-0 left-14 shadow-[0px_0px_1px_3px_#00000050] z-[4]'>+4</div>
                                </div>
                                <button className='text-[0.65rem] bg-[#24242a] px-3 py-1 rounded-lg flex items-center'>
                                    <Cog8ToothIcon className='h-4 text-gray-400 me-1' />
                                    Invite
                                </button>
                            </div>
                        </div>
                        <div className='p-5 w-full flex justify-between items-center border-b-2 border-gray-800 h-[49px]'>
                            <div className='w-[197px]'>
                                <div className='flex items-center'>
                                    <MagnifyingGlassIcon className='h-4 text-gray-400 me-1' />
                                    <div className='text-[0.65rem] cursor-type'>
                                        Search any task
                                    </div>
                                </div>
                            </div>
                            <div className='w-[263px] md:flex justify-end items-center hidden text-[0.65rem]'>
                                <div className='me-3 flex items-center'>
                                    <ListBulletIcon className='h-4 text-gray-400 me-1' />
                                    List
                                </div>
                                <div className='px-3 border-x-2 border-gray-800'>
                                    <button className=' bg-[#24242a] px-3 py-1 rounded-lg flex items-center'>
                                        <Cog8ToothIcon className='h-4 text-gray-400 me-1' />
                                        Invite
                                    </button>
                                </div>
                                <div className='ms-2 me-4 flex items-center'>
                                    <CalendarIcon className='h-4 text-gray-400 me-1'/>
                                    Calender
                                </div>
                                <div className='w-4 border-s-2 border-gray-800 ps-2 me-3 cursor-pointer'>
                                    <EllipsisHorizontalIcon className='h-6 text-gray-400' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </aside>
    )
}

export default HeroSection