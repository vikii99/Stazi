import React from "react";
import { Link } from "react-router-dom";


function Card({ item }) {
  return (
    <>
      <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
        <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
          <img src={item.imageURL} alt={item.name} width="500" height="600" />
          <span class="absolute top-0 left-0 inline-flex mt-3 ml-3 px-3 py-2 rounded-lg z-10 bg-gray-100 border text-sm font-medium text-blue-400">
            For Rent
          </span>
          <span class="absolute top-0 right-0 inline-flex mt-3 mr-3 px-2 py-2 rounded-full z-10 bg-gray-100 border text-sm font-medium text-blue-400">
            <button>
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
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </button>
          </span>
        </div>

        <div className="pt-6 pb-1 pl-6 pr-6">
          <div className="flex flex-col items-start justify-between ">
            <span className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              <div>{item.location}</div>
            </span>
            <h5 className="block font-sans text-2xl font-medium text-blue-gray-900 flex-1">
              {item.name}
            </h5>

            <div class="mb-5 flex">
              <p
                class="mt-2 text-lg text-gray-800 line-clamp-1"
                title="New York, NY 10004, United States"
              >
                {item.location}, {item.city}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div className="cursor-pointer rounded-full text-blue-500 inline ">
              <span className="flex justify-center flex-col">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 ml-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
                  />
                </svg>

                <div>{item.room} room</div>
              </span>
            </div>
            <div className="cursor-pointer rounded-full text-blue-500 inline ">
              <span className="flex justify-center flex-col">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  fill="#3b82f6"
                  viewBox="0 0 640 512"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 ml-4"
                >
                  <path d="M176 256c44.11 0 80-35.89 80-80s-35.89-80-80-80-80 35.89-80 80 35.89 80 80 80zm352-128H304c-8.84 0-16 7.16-16 16v144H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v352c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-48h512v48c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V240c0-61.86-50.14-112-112-112z" />
                </svg>
                <div>{item.bed} bed</div>
              </span>
            </div>
            <div className="cursor-pointer rounded-full text-blue-500 inline ">
              <span className="flex justify-center flex-col">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  fill="#3b82f6"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 ml-4"
                  viewBox="0 0 512 512"
                >
                  <path d="M64 131.9C64 112.1 80.1 96 99.9 96c9.5 0 18.6 3.8 25.4 10.5l16.2 16.2c-21 38.9-17.4 87.5 10.9 123L151 247c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0L345 121c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-1.3 1.3c-35.5-28.3-84.2-31.9-123-10.9L170.5 61.3C151.8 42.5 126.4 32 99.9 32C44.7 32 0 76.7 0 131.9V448c0 17.7 14.3 32 32 32s32-14.3 32-32V131.9zM256 352a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm64 64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0-128a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm64 64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0-128a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm64 64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm32-32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
                </svg>
                <div>{item.bath} bath</div>
              </span>
            </div>
            <div className="cursor-pointer rounded-full text-blue-500 inline ">
              <span className="flex justify-center flex-col">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 ml-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                  />
                </svg>

                <div>{item.area} sft</div>
              </span>
            </div>
          </div>
        </div>
        <hr className="w-64 h-px mx-auto m-4 bg-gray-100 border-0 rounded  dark:bg-gray-700" />

        <div className="py-4 px-2 grid grid-cols-2 gap-1">
          <div className="text-xl text-bold">${item.rent}/Month</div>
          <div className="flex">
            <Link to={`/property/${item.id}`}>
              <button
                className="block rounded-lg py-2 px-4 text-center align-middle border font-sans text-blue-400  text-bold hover:shadow-lg hover:shadow-pink-blue/40 focus:opacity-[0.85]"
                type="button"
                data-ripple-light="true"
              >
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
