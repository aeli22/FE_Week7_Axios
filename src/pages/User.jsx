import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Layout from '../components/Layout';

const User = () => {
    const { userId } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        axios
            .get(`https://reqres.in/api/users/${1}`)
            .then((response) => {
                setUser(response.data.data);
            })
            .catch((error) => {
                console.error('Error fetching user details', error);
            });
    }, [userId]);

    if (!user) return <Layout>Loading...</Layout>;

    return (
        <Layout>
            <h1>User Details</h1>
            <div>
                <img src={user.avatar} alt={user.first_name} />
                <h2>{`${user.first_name} ${user.last_name}`}</h2>
                <p>Email: {user.email}</p>
            </div>
        </Layout>
    );
};
