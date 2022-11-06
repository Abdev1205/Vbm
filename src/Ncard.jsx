import React from 'react'

function Ncard(value) {
  return (
    <>
    
        <div className="card">
            <div className="card-image">
                <img src={value.Meal_Image_URL} alt="" srcset="" />
            </div>
            <div className="card-title">
                <h1>{value.Meal_Name}</h1>
                <p>{value.Meal_mix_with}</p>
            </div>
            <hr />
            <div className="card-desc">
                <p>{value.Meal_style}</p>
            </div>
            <div className="card-footer">
                <p>✔Available Every {value.Day} in {value.Meal_type}</p>
            </div>
        </div>
    </>
  )
}

export default Ncard
