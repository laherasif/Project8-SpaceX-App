import React from 'react'
import { useLaunhDetailQuery } from '../../generated/graphql'
import LaunchDet from './launchdet'
import SingleLoading from '../loader/singleLoader'
import { useParams } from 'react-router-dom'

interface ParamTypes {
    id: string
  }

// router 

const LaunchDetFunction = () => {
  // console.log("loation" , window.location)
  // console.log("loation" , useParams())
  const { id } = useParams<ParamTypes>()
    const { data, loading, error  } = useLaunhDetailQuery({variables : { id : id }})
    console.log("data lunches id  " , data)
    if (loading){
        return <SingleLoading />
    }
    if(error || !data){
        console.log(error);
        return <div>error</div>
    }
    return (
        
    <LaunchDet data={data} />
    )
}


export default LaunchDetFunction