import React, {useState} from "react";
import AppBarView from "../view/AppBarView";
import DrawerView from "../view/DrawerView";

export default function () {

    const [open, setOpen] = useState(true);
    const [dashboardName, setDashboardName] = useState("");
    const [drawerName, setDrawerName] = useState("Booking.com");

    // useEffect(() => {
    //     console.log('Open', dashboardName);
    //     console.log('Open drawerName', drawerName);
    //     // setDashboardName("Booking.com Dashboard");
    //     console.log('das', dashboardName);
    //     console.log('das drawerName', drawerName);
    // }, []);

    const handleDrawerOpen = () => {
        setOpen(true);
        setDashboardName("");
        setDrawerName("Booking.com");
    };
    const handleDrawerClose = () => {
        setOpen(false);
        setDashboardName("Dashboard");
        setDrawerName("");
    };

    return (
        <>
            <AppBarView
                open = {open}
                dashboardName={dashboardName}
                handleDrawerOpen={handleDrawerOpen}
            />
            <DrawerView
                open = {open}
                drawerName = {drawerName}
                handleDrawerClose = {handleDrawerClose}
            />
        </>
    )
}