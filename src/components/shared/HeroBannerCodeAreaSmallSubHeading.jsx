import { EllipsisVerticalIcon, PlusIcon } from '@heroicons/react/24/solid';

function HeroBannerCodeAreaSmallSubHeading({ mainClasses, title, circleClasses, addBtn }) {
    return (
        <div className={mainClasses}>
            {
                addBtn === "true" ?
                    <>
                        <div className='flex justify-start items-center'>
                            <div>{title}</div>
                            <div className={circleClasses}>2</div>
                        </div>
                        <EllipsisVerticalIcon className='h-6 text-gray-600' />
                    </>
                    :
                    <>
                        <div className='flex justify-center items-center w-full py-1'>
                            Add Task
                            <PlusIcon className='h-3 text-gray-600 ms-3' />
                        </div>
                    </>
            }
        </div>
    )
}

export default HeroBannerCodeAreaSmallSubHeading;