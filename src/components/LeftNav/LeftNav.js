import React, { useState } from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { AiFillDashboard } from "react-icons/ai"

function LeftNav(props) {
    const [collapsed, setCollapsed] = useState(false)
    return (
        <div className={`w-full h-screen transition duration-500 ${props.sidebarOpen ? " translate-x-0" : " -translate-x-full"}`}>
            <ProSidebar collapsed={collapsed} style={{ width: "100%" }}>
                <Menu iconShape="square">
                    <MenuItem icon={<AiFillDashboard />}>Dashboard</MenuItem>
                    <SubMenu title="Team A" icon={<AiFillDashboard />}>
                        <Menu iconShape="square">
                            <SubMenu title="Team B" icon={<AiFillDashboard />}>
                                <Menu iconShape="square">
                                    <SubMenu title="Team C" icon={<AiFillDashboard />}>
                                        <Menu iconShape="square">
                                            <SubMenu title="Team D" icon={<AiFillDashboard />}>
                                                <Menu iconShape="square">
                                                    <MenuItem icon={<AiFillDashboard />}>Dashboard</MenuItem>
                                                    <SubMenu title="Team E" icon={<AiFillDashboard />}>
                                                        <MenuItem>Component 1</MenuItem>
                                                        <MenuItem>Component 2</MenuItem>
                                                    </SubMenu>
                                                </Menu>                                                <MenuItem>Component 2</MenuItem>
                                            </SubMenu>
                                        </Menu>
                                        <MenuItem>Component 2</MenuItem>
                                    </SubMenu>
                                </Menu>
                                <MenuItem>Component 2</MenuItem>
                            </SubMenu>
                        </Menu>
                        <MenuItem>Component 2</MenuItem>
                    </SubMenu>
                </Menu>
                <Menu iconShape="square">
                    <MenuItem icon={<AiFillDashboard />}>Dashboard</MenuItem>
                    <SubMenu title="Team A" icon={<AiFillDashboard />}>
                        <MenuItem>Component 1</MenuItem>
                        <MenuItem>Component 2</MenuItem>
                    </SubMenu>
                </Menu>
            </ProSidebar>
        </div>
    )
}

export default LeftNav

