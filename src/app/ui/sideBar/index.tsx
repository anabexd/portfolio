import React from 'react'
import Image from 'next/image'

const SideBar = (): React.JSX.Element => {
  return (
  <>
  <div className="flex flex-col fixed left-0 ml-10 border border-indigo-300 divide-y divide-indigo-300 rounded-lg p-3">
    <Image src="./home.svg" width={30} height={30} alt="" className="pt-2 pb-2 hover:cursor-pointer"></Image>
    <Image src="./folder.svg" width={30} height={30} alt="" className="opacity-50 pt-2 pb-2 hover:cursor-pointer"></Image>
    <Image src="./mail.svg" width={30} height={30} alt="" className="opacity-50 pt-2 pb-2 hover:cursor-pointer"></Image>
  </div>
  </>
  )
}

export default SideBar
