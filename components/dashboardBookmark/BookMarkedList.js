import React from 'react'
import {NoDataFound} from '../general/general'
import Bookmarked from './Bookmarked'
export default function BookmarkedList({language='en'}) {
    console.log(language)
    const data =  [
        {
            "project":{
                "id": "claj8wnz40000nr4o8hg1ttu1",
                "title": "Talbat LTC",
                "fundingGoal": "80000",
                "pledgeList": [
                    {
                        "amount":12
                    },
                    {
                        "amount":54
                    },
                    {
                        "amount":87
                    },
                ],
                "owner":{
                    "user":{
                        "firstName":"Faris",
                        "lastName":"abukhadir"
                    }
                }   
            }
        },
        {
            "project":{
                "id": "claj8wnz40000nr4o8hg1ttu1",
                "title": "Kareem LTC",
                "fundingGoal": "4500",
                "pledgeList": [
                    {
                        "amount":324
                    },
                    {
                        "amount":876
                    },
                    {
                        "amount":1245
                    },
                ],
                "owner":{
                    "user":{
                        "firstName":"Azat",
                        "lastName":"Cherrav"
                    }
                }   
            }
        },
        {
            "project":{
                "id": "claj8wnz40000nr4o8hg1ttu1",
                "title": "Jawaker LTC",
                "fundingGoal": "567000",
                "pledgeList": [
                    {
                        "amount":3434
                    },
                    {
                        "amount":5667
                    },
                    {
                        "amount":9867
                    },
                ],
                "owner":{
                    "user":{
                        "firstName":"Ahmed",
                        "lastName":"Suweidi"
                    }
                }   
            }
        },
    ]
  return (
    <div className='w-full bg-white shadow-lg rounded-md'>
        {data.length>0?
        <div className='w-full'>
          {data && data.map((item,index)=><Bookmarked key={index} {...item.project} language={language} />)}

        </div>
        :
        <NoDataFound label={`noBookmarksFound`} language={language}/>
        }

        
    </div>
  )
}
