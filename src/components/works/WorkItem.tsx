import React from 'react'
import FadeIn from '../../assets/FadeIn'
import Image from 'next/image'
import { BiLinkExternal } from 'react-icons/bi'

const WorkItem = ({menu}) => {
  return (
    <FadeIn className={`w-full max-w-full overflow-hidden transform transition-all duration-1000 translate-y-100`}>
      <div
        className={`relative flex flex-wrap justify-between w-full overflow-hidden`}
      >
        {/* ----------------- Descriptopn Section ------------- */}
        <div
          className={`flex flex-col justify-evenly gap-4 pt-2 text-[#162447] text-lg md:text-2xl order-1 md:order-none md:w-1/2`}
        >
          <h3 className="text-3xl md:text-4xl italic text-mainP">{menu.title}</h3>
          <p
            className={`md:max-w-lg leading-8`}
          >
            {menu.description}
          </p>
          <div className="flex flex-wrap gap-3">
            {menu.languages.map((language) => language)}
          </div>
          {/* buttons */}
          <div
            className={`flex flex-wrap gap-2 md:gap-4`}
          >
            <a
              href={menu.link.project}
              target="_blank"
              className="group flex items-center px-3 py-2 italic text-[#eee] bg-mainB hover:bg-mainP"
            >
              <span className="transform transition-all duration-500 group-hover:-translate-x-2">
                Jump to Page
              </span>
              <BiLinkExternal className="opacity-0 transform transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-2" />
            </a>
            <a
              href={menu.link.github}
              target="_blank"
              className="group flex items-center px-3 py-2 italic text-[#eee] bg-mainB hover:bg-mainP"
            >
              <span className="transform transition-all duration-500 group-hover:-translate-x-2">
                View Github Repo
              </span>
              <BiLinkExternal className="opacity-0 transform transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-2" />
            </a>
          </div>
        </div>

        {/* ----------------- Image Section ------------- */}
        <div className="transform duration-500 md:w-1/2">
          <Image
            src={menu.src}
            width={3086}
            height={1844}
            loading="lazy"
            objectFit={"contain"}
            placeholder={"blur"}
            blurDataURL={menu.src}
          />
        </div>
      </div>
    </FadeIn>
  )
}

export default WorkItem