// import React, { useState, useRef } from "react";
// import * as Select from "@radix-ui/react-select";
// import { useLocation } from "react-router-dom";

// interface SelectNivelProps {
//   onCategoryChange: (value: string) => void;
// }

// const menuItems: string[] = [
//   "A",
//   "B",
//   "C",
//   "D",
//   "E",
//   "F",
//   "G",
//   "H"
// ];

// const SelectItem: React.ForwardRefRenderFunction<HTMLDivElement, { children: React.ReactNode; value: string }> = (
//   { children, value, ...props },
//   forwardedRef
// ) => {
//   return (
//     <Select.Item
//       {...props}
//       value={value}
//       ref={forwardedRef}
//       className="flex items-center justify-between px-3 cursor-default py-2 duration-150 text-gray-600 data-[state=checked]:text-indigo-600 data-[state=checked]:bg-indigo-50 data-[highlighted]:text-indigo-600 data-[highlighted]:bg-indigo-50 data-[highlighted]:hover:text-indigo-600 data-[highlighted]:hover:bg-indigo-50 outline-none"
//     >
//       <Select.ItemText>
//         <div className="pr-4 line-clamp-1">{children}</div>
//       </Select.ItemText>
//       <div className="w-6">
//         <Select.ItemIndicator>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="w-5 h-5 text-indigo-600"
//             viewBox="0 0 20 20"
//             fill="currentColor"
//           >
//             <path
//               fillRule="evenodd"
//               d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//               clipRule="evenodd"
//             />
//           </svg>{" "}
//         </Select.ItemIndicator>
//       </div>
//     </Select.Item>
//   );
// };

// const SelectNivel: React.FC<SelectNivelProps> = ({ onCategoryChange }) => {
//   const location = useLocation();
//   const [defaultCategory, setDefaultCategory] = useState<string | undefined>(() =>
//     menuItems.find((item) => location.pathname.includes(item.toLocaleLowerCase()))
//   );

//   const selectRef = useRef<HTMLDivElement>(null);

//   return (
//     <Select.Root onValueChange={(value) => onCategoryChange(value)} defaultValue={'A'}>
//       <div className="w-72 max-w-full">
//         <Select.Trigger
//           as="button"
//           className="w-full inline-flex items-center justify-between px-3 py-2 text-sm text-gray-600 bg-white border rounded-lg shadow-sm outline-none focus:ring-offset-2 focus:ring-indigo-600 focus:ring-2"
//           ref={selectRef}
//         >
//           <Select.Value placeholder="A" />
//           <Select.Icon className="text-gray-400">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-5 h-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M8 9l4-4 4 4m0 6l-4 4-4-4"
//               />
//             </svg>
//           </Select.Icon>
//         </Select.Trigger>
//         <Select.Portal>
//           <Select.Content
//             position="popper"
//             avoidCollisions={false}
//             className="w-[var(--radix-select-trigger-width)] mt-3 overflow-y-auto bg-white border rounded-lg shadow-sm text-sm"
//           >
//             <Select.Viewport className="">
//               {menuItems.map((item, idx) => (
//                 <SelectItem key={idx} value={item}>
//                   {item}
//                 </SelectItem>
//               ))}
//             </Select.Viewport>
//           </Select.Content>
//         </Select.Portal>
//       </div>
//     </Select.Root>
//   );
// };

// export default SelectNivel;
