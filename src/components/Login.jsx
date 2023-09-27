// src/components/Login.js

import React from 'react';
import {useDispatch} from 'react-redux';
import {setUser} from '../features/saga/auth/userSlice'; // userSlice에서 액션을 가져옵니다.
function Login() {

    const dispatch = useDispatch();


    const handleLogin = () => {
        alert("로그인 버튼 눌림");
        const userData = {
            email: 'wkdrnse31@ndsae21.dsad',
            password: 'zzzdsad',
            username: 'zzz',
        };

        // 액션에 JSON 데이터를 전달하여 Redux 스토어의 상태를 업데이트합니다.
        dispatch(setUser(userData));

    };

    return (<div className="auth-page">
        <div className="container page">
            <div className="row">
                <div className="col-md-6 offset-md-3 col-xs-12">
                    <h1 className="text-xs-center">Sign in</h1>
                    <p className="text-xs-center">
                        <a href="/register">Need an account?</a>
                    </p>

                    <ul className="error-messages">
                        <li>That email is already taken</li>
                    </ul>

                    <form>

                        <fieldset className="form-group">
                            <input
                                className="form-control form-control-lg"
                                type="email"
                                placeholder="email"
                                value={credentials.email}
                                onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                            />
                        </fieldset>

                        <fieldset class="form-group">
                            <input class="form-control form-control-lg"
                                   type="password"
                                   placeholder="Password"
                                   value={credentials.password}
                                   onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                            />
                        </fieldset>
                        <button class="btn btn-lg btn-primary pull-xs-right" onClick={handleLogin}>Sign in</button>
                    </form>
                </div>
            </div>
        </div>
    </div>);
}

export default Login;
