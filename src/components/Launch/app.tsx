import React from  'react'
import { useLaunchesQuery } from '../../generated/graphql'

import Launch from './launch'
import Loading from '../loader/loading'

export default function  LaunchFunction(){
    const {data, loading, error } = useLaunchesQuery()
      // console.log("data lunch " , data)

  
      if(loading){
        return <Loading/>
      }
    if (error || !data){
        console.log(error);
        return <div>error</div>
    }

    return (
      
    <Launch data={data} />
    )
}
