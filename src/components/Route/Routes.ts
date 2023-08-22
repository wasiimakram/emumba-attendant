import ChangePassword from "../../modules/auth/ChangePassword";
import UserDashboard from "../../modules/dashboard/UserDashboard";
import Dashboard from "../../modules/admin-dashboard/Dashboard";
import Availability from "../../modules/availability/Availability";
import Stats from "../../modules/stats/Stats";
import Setting from "../../modules/setting/Setting";

const routes = [
    { path: "/change-password", component: ChangePassword, type: "user" },
    { path: "/user-dashboard", component: UserDashboard, type: "user" },
    { path: "/admin-dashboard", component: Dashboard, type: "admin" },
    { path: "/availability", component: Availability, type: "admin" },
    { path: "/stats", component: Stats, type: "admin" },
    { path: "/setting", component: Setting, type: "admin" },
];

export default routes;
