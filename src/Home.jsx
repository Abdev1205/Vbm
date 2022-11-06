import React, { useState } from 'react'
import { useEffect } from 'react';
import Navbar from './Navbar'
import Menu from './Menu'
import Ncard from './Ncard'
import Monday from "./monday_food.json"
import Tuesday from "./tuesday_food.json"
import Wednesday from "./wednesday_food.json"
import Thursday from "./thursday_food.json"
import Friday from "./friday_food.json"
import Sunday from "./sunday_food.json"
import Saturday from "./saturday_food.json"
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Footer from './Footer';
function Home() {

    const userDate = `2022-10-24T21:11:54`;
    const [userDay, setUserDay] = useState(0);
    const [value, setValue] = React.useState(dayjs(userDate));
    const [menuFilter, setMenuFilter] = useState(false)
    const [morningOff, setMorningOff] = useState(false)
    const [lunchOff, setLunchOff] = useState(false)
    const [snacksOff, setSnacksOff] = useState(false)
    const [dinnerOff, setDinnerOff] = useState(false)

    const [mealMesaage, SetMealMessage] = useState("It's Meal Time")

    const [morningFood, setMorningFood] = useState([])
    const [lunchFood, setLunchFood] = useState([])
    const [snacksFood, setSnacksFood] = useState([])
    const [dinnerFood, setDinnerFood] = useState([])

    const [active, SetActive] = useState(false)

    const [uday, setUday] = useState(Monday)



    const run = 0;
    useEffect(() => {
        let newDate = new Date()
        let date = newDate.getDay();
        setUserDay(date)

        // const handleChange = (newValue) => {
        //     setValue(newValue);
        // };
        console.log(date);
        if (date == "0") {
            console.log("Today is Sunday");
            setUday(Sunday)
        } else if (date == "1") {
            console.log("Today is Monday");
            setUday(Monday)
        }
        else if (date == "2") {
            console.log("Today is Tuesday");
            setUday(Tuesday)
        }
        else if (date == "3") {
            console.log("Today is Wednesday");
            setUday(Wednesday)
        } else if (date == "4") {
            console.log("Today is Thursday");
            setUday(Thursday)
        } else if (date == "5") {
            console.log("Today is Friday");
            setUday(Friday)
        } else if (date == "6") {
            console.log("Today is Saturday");
            setUday(Saturday)
        }
    }, [run]);

    const handleChange = (newValue) => {
        setValue(newValue);
        setUserDay(newValue.day())
        console.log(newValue.day());
        console.log(userDay);
        setMenuFilter(!true)
        setMorningOff(!true)
        setLunchOff(!true)
        setSnacksOff(!true)
        setDinnerOff(!true)


        if (newValue.day() == "0" ) {
            console.log("Today is Sunday");
            setUday(Sunday)
        } else if (newValue.day() == "1" ) {
            console.log("Today is Monday");
            setUday(Monday)
        }
        else if (newValue.day() == "2" ) {
            console.log("Today is Tuesday");
            setUday(Tuesday)
        }
        else if (newValue.day() == "3" ) {
            console.log("Today is Wednesday");
            setUday(Wednesday)
        } else if (newValue.day() == "4" ) {
            console.log("Today is Thursday");
            setUday(Thursday)
        } else if (newValue.day() == "5" ) {
            console.log("Today is Friday");
            setUday(Friday)
        } else if (newValue.day() == "6" ) {
            console.log("Today is Saturday");
            setUday(Saturday)
        }
    };

    const [age, setAge] = React.useState("");

    const handleChange2 = (event) => {
        var myDay=(event.target.value);
        setAge(event.target.value);
        console.log(myDay);

        setMenuFilter(!true)
        setMorningOff(!true)
        setLunchOff(!true)
        setSnacksOff(!true)
        setDinnerOff(!true)


        if (myDay == "0") {
            console.log("Today is Sunday");
            setUday(Sunday)
        } else if (myDay == "1") {
            console.log("Today is Monday");
            setUday(Monday)
        }
        else if (myDay == "2") {
            console.log("Today is Tuesday");
            setUday(Tuesday)
        }
        else if (myDay == "3") {
            console.log("Today is Wednesday");
            setUday(Wednesday)
        } else if (myDay == "4") {
            console.log("Today is Thursday");
            setUday(Thursday)
        } else if (myDay == "5") {
            console.log("Today is Friday");
            setUday(Friday)
        } else if (myDay == "6") {
            console.log("Today is Saturday");
            setUday(Saturday)
        }
    };
    console.log(age);
    


    // var test = uday;

    var day = uday;
    console.log(userDay);
    console.log(day);

    const allMeal = () => {
        setMenuFilter(false)
        setMorningOff(true)
        setLunchOff(true)
        setSnacksOff(true)
        setDinnerOff(true)
        SetMealMessage("It's Meal Time")
        SetActive(!true)
    }

    const morningMeal = () => {
        const morning = day.filter((a) => {
            return a.Meal_type === "Breakfast";

        })
        setMorningFood(morning)
        setMenuFilter(true)
        setMorningOff(false)
        setLunchOff(true)
        setSnacksOff(true)
        setDinnerOff(true)
        SetMealMessage("It's Breakfast Time")

        // if (menuFilter===true ){
        // setMenuFilter(false)
        // setMorningOff(true)
        // setLunchOff(true)
        // setSnacksOff(true)
        // setDinnerOff(true)

        // }else{
        //     setMorningFood(morning)
        //     setMenuFilter(true)
        //     setMorningOff(false)


        // }

    }

    const lunchMeal = () => {
        const lunch = day.filter((a) => {
            return a.Meal_type === "Lunch";

        })
        setLunchFood(lunch)
        setMenuFilter(true)
        setMorningOff(true)
        setLunchOff(false)
        setSnacksOff(true)
        setDinnerOff(true)
        SetMealMessage("It's Lunch Time")

        // if (menuFilter===true ){
        //     setMenuFilter(false)
        //     setLunchOff(true)
        //     setMorningOff(true)

        //     setSnacksOff(true)
        //     setDinnerOff(true)

        // }else{
        //     setLunchFood(lunch)
        //     setMenuFilter(true)
        //     setLunchOff(false)


        // }
    }

    const snackMeal = () => {
        const snack = day.filter((a) => {
            return a.Meal_type === "Snacks";

        })
        setSnacksFood(snack)
        setMenuFilter(true)
        setMorningOff(true)
        setLunchOff(true)
        setSnacksOff(false)
        setDinnerOff(true)
        SetMealMessage("It's Snack Time")

        // if (menuFilter===true ){
        //     setMenuFilter(false)
        //     setSnacksOff(true)
        //     setMorningOff(true)
        //     setLunchOff(true)

        //     setDinnerOff(true)

        // }else{
        //     setSnacksFood(snack)
        //     setMenuFilter(true)
        //     setSnacksOff(false)


        // }
    }

    const dinnerMeal = () => {
        const dinner = day.filter((a) => {
            return a.Meal_type === "Dinner";

        })
        setDinnerFood(dinner)
        setMenuFilter(true)
        setMorningOff(true)
        setLunchOff(true)
        setSnacksOff(true)
        setDinnerOff(false)
        SetMealMessage("It's Dinner Time")

        // if (menuFilter===true ){
        //     setMenuFilter(false)
        //     setDinnerOff(true)
        //     setMorningOff(true)
        //     setLunchOff(true)
        //     setSnacksOff(true)


        // }else{
        //     setDinnerFood(dinner)
        //     setMenuFilter(true)
        //     setDinnerOff(false)


        // }
    }


    return (
        <>
            <div className="home">

                <Navbar />
                <div className="sub-background">

                    <div className="menu">
                        <li onClick={allMeal} className="menu-all">All</li>
                        <li onClick={morningMeal} className="menu-link">Breakfast</li>
                        <li onClick={lunchMeal} className="menu-link">Lunch</li>
                        <li onClick={snackMeal} className="menu-link">Snacks</li>
                        <li onClick={dinnerMeal} className="menu-link">Dinner</li>

                    </div>

                    <div className="filters">

                    <div className="day-picker">
                        <FormControl className='day-filter-label' sx={{ m: 1, minWidth: 130 }}>
                            <InputLabel   id="demo-simple-select-helper-label">Select Day</InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={age}
                                label="Select Day"
                                onChange={handleChange2}
                            >
                                
                                <MenuItem value={0}>Sunday</MenuItem>
                                <MenuItem value={1}>Monday</MenuItem>
                                <MenuItem value={2}>Tuesday</MenuItem>
                                <MenuItem value={3}>Wednesday</MenuItem>
                                <MenuItem value={4}>Thursday</MenuItem>
                                <MenuItem value={5}>Friday</MenuItem>
                                <MenuItem value={6}>Saturday</MenuItem>
                            </Select>

                        </FormControl>
                    </div>

                    <div className="meal">
                        <h1>{mealMesaage}</h1>
                    </div>

                    <div className="date-picker">

                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <Stack spacing={3}>

                                <MobileDatePicker
                                    label="Select Date"
                                    inputFormat="MM/DD/YYYY"
                                    value={value}
                                    onChange={handleChange}
                                    renderInput={(params) => <TextField {...params} />}
                                />


                            </Stack>
                        </LocalizationProvider>
                    </div>


                    </div>
                    

                    

                    
                </div>
                <div className="card-main">

                    {menuFilter ? null : day.map(Ncard)}
                    {morningOff ? null : morningFood.map(Ncard)}
                    {lunchOff ? null : lunchFood.map(Ncard)}
                    {snacksOff ? null : snacksFood.map(Ncard)}
                    {dinnerOff ? null : dinnerFood.map(Ncard)}

                </div>

                <Footer/>
                
            </div>
        </>
    )
}

export default Home
