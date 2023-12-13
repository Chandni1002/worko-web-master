import { Fragment } from "react";

function ImageOverlappingCricle({ data }) {

    const images = data.map((image, i) => {
        if (image.img && i === 0) {
            return (
                <Fragment key={i}>
                    <img src={image.url} alt="" className='h-6 rounded-full z-[1] rounded-full object-cover aspect-square' />
                </Fragment>
            )
        } else if (image.img && i === 1) {
            return (
                <Fragment key={i}>
                    <img src={image.url} alt="" className='h-6 rounded-full absolute top-0 left-5 shadow-[0px_0px_1px_3px_black] z-[2] rounded-full object-cover aspect-square' />
                </Fragment>
            )
        } else if (image.img && i === 2) {
            return (
                <Fragment key={i}>
                    <img src={image.url} alt="" className='h-6 rounded-full z-[3] absolute top-0 left-10 shadow-[0px_0px_1px_3px_black] rounded-full object-cover aspect-square' />
                </Fragment>
            )
        } else {
            return (
                <Fragment key={i}>
                    <div className='h-6 aspect-square rounded-full bg-[#1b1b21] text-[0.65rem] flex justify-center items-center absolute top-0 left-14 shadow-[0px_0px_1px_3px_#00000050] z-[4]'>{image.url}</div>
                </Fragment>
            )
        }
    })

    return (
        <div className='flex justify-start relative'>
            {images}
        </div>
    )
}

export default ImageOverlappingCricle;