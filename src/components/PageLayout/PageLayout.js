import React, { useEffect, useState } from "react";
import ChatArea from "../ChatArea/ChatArea";
import Header from "../Header/Header";
import LeftNav from "../LeftNav/LeftNav";
import { useMediaQuery } from "react-responsive";
import { BsFillChatRightTextFill } from "react-icons/bs";
import ResponsiveDrawer from "../Drawer/Drawer";
import { Box } from "@mui/system";

function PageLayout(props) {
  const { state, checkLoginStatus, children, userLoginData } = props;
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [chatOpen, setChatOpen] = useState(true);

  const isMobile = useMediaQuery({ query: "(max-width: 780px)" });

  const toggleSideBar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    if (isMobile) {
      setSidebarOpen(false);
      setChatOpen(false);
    } else {
      setSidebarOpen(true);
    }
  }, [isMobile]);

  console.log("sidebar==>", sidebarOpen);

  return (
    <div className="h-screen w-screen flex flex-col overflow-y-scroll overflow-x-hidden no-scroll">
      <Box>
        <ResponsiveDrawer
          chatOpen={chatOpen}
          isMobile={isMobile}
          children={children}
          user={state.user}
          isLoggedin={state.isLoggedin}
          sources={state.sources}
          userLoginData={userLoginData}
          // categoryImg={categoryImg}
        />
      </Box>
    </div>
  );
}

export default PageLayout;

// {
/* <div className='w-full md:w-[25%] min-w-[25%] h-full fixed'>
					<LeftNav
						user={state.user}
						isLoggedin={state.isLoggedin}
						sources={state.sources}
						sidebarOpen={sidebarOpen}
					/></div> */
// }

// 		<div className='flex items-start justify-between w-screen h-full relative overflow-x-hidden overflow-y-scroll no-scroll'>

// 	<div className='grid grid-cols-4 w-full h-full '>
// 		<div className={`${isMobile ? "col-start-1" : "col-start-2"} ${chatOpen ? isMobile ?"col-end-5":"col-end-4" : "col-end-5"} transition duration-500`}>

// 			{children}

// 		</div>
// 	</div>
// 	<div className='w-full md:w-[25%] min-w-[25%] h-full fixed right-0'>
// 		<ChatArea
// 			user={state.user}
// 			isLoggedin={state.isLoggedin}
// 			sources={state.sources}
// 			chatOpen={chatOpen}
// 			setChatOpen={setChatOpen}
// 		/>
// 	</div>
// </div>
// {!chatOpen &&
// 	<div
// 		className='absolute bottom-5 right-5 md:bottom-10 md:right-10 bg-black rounded-full p-3 cursor-pointer'
// 		onClick={() => setChatOpen(true)}
// 	>
// 		<BsFillChatRightTextFill size={20} color="white" />
// 		<span
// 			class="absolute top-0 right-0 px-2 py-1 text-xs font-bold leading-none text-red-100 transform bg-red-600 rounded-full">9</span>
// 	</div>}
