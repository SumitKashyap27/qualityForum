"use client";
import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";

const LaundryService = () => {
  const [ratings, setRatings] = useState({
    machineCondition: { rating: 1, count: 0 },
    cleanliness: { rating: 1, count: 0 },
    availabilityAccessibility: { rating: 1, count: 0 },
  });

  const [comment, setComment] = useState("");

  const handleRatingChange = (category, newValue) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [category]: {
        rating: newValue,
        count: prevRatings[category].count + 1,
      },
    }));
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = () => {
    const output = {
      stars: {
        "Machine Condition": ratings.machineCondition.rating,
        Cleanliness: ratings.cleanliness.rating,
        "Availability & Accessibility":
          ratings.availabilityAccessibility.rating,
      },
      comment: comment,
    };
    console.log(output);
  };

  return (
    <section className="self-center w-full mt-10 max-md:max-w-full max-md:mt-8">
      <div className="flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
          <form className="border shadow-sm bg-white flex grow flex-col w-full mx-auto pt-9 pb-20 px-5 rounded-xl border-solid border-black max-md:max-w-full max-md:mt-10">
            <div className="flex w-[336px] max-w-full items-start gap-5 ml-4 self-start max-md:ml-2.5">
              <div className="self-stretch flex flex-col">
                <h3 className="text-neutral-700 text-xl mb-4">GIVE RATING</h3>
                {/* Machine Condition Rating */}
                <div className="relative inline-block text-left">
                  <div
                    variant="contained"
                    className="mr-3 mb-3 md:mb-0 focus:outline-none border solid focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                  >
                    MACHINE CONDITION
                    <Rating
                      name="machine-condition-rating"
                      value={ratings.machineCondition.rating}
                      onChange={(event, newValue) =>
                        handleRatingChange("machineCondition", newValue)
                      }
                    />
                  </div>
                </div>

                {/* Cleanliness Rating */}
                <div className="relative inline-block text-left pt-2">
                  <div
                    variant="contained"
                    className="mr-3 mb-3 md:mb-0 focus:outline-none border solid focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                  >
                    CLEANLINESS
                    <Rating
                      name="cleanliness-rating"
                      value={ratings.cleanliness.rating}
                      onChange={(event, newValue) =>
                        handleRatingChange("cleanliness", newValue)
                      }
                    />
                  </div>
                </div>

                {/* Availability & Accessibility Rating */}
                <div className="relative inline-block text-left pt-2">
                  <div
                    variant="contained"
                    className="mr-3 mb-3 md:mb-0 focus:outline-none border solid focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                  >
                    AVAILABILITY & ACCESSIBILITY
                    <Rating
                      name="availability-accessibility-rating"
                      value={ratings.availabilityAccessibility.rating}
                      onChange={(event, newValue) =>
                        handleRatingChange(
                          "availabilityAccessibility",
                          newValue
                        )
                      }
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
                  value={comment}
                  onChange={handleCommentChange}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Button
        style={{
          float: "right",
          marginTop: "20px",
        }}
        variant="contained"
        onClick={handleSubmit}
        className="bg-blue-700 hover:bg-blue-700"
      >
        Submit
      </Button>
    </section>
  );
};

export default LaundryService;
