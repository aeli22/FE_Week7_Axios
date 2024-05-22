import React from 'react';
import { useParams } from 'react-router-dom';

const { UserId } = useParams();
const [userInfo, setUserInfo] = useState({
    avatar: '',
    email: '',
    first_name: '',
    id: 0,
    last_name: '',
});
const User = () => {
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
            User information
            <img src={userInfo.avatar} />
            <h3>email:{userInfo.email}</h3>
            <h3>
                {userInfo.first_name}
                {userInfo.last_name}
            </h3>
            <Link to="/menu">메뉴 페이지로 이동</Link>
            <h1>User name is{useParams} </h1>
        </>
    );
};

export default User;
