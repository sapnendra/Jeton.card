import React from "react";

const Page9 = () => {
  return (
    <div className="h-[60vh] px-[4vw] bg-primary">
      <div className="flex flex-col text-left text-sm gap-5 items-center text-secondary/60">
        <p>
          © 2025 | www.jeton.com is owned and operated by LA Orange CY Limited
          (Gladstonos, 116 M. Kyprianou House, 3&4th Floor, 3032, Limassol,
          Cyprus.) LA Orange CY Limited trading as Jeton, is authorised by the
          Central Bank of Cyprus under the Electronic Money Law of 2012 and 2018
          (Law 81(I)/2012) for distributing or redeeming electronic money
          (e-money), with Licence No: 115.1.3.66. LA Orange CY Limited has been
          incorporated in the Republic of Cyprus under the provisions of the
          Companies Law (Cap 113) with registration number HE 424807, with its
          registered office address at Gladstonos, 116 M. Kyprianou House, 3&4th
          Floor, 3032, Limassol, Cyprus.
        </p>
        <p>
          LA Orange Limited, trading as Jeton, is authorised by the Financial
          Conduct Authority under the Electronic Money Regulations 2011 for
          distributing or redeeming electronic money (e-money) and providing
          certain payment services on behalf of an e-money institution, with FCA
          registration number 902088. Company Name: LA ORANGE LIMITED, LEI code:
          8945009645M8PD0AD211, BIC Value: ORAGGB22 (Swift Code). LA Orange
          Limited is registered in England and Wales, Company Number 11535714,
          with its registered office address at The Shard Floor 24/25, 32 London
          Bridge Street, London, SE1 9SG, United Kingdom.
        </p>
        <p>
          The Jeton Card Account and Card are issued by Financial House Limited,
          which is authorised and regulated by the Financial Conduct Authority
          as an Electronic Money Institution under Firm Reference Number 902039.
          tronic Money Institution under Firm Reference Number 902039.
        </p>
      </div>
      <div className="h-full flex items-start justify-center gap-5 mt-10">
        <div className="w-full rounded-2xl overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-transparent via-transparent to-secondary flex items-end justify-center">
            <img
              className="h-20"
              src="https://www.jeton.com/_ipx/q_90&w_1360/cms/3807ed1d6ff033d12f87399f2c553de24b4805a3-664x160.png"
              alt=""
            />
          </div>
          <img
            className="w-full h-100 object-cover rounded-2xl"
            src="https://www.jeton.com/_ipx/q_90&w_1700/cms/f88ca5c0e739a3c92a194105844528a4aef2a8ef-1532x840.jpg"
            alt=""
          />
        </div>
        <div className="w-full rounded-2xl overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-transparent via-transparent to-secondary flex items-end justify-center">
            <img
              className="h-20"
              src="https://www.jeton.com/_ipx/q_90&w_1360/cms/8d0ba3c7d77020b2ecf42369f5592f7e0e1a5181-538x120.png"
              alt=""
            />
          </div>
          <img
            className="w-full h-100 object-cover rounded-2xl"
            src="https://www.jeton.com/_ipx/q_90&w_1700/cms/3fa7b37293f885927ddb88107fc1b88df1a4485d-1022x560.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Page9;
