import React, { useState } from "react";

const Header = () => {
  const [uploadOpen, setUploadOpen] = useState(false);

  return (
    <div class="flex items-center place-items-center gap-3 mb-4 justify-between">
      <div class="relative items-center">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            class="w-3 h-3 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          class="block w-[350px] p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-[#E5E5E5]"
          placeholder="Search videos..."
          required
        />
      </div>
      <div>
        
      </div>
      <div class="items-center relative">
        <button
          onClick={() => {
            setUploadOpen(!uploadOpen);
          }}
          class="text-white bg-[#00B6EF] hover:bg-cyan-400 font-medium rounded-3xl text-sm px-7 py-3 me-2 mb-2"
        >
          Upload
        </button>
        {uploadOpen ? (
          <div class="grid gap-5 absolute right-0 bg-white p-5 border rounded-3xl shadow-xl z-10">
            <div class="text-2xl font-bold">Upload a video</div>
            <div class="relative items-center">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  class="w-4 h-3 text-gray-500 dark:text-gray-400"
                  viewBox="0 0 14 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.5 3H1.5C1.08333 3 0.729167 2.85417 0.4375 2.5625C0.145833 2.27083 0 1.91667 0 1.5C0 1.08333 0.145833 0.729167 0.4375 0.4375C0.729167 0.145833 1.08333 0 1.5 0H12.5C12.9167 0 13.2708 0.145833 13.5625 0.4375C13.8542 0.729167 14 1.08333 14 1.5C14 1.91667 13.8542 2.27083 13.5625 2.5625C13.2708 2.85417 12.9167 3 12.5 3H8.5V14.5C8.5 14.9167 8.35417 15.2708 8.0625 15.5625C7.77083 15.8542 7.41667 16 7 16C6.58333 16 6.22917 15.8542 5.9375 15.5625C5.64583 15.2708 5.5 14.9167 5.5 14.5V3Z"
                    fill="#5F6368"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block w-[350px] p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-[#E5E5E5]"
                placeholder="Title your video"
                required
              />
            </div>
            <div class="relative items-center">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  class="w-4 h-3 text-gray-500 dark:text-gray-400"
                  viewBox="0 0 20 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 10C3.61667 10 2.4375 9.5125 1.4625 8.5375C0.4875 7.5625 0 6.38333 0 5C0 3.61667 0.4875 2.4375 1.4625 1.4625C2.4375 0.4875 3.61667 0 5 0H8C8.28333 0 8.52083 0.0958333 8.7125 0.2875C8.90417 0.479167 9 0.716667 9 1C9 1.28333 8.90417 1.52083 8.7125 1.7125C8.52083 1.90417 8.28333 2 8 2H5C4.16667 2 3.45833 2.29167 2.875 2.875C2.29167 3.45833 2 4.16667 2 5C2 5.83333 2.29167 6.54167 2.875 7.125C3.45833 7.70833 4.16667 8 5 8H8C8.28333 8 8.52083 8.09583 8.7125 8.2875C8.90417 8.47917 9 8.71667 9 9C9 9.28333 8.90417 9.52083 8.7125 9.7125C8.52083 9.90417 8.28333 10 8 10H5ZM7 6C6.71667 6 6.47917 5.90417 6.2875 5.7125C6.09583 5.52083 6 5.28333 6 5C6 4.71667 6.09583 4.47917 6.2875 4.2875C6.47917 4.09583 6.71667 4 7 4H13C13.2833 4 13.5208 4.09583 13.7125 4.2875C13.9042 4.47917 14 4.71667 14 5C14 5.28333 13.9042 5.52083 13.7125 5.7125C13.5208 5.90417 13.2833 6 13 6H7ZM12 10C11.7167 10 11.4792 9.90417 11.2875 9.7125C11.0958 9.52083 11 9.28333 11 9C11 8.71667 11.0958 8.47917 11.2875 8.2875C11.4792 8.09583 11.7167 8 12 8H15C15.8333 8 16.5417 7.70833 17.125 7.125C17.7083 6.54167 18 5.83333 18 5C18 4.16667 17.7083 3.45833 17.125 2.875C16.5417 2.29167 15.8333 2 15 2H12C11.7167 2 11.4792 1.90417 11.2875 1.7125C11.0958 1.52083 11 1.28333 11 1C11 0.716667 11.0958 0.479167 11.2875 0.2875C11.4792 0.0958333 11.7167 0 12 0H15C16.3833 0 17.5625 0.4875 18.5375 1.4625C19.5125 2.4375 20 3.61667 20 5C20 6.38333 19.5125 7.5625 18.5375 8.5375C17.5625 9.5125 16.3833 10 15 10H12Z"
                    fill="#5F6368"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block w-[350px] p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-[#E5E5E5]"
                placeholder="https://www.your-video-link.com"
                required
              />
            </div>
            <div class="flex justify-end">
              <button
                onClick={() => {
                  setUploadOpen(false);
                }}
                class="text-black bg-[#E5E5E5] hover:bg-gray-400 font-medium rounded-3xl text-sm px-7 py-3 me-2 mb-2"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setUploadOpen(false);
                }}
                class="text-white bg-[#00B6EF] hover:bg-cyan-400 font-medium rounded-3xl text-sm px-7 py-3 me-2 mb-2"
              >
                Upload
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
