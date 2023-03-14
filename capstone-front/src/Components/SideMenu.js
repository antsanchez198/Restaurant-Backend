import React from "react"
import { useState } from "react"
import styles from "../Pages/OrderPage.css"

export default function SideMenu(props) {

    const allFoods = props.allFoods
    const setType = props.setType
    const [categories, setCategories] = useState([])

    allFoods.map(index => {
        if (!categories.includes(index.f_category)) {
            categories.push(index.f_category)
        }
    }
    )

    return (
        <div className="sideMenu">
            {/* <div class="d-flex align-items-start ">
                <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">

                    {categories.map(index => {
                        //const currentCat = index.f_category;
                        return (
                            <button class="nav-link" data-bs-toggle="pill" onClick={() => setType(index)}>{index}</button>
                        )
                    })}
                </div>
            </div> */}

            <div class="dropdown">
                <button class="dropbtn">All Foods
                    <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                    {/* <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a> */}
                    {categories.map(index => {
                        //const currentCat = index.f_category;
                        return (
                            <a onClick={() => setType(index)}>{index}</a>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
