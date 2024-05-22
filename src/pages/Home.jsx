import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
    useEffect(() => {
        axios
            .get(`https://reqres.in/api/users/${1}`)
            .then((res) => {
                setUserInfo(res.data.data);
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);

    return (
        <>
            <Card></Card>
        </>
    );
};

export default Home;
