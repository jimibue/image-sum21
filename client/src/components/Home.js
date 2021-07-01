import React from "react";
import { useAxiosOnMount } from "../customHooks/useAxiosOnMount";
import FilePondAddOnClick from "./FilePondAddOnClick";
import { Card, Image } from 'semantic-ui-react'
import ImageUploader2 from "./ImageUploader2";
import ImageUploader3 from "./ImageUploader3";


const Home = () => {
    const { data, loading, error } = useAxiosOnMount('/api/images')

    const renderImage = () => {
        return data.map((i) => {
            return (
            <Card>
                <Image src={i.url} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>{i.original_filename}</Card.Header>
                    <Card.Description>
                        {i.format}
                    </Card.Description>
                </Card.Content>

            </Card>
            )
        })
    }
    return (
        <>
            <FilePondAddOnClick />
            <ImageUploader2 />
            <ImageUploader3 />
            <Card.Group>
                {renderImage()}
            </Card.Group>

        </>
    )
}

export default Home;
