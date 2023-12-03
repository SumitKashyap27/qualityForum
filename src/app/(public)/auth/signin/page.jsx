"use client";
import React from "react";
import { TextField, Button } from "@mui/material";

function Page() {
  return (
    <main className="bg-white flex flex-col pl-5 pr-1.5">
      <section className="self-center flex w-full max-w-[1101px] flex-col mt-16 mb-2 max-md:max-w-full max-md:mt-10 justify-center items-center">
        <div className="flex max-w-full flex-col">
          <h1 className="text-black text-6xl max-w-[753px] max-md:max-w-full max-md:text-4xl mx-auto flex justify-center items-center">
            Quality Forum
          </h1>
        </div>
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col mt-0 max-md:mt-10">
              <img
                loading="lazy"
                src="/assets/student.png"
                alt="Student"
                className="pb-7 pt-10 block w-40 h-auto mx-auto"
              />
              <h2 className="text-black text-3xl self-center ">
                Student Login
              </h2>
            </div>
          </div>
        </div>
        <div className=" max-w-full mt-7 max-md:mt-0">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0 pb-6">
            <div className="flex flex-col items-stretch w-[380px]  max-md:w-full max-md:ml-0">
              <form>
                <div className="flex flex-col">
                  <div className="flex flex-col max-md:mt-10 gap-6 justify-center items-center">
                    <TextField
                      className="rounded border w-full"
                      id="collegeId"
                      label="College ID"
                      variant="outlined"
                    />
                    <TextField
                      className="rounded border w-full"
                      id="outlined-basic"
                      label="Password"
                      variant="outlined"
                    />
                    <a
                      href="/dashboard"
                      className="text-white no-underline w-full"
                    >
                      <Button
                        type="submit"
                        variant="contained"
                        className="rounded shadow-[0px_4px_4px_0px_rgba(0,0,0,0.30)] bg-sky-700 flex w-full flex-col mt-9"
                      >
                        Login
                      </Button>
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Page;
