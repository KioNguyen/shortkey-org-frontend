// "use client";
// import React from "react";
// import { twMerge } from "tailwind-merge";

// export default function Drawer({
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
//     `backdrop:bg-gray-50 fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto
//     transition-transform bg-white dark:bg-gray-800 w-64  ${
//       isOpen ? "-translate-x-0" : "-translate-x-[-1000px]"
//     }`,
//     externalClass
//   );
//   return (
//     <>
//       <div className={className} data-drawer-position="right">
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
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               stroke-width="2"
//               d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
//             />
//           </svg>
//           <span className="sr-only">Close menu</span>
//         </button>
//         <div className="py-4 overflow-y-auto">{children}</div>
//       </div>
//       {isOpen && (
//         <div
//           className="fixed inset-0 z-30 bg-black opacity-50"
//           onClick={() => setIsOpen(false)}
//         ></div>
//       )}
//     </>
//   );
// }

export default function Drawer({
  open,
  setOpen,
  children,
  position = "left",
  ...props
}: React.HTMLAttributes<HTMLElement> & {
  open: boolean;
  setOpen: (open: boolean) => void;
  position?: "left" | "right";
}): JSX.Element {
  const drawerPositionClass = {
    left: "",
    right: "drawer-end",
  };
  return (
    <div className={`drawer ${drawerPositionClass[position]}`}>
      <input
        id="my-drawer"
        type="checkbox"
        className="drawer-toggle"
        checked={open}
      />
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
          onClick={() => setOpen(false)}
        ></label>
        <div className="min-h-full bg-base-200 text-base-content">
          {children}
        </div>
      </div>
    </div>
  );
}
