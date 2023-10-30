//import { Box, Button, CircularProgress, Container, Grid, Pagination } from "@mui/material";
import React from "react";
//import { characters } from "../../api/characters";

export const HomePage: React.FC<{}> = () => {
    const [loading, setLoading] = React.useState<boolean>(true);
    const [count, setCount] = React.useState(10);

    React.useEffect(() => {
        setLoading(true)
        //setAllCharacters(r.data.results)
        setTimeout(() => setLoading(false), 1000)
        //console.log(r.data.results)
        //characters.getAll({page}).then((r)=>{
        //})/.catch((e)=> {
            //console.error(e)
        //})
    },)

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        //setPage(value)
    }

    return (
        <>
        </>
    );
};