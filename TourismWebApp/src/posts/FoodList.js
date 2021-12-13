import React from 'react'
import PostData from '../data/foods.json'

const FoodList = () => {
    return (
        <div>
            {PostData.map((postDetail) => {
                return <div>
                    <h1>{postDetail.name}</h1>
                    <p>Address: {postDetail.address}</p>
                    <p>Type of Cuisine: {postDetail.cuisine}</p>
                    <p>Price Range (out of 4): {postDetail.price}</p>
                </div>
            })}
        </div>
    )
}

export default FoodList
