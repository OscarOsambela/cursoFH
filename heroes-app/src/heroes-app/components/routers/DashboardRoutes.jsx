import { Route, Routes } from "react-router-dom"
import { Navbar } from "../ui/Navbar"
import MarvelScreen from "../Marvel/MarvelScreen"
import DcScreen from "../DC/DcScreen"
import SearchScreen from "../search/SearchScreen"
import { HeroScreen } from "../hero/HeroScreen"

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar/>
            <div className="container">
                <Routes>
                    <Route path="marvel" element={<MarvelScreen/>}/>
                    <Route path="dc" element={<DcScreen/>}/>
                    <Route path="search" element={<SearchScreen/>}/>
                    <Route path="hero/:heroId" element={<HeroScreen/>}/>
                    <Route path="/" element={<MarvelScreen/>}/>
                </Routes>
            </div>
            
        </>
    )
}