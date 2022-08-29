import React, { useState } from 'react'
import "./style.css"
import 'tachyons'
import Menu from "./MenuAPI"
import NavBar from "./NavBar"
import MenuCard from "./MenuCard"

// This unique list is to pass the categories to the navbar 
const uniqueList = [
    ...new Set(
        Menu.map((curElement) => {
            return curElement.category
        })
    ),
    "All"
]
console.log(uniqueList)

const Restaurant = () => {
// Props to give the MenuCard
    const [menuData, setMenuData] = useState(Menu)
// Props to give the navbar 
    const [menuList, setMenuList] = useState(uniqueList)

    const filterItem = (category) => {

        if(category ==="All")
        {
            setMenuData(Menu)
            return
        }

        const updatedList = Menu.filter((curElement) => {
            return curElement.category === category
        })
        setMenuData(updatedList)
    }

    return (
        <>
            <NavBar filterItem = {filterItem} menuList = {menuList}/>
            <MenuCard menuData={menuData} />
        </>
    )
}

export default Restaurant
