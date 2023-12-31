import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {exampleAction} from "../features/saga/auth/AuthAction";

function Login() {

    const dispatch = useDispatch();

    // 사용자 이름과 비밀번호를 관리할 상태를 정의합니다.
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // 사용자 이름 입력란 값이 변경될 때 호출되는 함수
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    // 비밀번호 입력란 값이 변경될 때 호출되는 함수
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (!email || !password) {
            alert("ㅗ")
        } else {

            const userData = {
                user: {
                    email: email, password: password, username: "zzz"
                }
            }

            dispatch(exampleAction(userData));
        }

    };

    return (
        <div className="auth-page">
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
                                    value={email}
                                    onChange={handleEmailChange}
                                />
                            </fieldset>

                            <fieldset className="form-group">
                                <input className="form-control form-control-lg"
                                       type="password"
                                       placeholder="Password"
                                       value={password}
                                       onChange={handlePasswordChange}
                                />
                            </fieldset>
                            <button className="btn btn-lg btn-primary pull-xs-right" onClick={handleLogin}>Sign in
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
