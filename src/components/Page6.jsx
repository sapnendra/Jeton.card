import React from 'react'

const Page6 = () => {
  return (
    <div data-scroll data-scroll-speed="0.2" className='h-[50vh py-20'>
        <div className="flex flex-col items-left items-start justify-center w-full px-[4vw]">
          <button className="border bg-transparent text-lg text-secondary border-secondary hover:bg-white/60 px-5 py-1 rounded-full cursor-pointer">
            Wallets
          </button>
          <h2 className="text-[4vw] w-2/5 font-primary text-secondary leading-[4vw] py-5">
          Pay on-the-go
          </h2>
          <p className="text-secondary/70 w-1/3 text-[1.4rem] font-semibold font-primary tracking-wider">
          Make contactless payments in stores with Jeton Card. Easily link your card with your digital wallet. Tap, pay and speed through checkouts!
          </p>
      </div>
    </div>
  )
}

export default Page6