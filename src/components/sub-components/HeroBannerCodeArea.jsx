import { HomeIcon, ChartBarIcon, CubeIcon, UserGroupIcon, DocumentIcon, SwatchIcon, TagIcon, Cog8ToothIcon, BellIcon, ChevronDownIcon, Bars3Icon, MagnifyingGlassIcon, CalendarIcon } from '@heroicons/react/24/outline';
import { LockClosedIcon, EllipsisHorizontalIcon, ListBulletIcon } from '@heroicons/react/24/solid';
import ImageOverlappingCricle from '../shared/ImageOverlappingCricle';
import { imageOverlappingWithText, twoImageOverlappingWithoutText } from "../../data/heroBannerData.js";
import HeroBannerCodeAreaSmallSubHeading from '../shared/HeroBannerCodeAreaSmallSubHeading.jsx';
import HeroBannerCodeAreaCard from '../shared/HeroBannerCodeAreaCard.jsx';

function HeroBannerCodeArea() {
    return (
        <div className='w-full h-[640px]'>
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
                            <ImageOverlappingCricle data={imageOverlappingWithText} />
                            <button className='text-[0.65rem] bg-[#24242a] px-3 py-1 rounded-lg flex items-center'>
                                <Cog8ToothIcon className='h-4 text-gray-400 me-1' />
                                Invite
                            </button>
                        </div>
                    </div>
                    <div className='p-5 w-full flex justify-between items-center border-b-2 border-gray-800 h-[49px]'>
                        <div className='w-[197px] h-[28px] flex cursor-type items-center bg-[#1b1b21] px-3 py-2 rounded-lg border border-gray-800'>
                            <MagnifyingGlassIcon className='h-4 text-gray-600 me-1' />
                            <div className='text-[0.65rem] text-gray-600'>
                                Search any task
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
                                <CalendarIcon className='h-4 text-gray-400 me-1' />
                                Calender
                            </div>
                            <div className='w-4 border-s-2 border-gray-800 ps-2 me-3 cursor-pointer'>
                                <EllipsisHorizontalIcon className='h-6 text-gray-400' />
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-start items-start w-full gap-5 p-5'>
                        <div className='w-full flex justify-start items-center flex-col gap-2.5'>
                            <HeroBannerCodeAreaSmallSubHeading mainClasses="text-xs flex justify-between items-center w-full bg-[#181821] px-3 py-1 rounded-lg border border-gray-800" circleClasses="w-4 h-4 aspect-square flex justify-center items-center ms-2  bg-gray-800 text-[0.5rem] rounded-full" title="To Do" addBtn="true" />

                            <HeroBannerCodeAreaSmallSubHeading mainClasses="text-xs flex justify-between items-center w-full bg-[#181821] px-3 py-1 rounded-lg border border-gray-800" circleClasses="w-4 h-4 aspect-square flex justify-center items-center ms-2  bg-gray-800 text-[0.5rem] rounded-full" title="To Do" addBtn="false" />

                            <HeroBannerCodeAreaCard mainClasses="text-xs flex justify-between items-center w-full bg-[#181821] p-3 rounded-lg gap-3 flex-col" tags={{ tag1: "Review", tag2: "Testing" }} tag1Class="text-[0.6rem] py-1 px-2 border border-[#a68af850] rounded-2xl bg-[#4b1d9229] flex items-center me-2 text-[#a68af8]" tag2Class="text-[0.6rem] py-1 px-2 border border-[#fd9b2850] rounded-2xl bg-[#fd9b283d] flex items-center text-[#fd9b28]" dot1Class="me-2 w-1 h-1 rounded-full bg-[#a68af8]" dot2Class="me-2 w-1 h-1 rounded-full bg-[#fd9b28]" title="Testing report" para="Reviewing dashboard menu for the maily product" subTask={{value: 2, total: 10, color: "bg-slate-400"}} imageData={twoImageOverlappingWithoutText}/>

                            <HeroBannerCodeAreaCard mainClasses="text-xs flex justify-between items-center w-full bg-[#181821] p-3 rounded-lg gap-3 flex-col" tags={{ tag1: "Review", tag2: "Testing" }} tag1Class="text-[0.6rem] py-1 px-2 border border-[#a68af850] rounded-2xl bg-[#4b1d9229] flex items-center me-2 text-[#a68af8]" tag2Class="text-[0.6rem] py-1 px-2 border border-[#fd9b2850] rounded-2xl bg-[#fd9b283d] flex items-center text-[#fd9b28]" dot1Class="me-2 w-1 h-1 rounded-full bg-[#a68af8]" dot2Class="me-2 w-1 h-1 rounded-full bg-[#fd9b28]" title="Testing dashboard" para="Reviewing dashboard menu for the maily product" subTask={{value: 2, total: 10, color: "bg-slate-400"}} imageData={twoImageOverlappingWithoutText}/>

                        </div>
                        <div className='w-full md:flex hidden justify-start items-center flex-col gap-2.5'>
                            <HeroBannerCodeAreaSmallSubHeading mainClasses="text-xs flex justify-between items-center w-full bg-[#181821] px-3 py-1 rounded-lg border border-gray-800" circleClasses="w-4 h-4 aspect-square flex justify-center items-center ms-2  bg-[#fabe24] text-[0.5rem] rounded-full text-black" title="Doing" addBtn="true" />

                            <HeroBannerCodeAreaSmallSubHeading mainClasses="text-xs flex justify-between items-center w-full bg-[#181821] px-3 py-1 rounded-lg border border-gray-800" circleClasses="w-4 h-4 aspect-square flex justify-center items-center ms-2  bg-[#fabe24] text-[0.5rem] rounded-full text-black" title="Doing" addBtn="false" />

                            <HeroBannerCodeAreaCard mainClasses="text-xs flex justify-between items-center w-full bg-[#181821] p-3 rounded-lg gap-3 flex-col" tags={{ tag1: "Wire frame", tag2: "UI Design" }} tag1Class="text-[0.6rem] py-1 px-2 border border-gray-600 rounded-2xl bg-gray-800 flex items-center me-2" tag2Class="text-[0.6rem] py-1 px-2 border border-[#60A5F950] rounded-2xl bg-[#1e3a8a29] flex items-center text-[#60A5F9]" dot1Class="me-2 w-1 h-1 rounded-full bg-gray-300" dot2Class="me-2 w-1 h-1 rounded-full bg-[#60A5F9]" title="UI Design" para="This page showing user list for this product" subTask={{ value: 2, total: 10, color: "bg-[#fabe24]" }} imageData={imageOverlappingWithText} />
                        </div>
                        <div className='w-full lg:flex hidden justify-start items-center flex-col gap-2.5'>
                            <HeroBannerCodeAreaSmallSubHeading mainClasses="text-xs flex justify-between items-center w-full bg-[#181821] px-3 py-1 rounded-lg border border-gray-800" circleClasses="w-4 h-4 aspect-square flex justify-center items-center ms-2  bg-[#a68af8] text-[0.5rem] rounded-full text-black" title="In Review" addBtn="true" />

                            <HeroBannerCodeAreaSmallSubHeading mainClasses="text-xs flex justify-between items-center w-full bg-[#181821] px-3 py-1 rounded-lg border border-gray-800" circleClasses="w-4 h-4 aspect-square flex justify-center items-center ms-2  bg-[#a68af8] text-[0.5rem] rounded-full text-black" title="In Review" addBtn="false" />

                            <HeroBannerCodeAreaCard mainClasses="text-xs flex justify-between items-center w-full bg-[#181821] p-3 rounded-lg gap-3 flex-col" tags={{ tag1: "Wire frame", tag2: "UI Design" }} tag1Class="text-[0.6rem] py-1 px-2 border border-[#a68af850] rounded-2xl bg-[#4b1d9229] flex items-center me-2 text-[#a68af8]" tag2Class="text-[0.6rem] py-1 px-2 border border-[#60A5F950] rounded-2xl bg-[#1e3a8a29] flex items-center text-[#60A5F9]" dot1Class="me-2 w-1 h-1 rounded-full bg-gray-300" dot2Class="me-2 w-1 h-1 rounded-full bg-[#60A5F9]" title="FAQ list" para="This page showing FAQ for this product" subTask={{ value: 2, total: 10, color: "bg-[#a68af8]" }} imageData={imageOverlappingWithText} />
                            
                            <HeroBannerCodeAreaCard mainClasses="text-xs flex justify-between items-center w-full bg-[#181821] p-3 rounded-lg gap-3 flex-col" tags={{ tag1: "Wire frame", tag2: "UI Design" }} tag1Class="text-[0.6rem] py-1 px-2 border border-[#a68af850] rounded-2xl bg-[#4b1d9229] flex items-center me-2 text-[#a68af8]" tag2Class="text-[0.6rem] py-1 px-2 border border-[#60A5F950] rounded-2xl bg-[#1e3a8a29] flex items-center text-[#60A5F9]" dot1Class="me-2 w-1 h-1 rounded-full bg-gray-300" dot2Class="me-2 w-1 h-1 rounded-full bg-[#60A5F9]" title="Help center" para="This page showing help center for this product" subTask={{ value: 2, total: 10, color: "bg-[#a68af8]" }} imageData={imageOverlappingWithText} />
                        </div>
                        <div className='w-full lg:flex hidden justify-start items-center flex-col gap-2.5'>
                            <HeroBannerCodeAreaSmallSubHeading mainClasses="text-xs flex justify-between items-center w-full bg-[#181821] px-3 py-1 rounded-lg border border-gray-800" circleClasses="w-4 h-4 aspect-square flex justify-center items-center ms-2  bg-[#a2e435] text-black text-[0.5rem] rounded-full" title="Done" addBtn="true" />

                            <HeroBannerCodeAreaSmallSubHeading mainClasses="text-xs flex justify-between items-center w-full bg-[#181821] px-3 py-1 rounded-lg border border-gray-800" circleClasses="w-4 h-4 aspect-square flex justify-center items-center ms-2  bg-[#a2e435] text-black text-[0.5rem] rounded-full" title="Done" addBtn="false" />

                            <HeroBannerCodeAreaCard mainClasses="text-xs flex justify-between items-center w-full bg-[#181821] p-3 rounded-lg gap-3 flex-col" tags={{ tag1: "Design system"}} tag1Class="text-[0.6rem] py-1 px-2 border border-[#a68af850] rounded-2xl bg-[#4b1d9229] flex items-center me-2 text-[#a68af8]" tag2Class="text-[0.6rem] py-1 px-2 border border-[#60A5F950] rounded-2xl bg-[#1e3a8a29] flex items-center text-[#60A5F9]" dot1Class="me-2 w-1 h-1 rounded-full bg-gray-300" dot2Class="me-2 w-1 h-1 rounded-full bg-[#60A5F9]" title="Foundation color" para="All about Foundation color for make the designer easy to work" subTask={{ value: 2, total: 10, color: "bg-[#a2e435]" }} imageData={twoImageOverlappingWithoutText} />

                            <HeroBannerCodeAreaCard mainClasses="text-xs flex justify-between items-center w-full bg-[#181821] p-3 rounded-lg gap-3 flex-col" tags={{ tag1: "Branding"}} tag1Class="text-[0.6rem] py-1 px-2 border border-gray-600 rounded-2xl bg-gray-800 flex items-center me-2" tag2Class="text-[0.6rem] py-1 px-2 border border-[#60A5F950] rounded-2xl bg-[#1e3a8a29] flex items-center text-[#60A5F9]" dot1Class="me-2 w-1 h-1 rounded-full bg-gray-300" dot2Class="me-2 w-1 h-1 rounded-full bg-[#60A5F9]" title="Visual Identity" para="Branding for the brand" subTask={{ value: 2, total: 10, color: "bg-[#a2e435]" }} imageData={twoImageOverlappingWithoutText} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroBannerCodeArea;