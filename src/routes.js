import { Navigate, useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Newpost from "./pages/Newpost";
import NotFound from "./pages/NotFound";
import Community from "./pages/Community";
import Detail from "./pages/Detail";
import Matching from "./pages/Matching";
import TimeTable from "./pages/TimeTable";
import Curriculum from "./pages/Curriculum";
import Communityupdate from "./pages/Communityupdate";

export default function Router(){
    return useRoutes([
        { path : '/', element:<Home/>},
        { path : 'newpost', element:<Newpost/>},
        { path : '*', element:<NotFound/>},
        { path : 'community', element:<Community/>},
        { path : 'detail/*', element:<Detail/>},
        { path : 'matching', element:<Matching/>},
        { path : 'timetable', element:<TimeTable/>},
        { path : 'curriculum', element:<Curriculum/>},
        { path : 'update', element : <Communityupdate/>}
    ]);
}