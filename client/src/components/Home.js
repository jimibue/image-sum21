import React from "react";
import { useAxiosOnMount } from "../customHooks/useAxiosOnMount";
import FilePondAddOnClick from "./FilePondAddOnClick";


const Home = () => {
    const {data, loading, error} = useAxiosOnMount('/api/images')
    

    return (
        <>
           <FilePondAddOnClick />
           <p>data.length: {data.length}</p>

        </>
    )
}

export default Home;
