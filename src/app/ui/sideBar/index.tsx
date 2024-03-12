import React from 'react'
import Image from 'next/image'

const SideBar = (): React.JSX.Element => {
  return (
  <>
  <div className="flex flex-col fixed left-0 ml-10 border border-indigo-300 divide-y divide-indigo-300 rounded-lg p-4">
    <Image src="./home.svg" width={25} height={25} alt="" className="pt-3 pb-3 hover:cursor-pointer"></Image>
    <Image src="./folder.svg" width={25} height={25} alt="" className="opacity-50 pt-3 pb-3 hover:cursor-pointer"></Image>
    <Image src="./mail.svg" width={25} height={25} alt="" className="opacity-50 pt-3 pb-3 hover:cursor-pointer"></Image>
  </div>
  </>
  )
}

export default SideBar
