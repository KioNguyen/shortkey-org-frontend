// "use client";
// import React from "react";
// import { twMerge } from "tailwind-merge";

// export default function Modal({
//   children,
//   isOpen,
//   setIsOpen,
//   className: externalClass,
// }: {
//   children: React.ReactNode;
//   isOpen: boolean;
//   className?: string;
//   setIsOpen: (isOpen: boolean) => void;
// }) {
//   const className = twMerge(
//     `backdrop:bg-gray-50 fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto
//     transition-transform bg-white dark:bg-gray-800 w-64 ${
//       isOpen ? "translate-x-0" : "-translate-x-full"
//     }`,
//     externalClass
//   );
//   return (
//     <>
//       {isOpen && (
//         <div
//           className="fixed inset-0 z-30 bg-black opacity-0 transition-opacity duration-500 ease-in-out"
//           style={{ animation: isOpen ? "fadeIn 0.5s" : "fadeOut 0.5s" }}
//           onClick={() => setIsOpen(false)}
//         ></div>
//       )}
//       <div className={className}>
//         <button
//           type="button"
//           data-drawer-hide="drawer-backdrop"
//           aria-controls="drawer-backdrop"
//           className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
//           onClick={() => setIsOpen(false)}
//         >
//           <svg
//             className="w-3 h-3"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 14 14"
//           >
//             <path
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
//             />
//           </svg>
//         </button>
//         {children}
//       </div>
//     </>
//   );
// }

export default function Modal() {
  return (
    <div>
      {/* The button to open modal */}
      <label htmlFor="my_modal_6" className="btn">
        open modal
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">This modal works with a hidden checkbox!</p>
          <div className="modal-action">
            <label htmlFor="my_modal_6" className="btn">
              Close!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
