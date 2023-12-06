"use client"
import React from 'react';

const SysAdminView = (props) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full flex flex-col items-center max-container-width  mb-20 max-md:max-w-full max-md:my-10">
        <div className="flex w-full gap-2 max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch border rounded-xl border-solid border-black w-[59%] max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col items-stretch max-md:max-w-full max-md:mt-8">
              <div className=" pl-9 flex-col text-black text-3xl shadow-sm bg-white rounded-xl leading-9 relative fill-white overflow-hidden min-h-[600px] w-full items-center pr-5 pt-8 pb-[478px] max-md:max-w-full max-md:pb-10">
                INTERNET
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[41%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col items-stretch  max-md:max-w-full max-md:mt-10">
              <div className="border shadow-sm bg-white flex flex-col items-stretch pl-9 pr-8 py-8 rounded-xl min-h-[600px] border-solid border-black max-md:max-w-full max-md:mt-10 max-md:px-5">
                <div className="text-neutral-700 text-xl leading-7 max-md:max-w-full">
                  Comments
                </div>
                <div className="border flex shrink-0 rounded h-[590px] border-solid border-black flex-col mt-6 max-md:max-w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SysAdminView;
