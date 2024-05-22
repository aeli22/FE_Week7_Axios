import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import Layout from '../components/Layout';
const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios
            .get('https://reqres.in/api/users?page=1')
            .then((res) => {
                setUsers(res.data.data.slice(0, 9));
            })
            .catch((error) => {
                console.error('Error fetching users', error);
            });
    }, []);

    return (
        <Layout>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                {users.map((user) => (
                    <Card key={user.id} user={user} />
                ))}
            </div>
        </Layout>
    );
};

export default Home;
