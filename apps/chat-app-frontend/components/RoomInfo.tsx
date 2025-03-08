"use client"
import React, { useState } from 'react'
import { useRoom } from '../hooks/useRoom'
import { MdClose } from 'react-icons/md'
import { IoIosCamera } from 'react-icons/io'

const RoomInfo = () => {
    const { currRoom } = useRoom()
    const [showEditPhoto, setShowEditPhoto] = useState(false);
    if (!currRoom) return <></>
    return (
        <div className=' w-[55%] h-full bg-zinc-900 rounded-xl'>

            <div className=' flex items-center justify-start py-3 text-2xl gap-3 px-4 h-20 border-b border-b-gray-700'>
                <MdClose className=' text-2xl hover:text-gray-400 transition-all duration-100' />
                <div className=''>Room Info</div>
            </div>

            <div className=' flex flex-col items-center py-2 pt-4'>

                {/* Group Photo */}
                <div className=' bg- red-500 '>
                    <div onMouseEnter={() => { setShowEditPhoto(true) }}
                        onMouseLeave={() => { setShowEditPhoto(false) }}
                        className={` ${showEditPhoto && " cursor-pointer"} h-[150px] w-[150px] rounded-full bg-gray-400 relative`}>
                        {showEditPhoto && <div onClick={() => console.log("Click photo")} className={` ${currRoom.roomPic ? " text-white" : "text-white"} absolute h-full w-full  rounded-full  bg-black/30 backdrop-blur-[1px] backdrop-brightness-75 flex flex-col justify-center items-center`}>
                            <div className=' text-3xl'><IoIosCamera /></div>
                            <div className=' text-sm'>{currRoom.roomPic ? "Change" : "+ Add"} Room Pic</div>
                        </div>}
                        {!currRoom.roomPic ? <svg
                            viewBox="0 0 212 212"
                            height="150"
                            width="150"
                            preserveAspectRatio="xMidYMid meet"
                            className="xh8yej3 x5yr21d"
                            fill="none"
                        >
                            <title>default-group</title>
                            <path
                                d="M105.946 0.25C164.318 0.25 211.64 47.596 211.64 106C211.64 164.404 164.318 211.75 105.945 211.75C47.571 211.75 0.25 164.404 0.25 106C0.25 47.596 47.571 0.25 105.946 0.25Z"
                                fill="#DFE5E7"
                                className="xl21vc0"
                            />
                            <path
                                fill="currentColor"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M102.282 77.2856C102.282 87.957 93.8569 96.5713 83.3419 96.5713C72.827 96.5713 64.339 87.957 64.339 77.2856C64.339 66.6143 72.827 58 83.3419 58C93.8569 58 102.282 66.6143 102.282 77.2856ZM150.35 80.1427C150.35 89.9446 142.612 97.857 132.954 97.857C123.296 97.857 115.5 89.9446 115.5 80.1427C115.5 70.3409 123.296 62.4285 132.954 62.4285C142.612 62.4285 150.35 70.3409 150.35 80.1427ZM83.3402 109.428C68.5812 109.428 39 116.95 39 131.928V143.714C39 147.25 41.8504 148 45.3343 148H121.346C124.83 148 127.68 147.25 127.68 143.714V131.928C127.68 116.95 98.0991 109.428 83.3402 109.428ZM126.804 110.853C127.707 110.871 128.485 110.886 129 110.886C143.759 110.886 174 116.95 174 131.929V141.571C174 145.107 171.15 148 167.666 148H134.854C135.551 146.007 135.995 143.821 135.995 141.571L135.75 131.071C135.75 121.51 130.136 117.858 124.162 113.971C122.772 113.067 121.363 112.15 120 111.143C119.981 111.123 119.962 111.098 119.941 111.07C119.893 111.007 119.835 110.931 119.747 110.886C121.343 110.747 124.485 110.808 126.804 110.853Z"
                                className="x1d6ck0k"
                            />
                        </svg> :
                            <img
                                className=' w-full h-full rounded-full  object-cover object-center' src={currRoom.roomPic} alt='Room Pic' loading='lazy' />}
                    </div>
                </div>


            </div>

        </div>
    )
}

export default RoomInfo
