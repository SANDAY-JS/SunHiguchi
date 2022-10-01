import Image from 'next/image';
import React from 'react';
import FadeIn from '../assets/FadeIn';

const Introduction = () => {
  return (
    <div>
        <div id="to_introduction" className="flex flex-col items-center">
            <div className="flex flex-col sm:flex-row justify-center sm:items-center flex-wrap gap-12 px-10 py-10">
                <div className='bubble'><p className='sm:px-3 sm:py-7 px-2 py-1 leading-normal sm:text-xl text-sm'>ホームページを新しくすべきか悩んでいる</p></div>
                <div className='bubble -mt-8 sm:mt-0 self-end'><p className='sm:px-3 sm:py-7 px-2 py-1 leading-normal sm:text-xl text-sm'>サイトに機能をつけたいけど、どうしたらいいか分からない</p></div>
                <div className='bubble -mt-2'><p className='sm:px-3 sm:py-7 px-2 py-1 leading-normal sm:text-xl text-sm'>できるだけ費用を抑えたい</p></div>
            </div>
            <div className="relative -mt-16 sm:-mt-8 w-52 h-52 sm:w-[320px] sm:h-[320px]">
                <Image src={'/images/think.png'} layout={'fill'} priority />
            </div>
        </div>

        <h3 className='text-4xl sm:text-4xl text-center mt-10 sm:mt-5 font-black leading-normal'>
            そんなお悩みを
            <FadeIn className={`block sm:inline text-5xl sm:text-6xl text-[transparent] bg-clip-text bg-gradient-to-r from-[#653ea9] to-[#f1abfb]`}>
                <span>素早く解決</span>
            </FadeIn>
            します！
        </h3>
    </div>
  )
}

export default Introduction