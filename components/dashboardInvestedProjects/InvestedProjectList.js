import React from 'react'
import {NoDataFound} from '../../components/general/general'
import InvestedProject from './InvestedProject'
export default function InvestedProjectList({language}) {
    const hasData = true
    const data =  [
      {
          "country": "Jordan",
          "amount": "210",
          "project": {
              "id": "claj8wnz40000nr4o8hg1ttu1",
              "title": "Talbat LTC",
              "fundingGoal": "80000",
              "_count": {
                  "pledgeList": 15
              }
          }
      },
      {
          "country": "Jordan",
          "amount": "400",
          "project": {
              "id": "claj8wnz40000nr4o8hg1ttu1",
              "title": "Talbat LTC",
              "fundingGoal": "80000",
              "_count": {
                  "pledgeList": 15
              }
          }
      },
      {
          "country": "Jordan",
          "amount": "400",
          "project": {
              "id": "claj8wnz40000nr4o8hg1ttu1",
              "title": "Talbat LTC",
              "fundingGoal": "80000",
              "_count": {
                  "pledgeList": 15
              }
          }
      },
      {
          "country": "Jordan",
          "amount": "400",
          "project": {
              "id": "claj8wnz40000nr4o8hg1ttu1",
              "title": "Talbat LTC",
              "fundingGoal": "80000",
              "_count": {
                  "pledgeList": 15
              }
          }
      },
      {
          "country": "Jordan",
          "amount": "400",
          "project": {
              "id": "claj8wnz40000nr4o8hg1ttu1",
              "title": "Talbat LTC",
              "fundingGoal": "80000",
              "_count": {
                  "pledgeList": 15
              }
          }
      },
      {
          "country": "Jordan",
          "amount": "400",
          "project": {
              "id": "claj8wnz40000nr4o8hg1ttu1",
              "title": "Talbat LTC",
              "fundingGoal": "80000",
              "_count": {
                  "pledgeList": 15
              }
          }
      },
      {
          "country": "Jordan",
          "amount": "30",
          "project": {
              "id": "claj8wnz40000nr4o8hg1ttu1",
              "title": "Talbat LTC",
              "fundingGoal": "80000",
              "_count": {
                  "pledgeList": 15
              }
          }
      },
      {
          "country": "Jordan",
          "amount": "30",
          "project": {
              "id": "claj8wnz40000nr4o8hg1ttu1",
              "title": "Talbat LTC",
              "fundingGoal": "80000",
              "_count": {
                  "pledgeList": 15
              }
          }
      },
      {
          "country": "Jordan",
          "amount": "30",
          "project": {
              "id": "claj8wnz40000nr4o8hg1ttu1",
              "title": "Talbat LTC",
              "fundingGoal": "80000",
              "_count": {
                  "pledgeList": 15
              }
          }
      },
      {
          "country": "Jordan",
          "amount": "30",
          "project": {
              "id": "claj8wnz40000nr4o8hg1ttu1",
              "title": "Talbat LTC",
              "fundingGoal": "80000",
              "_count": {
                  "pledgeList": 15
              }
          }
      },
      {
          "country": "Jordan",
          "amount": "30",
          "project": {
              "id": "claj8wnz40000nr4o8hg1ttu1",
              "title": "Talbat LTC",
              "fundingGoal": "80000",
              "_count": {
                  "pledgeList": 15
              }
          }
      },
      {
          "country": "Jordan",
          "amount": "30",
          "project": {
              "id": "claj8wnz40000nr4o8hg1ttu1",
              "title": "Talbat LTC",
              "fundingGoal": "80000",
              "_count": {
                  "pledgeList": 15
              }
          }
      },
      {
          "country": "Jordan",
          "amount": "30",
          "project": {
              "id": "claj8wnz40000nr4o8hg1ttu1",
              "title": "Talbat LTC",
              "fundingGoal": "80000",
              "_count": {
                  "pledgeList": 15
              }
          }
      },
      {
          "country": "Jordan",
          "amount": "30",
          "project": {
              "id": "claj8wnz40000nr4o8hg1ttu1",
              "title": "Talbat LTC",
              "fundingGoal": "80000",
              "_count": {
                  "pledgeList": 15
              }
          }
      },
      {
          "country": "Jordan",
          "amount": "30",
          "project": {
              "id": "claj8wnz40000nr4o8hg1ttu1",
              "title": "Talbat LTC",
              "fundingGoal": "80000",
              "_count": {
                  "pledgeList": 15
              }
          }
      }
  ]
  return (
    <div className='w-full bg-white shadow-lg rounded-md'>
        {hasData?
        <div className='w-full'>
          {data && data.map((item,index)=><InvestedProject key={index} {...item} language={language} />)}

        </div>
        :
        <NoDataFound label={`noInvestedProjectsFound`} language={language}/>
        }

        
    </div>
  )
}
