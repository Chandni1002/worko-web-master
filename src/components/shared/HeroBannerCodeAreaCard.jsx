import { EllipsisVerticalIcon, ListBulletIcon } from '@heroicons/react/24/solid';
import { threeImageOverlappingWithoutText, twoImageOverlappingWithoutText } from "../../data/heroBannerData.js";
import ImageOverlappingCricle from './ImageOverlappingCricle.jsx';

function HeroBannerCodeAreaCard({ mainClasses, tags, tag1Class, tag2Class, dot1Class, dot2Class, title, para, subTask, imageData }) {
    return (
        <div className={mainClasses}>
            <div className='flex justify-between w-full'>
                <div className='flex justify-start items-center'>
                    {tags.tag1 &&
                        <div className={tag1Class}>
                            <div className={dot1Class}></div>
                            {tags.tag1}
                        </div>}
                    {tags.tag2 &&
                        <div className={tag2Class}>
                            <div className={dot2Class}></div>
                            {tags.tag2}
                        </div>}
                </div>
                <EllipsisVerticalIcon className='h-6 text-gray-600' />
            </div>

            <div className='text-start'>
                <h4 className="text-xs font-bold">{title}</h4>
                <p className="text-[0.6rem] text-gray-500">{para}</p>
            </div>

            <div className='w-full border border-gray-700 py-2 px-1 rounded-lg'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center justify-center'>
                        <ListBulletIcon className='h-5 text-gray-500 me-2' />
                        <h4 className="text-[0.55rem] text-gray-500">{title}</h4>
                    </div>
                    <p className="text-[0.6rem] text-gray-500">{subTask.value}/{subTask.total}</p>
                </div>
                <div className='relative w-full h-1 bg-gray-800 rounded-lg mt-2 overflow-hidden'>
                    <div className={`w-4/6 h-1 ${subTask.color}`}></div>
                </div>
            </div>

            <div className='w-full h-[0.05rem] bg-gray-800'></div>

            <div className='flex justify-between w-full'>
                <div className='flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-gray-500 me-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                    </svg>
                    <span className='text-[0.66rem] text-gray-500'>12</span>
                </div>
                <div className='w-[74px]'>
                    <ImageOverlappingCricle data={imageData} />
                </div>
            </div>
        </div>
    )
}

export default HeroBannerCodeAreaCard;