import {useState} from "react";

export default function LoginForm() {
    const Users = [{username: 'User', password: '123'}, {username: 'admin', password: 'admin'}]

    const [data, setData] = useState({username: '', password: ''})
    const [isLoggedIn, setIsLoggedIn] = useState('')
    const [messageColor, setMessageColor] = useState('');

    function getSubmit(event) {
        event.preventDefault();
        const userExists = Users.some(user => user.username === data.username && user.password === data.password);
        let loginMsg = 'User is not logged in';
        let color = "red";

        if (userExists) {
            loginMsg = data.username === 'admin' ? 'You are admin! Welcome' : 'User is logged in';
            color = data.username === 'admin' ? 'yellow' : 'green';
        } else {
            resetAlert();
        }

        setIsLoggedIn(loginMsg);
        setMessageColor(color);
        resetAlert();

        setData({username: '', password: ''});
    }

    function resetAlert() {
        setTimeout(() => {
            setIsLoggedIn('');
            setMessageColor('');
        }, 3000);
    }

    return (<div className="login_form">
        <h1 className='margin_25'>Login form</h1>
        <p style={{color: messageColor}}>{isLoggedIn}</p>

        <form onSubmit={getSubmit}>
            <input type="text" className='margin_25'
                   placeholder='Username'
                   value={data.username}
                   onChange={event => setData({...data, username: event.target.value})}/>
            <input type="password" className='margin_25'
                   placeholder='Password'
                   value={data.password}
                   onChange={event => setData({...data, password: event.target.value})}/>
            <button className='margin_25' type='submit'>Login</button>
            <p>Admin: Username - admin, password - admin</p>
            <p style={{padding: '25px'}}>User: Username - User, password - 123</p>
        </form>
    </div>);
}