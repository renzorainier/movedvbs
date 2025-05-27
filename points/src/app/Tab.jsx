import React, { useState, Fragment } from "react";
import { Menu, Transition, Switch } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Visitors from "./Visitors.jsx";
import Primary from "./Primary.jsx";

function Tab({ configurations, currentConfigIndex, setCurrentConfigIndex }) {
  const [state, setState] = useState(false);
  // const [currentConfigIndex, setCurrentConfigIndex] = useState(0);
  const currentConfig = configurations[currentConfigIndex];

  return (
    <div style={{ height: "100vh" }}>
      <Menu
        as="div"
        className="relative inline-block justify-center text-center mt-4">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black/20 px-4 py-2 text-sm font-bold text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
            <h2 className="text-4xl font-bold">
              {configurations[currentConfigIndex].name}
            </h2>
            <ChevronDownIcon
              className="ml-2 -mr-1 h-10 w-10"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95">
          <Menu.Items className="absolute mt-2 origin-top divide-y divide-gray-100 rounded-lg bg-gradient-to-b from-gray-100 to-white shadow-xl ring-1 ring-black/5 focus:outline-none flex flex-col items-center z-50">
            {configurations.map((config, index) => (
              <Menu.Item key={index}>
                {({ active }) => (
                  <button
                    onClick={() => setCurrentConfigIndex(index)}
                    className={`${
                      active ? "bg-blue-500 text-white" : "text-gray-900"
                    } flex w-full items-center rounded-lg px-4 py-4 text-2xl font-semibold hover:bg-blue-100 transition-colors duration-200`}>
                    {config.name}
                  </button>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>

      <div className="flex justify-center pt-7 pb-4 items-center">
        <div className="w-full rounded-lg mx-auto">
          <Switch
            checked={state}
            onChange={setState}
            className="relative inline-flex h-[50px] w-full shrink-0 cursor-pointer rounded-lg border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            style={{
              marginTop: "-0.5rem",
              transformOrigin: "top",
              borderBottomWidth: "1px",
              borderColor: "#E5E7EB",
              borderRadius: "0.5rem",
              boxShadow:
                "0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -2px rgba(0,0,0,0.05)",
              ringWidth: "1px",
              ringColor: "rgba(0,0,0,0.2)",
              outline: "none",
            }}>
            <span
              aria-hidden="true"
              className={`${
                state ? "translate-x-full" : "translate-x-0"
              } pointer-events-none inline-block h-[47px] w-[50%] transform rounded-lg bg-gray-100 shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
            <div className="absolute top-1/2 transform -translate-y-1/2 font-bold text-4xl flex container">
              <div className="column">
                <div>List</div>
              </div>
              <div className="column">
                <div>Add</div>
              </div>
            </div>
          </Switch>
        </div>
      </div>

      <div className="flex justify-center"></div>

      <div>
        {state ? (
          <Visitors config={currentConfig}
          currentConfigIndex={currentConfigIndex}
          setCurrentConfigIndex={setCurrentConfigIndex}/>
        ) : (
          <Primary
            config={currentConfig}
            currentConfigIndex={currentConfigIndex}
            setCurrentConfigIndex={setCurrentConfigIndex}
          />
        )}
      </div>
    </div>
  );
}

export default Tab;

// import React, { useState, useEffect } from "react";
// import { doc, updateDoc, getDocs, collection } from "firebase/firestore";
// import { db } from "./firebase.js";
// import { Switch } from "@headlessui/react";
// import Visitors from "./Visitors.jsx";
// import Primary from "./Primary.jsx";

// function Tab() {
//   const [state, setState] = useState(false);

//   return (
//     <div style={{ height: "100vh" }}>
//       <div className="flex justify-center pt-7 pb-4 items-center">
//         <div className="w-full rounded-lg mx-auto">
//           <Switch
//             checked={state}
//             onChange={setState}
//             className="relative inline-flex h-[50px] w-full shrink-0 cursor-pointer rounded-lg border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
//             style={{
//               // Translate Tailwind classes to inline styles
//               marginTop: "-0.5rem", // equivalent to mt-2
//               transformOrigin: "top", // equivalent to origin-top
//               borderBottomWidth: "1px", // equivalent to divide-y
//               borderColor: "#E5E7EB", // equivalent to divide-gray-100
//               borderRadius: "0.5rem", // equivalent to rounded-lg
//               boxShadow:
//                 "0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -2px rgba(0,0,0,0.05)", // equivalent to shadow-xl
//               ringWidth: "1px", // equivalent to ring-1
//               ringColor: "rgba(0,0,0,0.2)", // equivalent to ring-black/5
//               outline: "none", // equivalent to focus:outline-none
//             }}>
//             <span
//               aria-hidden="true"
//               className={`${
//                 state ? "translate-x-full" : "translate-x-0"
//               } pointer-events-none inline-block h-[47px] w-[50%] transform rounded-lg bg-gray-100 shadow-lg ring-0 transition duration-200 ease-in-out`}
//             />

//             <div className="absolute top-1/2 transform -translate-y-1/2 font-bold text-4xl flex container">
//               <div className="column">
//                 <div>List</div>
//               </div>
//               <div className="column">
//                 <div>Add</div>
//               </div>
//             </div>
//           </Switch>
//         </div>
//       </div>
//       <div>
//         {state ? (
//           <div>
//             <Visitors />
//           </div>
//         ) : (
//           <div>
//             <Primary />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Tab;
