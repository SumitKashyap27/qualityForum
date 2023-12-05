"use client";
import React, { useState, useEffect } from "react";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";

const MessFeedback = () => {
  const [breakfastRating, setbreakfastRating] = useState(1);
  const [lunchRating, setlunchRating] = useState(1);
  const [snacksRating, setsnacksRating] = useState(1);
  const [dinnerRating, setdinnerRating] = useState(1);

  const [breakfastRatingCount, setBreakfastRatingCount] = useState(0);
  const [lunchRatingCount, setLunchRatingCount] = useState(0);
  const [snacksRatingCount, setSnackRatingCount] = useState(0);
  const [dinnerRatingCount, setDinnerRatingCount] = useState(0);

  const handleBreakfastRatingChange = (event, newValue) => {
    setbreakfastRating(newValue);
    setBreakfastRatingCount((prevCount) => prevCount + 1);
  };

  const handleLunchRatingChange = (event, newValue) => {
    setlunchRating(newValue);
    setLunchRatingCount((prevCount) => prevCount + 1);
  };

  const handleSnackRatingChange = (event, newValue) => {
    setsnacksRating(newValue);
    setSnackRatingCount((prevCount) => prevCount + 1);
  };
  const handleDinnerRatingChange = (event, newValue) => {
    setdinnerRating(newValue);
    setDinnerRatingCount((prevCount) => prevCount + 1);
  };

  // Log ratings to the console
  const sweeperRating=()=>{
    console.log('breakfast Rating:', breakfastRating, 'Count:', breakfastRatingCount);
    console.log('lunch Rating:', lunchRating, 'Count:', lunchRatingCount);
    console.log('snacks Rating:', snacksRating, 'Count:', snacksRatingCount);
    console.log('dinner Rating:', dinnerRating, 'Count:', dinnerRatingCount);

  }
  return (
    <section className="self-center w-full mt-10 max-md:max-w-full max-md:mt-8">
      <div className="flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
          <form className="border shadow-sm bg-white flex grow flex-col w-full mx-auto pt-9 pb-20 px-5 rounded-xl border-solid border-black max-md:max-w-full max-md:mt-10">
            <div className="flex w-[336px] max-w-full items-start gap-5 ml-4 self-start max-md:ml-2.5">
              <div className="self-stretch flex flex-col">
                <h3 className="text-neutral-700 text-xl mb-4">GIVE RATING</h3>
            <div className="relative inline-block text-left">
              <div
                variant="contained"
                className="mr-3 md:mb-0 border font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75"
              >
                BREAKFAST
                <Rating
                  name="breakfast-rating"
                  value={breakfastRating}
                  onChange={handleBreakfastRatingChange}
                />
              </div>
            </div>

            <div className="relative inline-block text-left pt-2">
              <div
                variant="contained"
                className="mr-3 md:mb-0 border font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75"
              >
                LUNCH
                <Rating
                  name="lunch-rating"
                  value={lunchRating}
                  onChange={handleLunchRatingChange}
                />
              </div>
            </div>

            {/* Cleanliness Rating */}
            <div className="relative inline-block text-left pt-2">
              <div
                variant="contained"
                color="primary"
                className="mr-3 border md:mb-0 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center focus-visible:ring focus-visible:ring-purple-500/75"
              >
                SNACKS
                <Rating
                  name="snacks-rating"
                  value={snacksRating}
                  onChange={handleSnackRatingChange}
                />
              </div>
            </div>
            <div className="relative inline-block text-left pt-2">
              <div
                variant="contained"
                color="primary"
                className="mr-3 border md:mb-0 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center focus-visible:ring focus-visible:ring-purple-500/75"
              >
                DINNER
                <Rating
                  name="dinner-rating"
                  value={dinnerRating}
                  onChange={handleDinnerRatingChange}
                />
              </div>
            </div>

              </div>
            </div>
          </form>
        </div>
        <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
          <div className="border shadow-sm bg-white flex grow flex-col w-full mx-auto px-5 py-8 rounded-xl border-solid border-black max-md:max-w-full max-md:mt-10">
            <div className="self-center flex w-[482px] max-w-full flex-col">
              <h3 className="text-neutral-700 text-xl">Comments/Suggestion</h3>
              <div className=" flex w-full h-auto flex-col mt-7 rounded-sm self-start max-md:max-w-full">
                <textarea
                  className="w-full p-3 border rounded border-gray-300 focus:outline-none focus:ring focus:ring-blue-300"
                  rows="6"
                  placeholder="Enter your comment/suggestion here"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Button
      style={{ 
        float: "right",
        marginTop:"20px"
      }} 
      variant="contained"
      onClick={sweeperRating}
      className="bg-blue-700 hover:bg-blue-700"
      >
        Submit
      </Button>
    </section>
  );
};

export default MessFeedback;
