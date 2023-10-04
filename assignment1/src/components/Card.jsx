import React from "react";

function Card({ car }) {
  return (
    <>
      <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
        <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
          <img src={car.imageURL} alt={car.name} width="500" height="600" />
        </div>
        <div className="pt-6 pb-1 pl-6 pr-6">
          <div className="mb-3 flex items-center justify-between ">
            <h5 className="block font-sans text-xl font-medium text-blue-gray-900 flex-1">
              {car.name}
            </h5>
            <div className="flex-1">
              <span className="border-dashed border-2 border-indigo-600 border-radius rounded-lg px-1">
                {car.yearOfRelease}
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="cursor-pointer rounded-full text-blue-500 inline ">
              <span className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
                <div>{car.people} people</div>
              </span>
            </div>
            <div className="cursor-pointer rounded-full text-blue-500 inline ">
              <span className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-fuel-pump"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-5Z" />
                  <path d="M1 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v8a2 2 0 0 1 2 2v.5a.5.5 0 0 0 1 0V8h-.5a.5.5 0 0 1-.5-.5V4.375a.5.5 0 0 1 .5-.5h1.495c-.011-.476-.053-.894-.201-1.222a.97.97 0 0 0-.394-.458c-.184-.11-.464-.195-.9-.195a.5.5 0 0 1 0-1c.564 0 1.034.11 1.412.336.383.228.634.551.794.907.295.655.294 1.465.294 2.081v3.175a.5.5 0 0 1-.5.501H15v4.5a1.5 1.5 0 0 1-3 0V12a1 1 0 0 0-1-1v4h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V2Zm9 0a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v13h8V2Z" />
                </svg>
                <div>{car.fuelType}</div>
              </span>
            </div>
            <div className="cursor-pointer rounded-full text-blue-500 inline ">
              <span className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-speedometer"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 2a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V2.5A.5.5 0 0 1 8 2zM3.732 3.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 8a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 7.31A.91.91 0 1 0 8.85 8.569l3.434-4.297a.389.389 0 0 0-.029-.518z" />
                  <path
                    fill-rule="evenodd"
                    d="M6.664 15.889A8 8 0 1 1 9.336.11a8 8 0 0 1-2.672 15.78zm-4.665-4.283A11.945 11.945 0 0 1 8 10c2.186 0 4.236.585 6.001 1.606a7 7 0 1 0-12.002 0z"
                  />
                </svg>
                <div>{car.mileage}</div>
              </span>
            </div>
            <div className="cursor-pointer rounded-full text-blue-500 inline ">
              <span className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-steering-wheel"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {" "}
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />{" "}
                  <circle cx="12" cy="12" r="9" />{" "}
                  <circle cx="12" cy="12" r="2" />{" "}
                  <line x1="12" y1="14" x2="12" y2="21" />{" "}
                  <line x1="10" y1="12" x2="3.25" y2="10" />{" "}
                  <line x1="14" y1="12" x2="20.75" y2="10" />{" "}
                </svg>
                <div>{car.transmission}</div>
              </span>
            </div>
          </div>
        </div>
        <hr className="w-64 h-px mx-auto m-4 bg-gray-100 border-0 rounded  dark:bg-gray-700" />

        <div className="py-4 px-2 grid grid-cols-2 gap-1">
          <div className="text-xl text-bold">{car.rentPerMonth}/Month</div>
          <div className="grid grid-cols-2 gap-1">
            <button className="pl-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </button>
            <button
              className="block w-half select-none rounded-lg bg-blue-500 py-2 px-4 text-center align-middle font-sans text-white text-xl text-bold hover:shadow-lg hover:shadow-pink-blue/40 focus:opacity-[0.85]"
              type="button"
              data-ripple-light="true"
            >
              Rent
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
