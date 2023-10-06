import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {exampleAction} from "../features/saga/auth/AuthAction";

function Register() {


    const dispatch = useDispatch();

    // 사용자 이름과 비밀번호를 관리할 상태를 정의합니다.
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    function handleUsernameChange(e) {
        // 사용자 이름 입력란 값이 변경될 때 호출되는 함수
        setUserName(e.target.value);
        document.querySelector(".error-messages").setAttribute("hidden", "hidden");
    }


    const handleEmailChange = (e) => {
        // Email 입력란 값이 변경될 때 호출되는 함수
        setEmail(e.target.value);
        document.querySelector(".error-messages").setAttribute("hidden", "hidden");
    };


    const handlePasswordChange = (e) => {
        // 비밀번호 입력란 값이 변경될 때 호출되는 함수
        setPassword(e.target.value);
        document.querySelector(".error-messages").setAttribute("hidden", "hidden");
    };

    const handleClickBtn = (e) => {
        if (!userName || !email || !password) {
            document.querySelector(".error-messages").removeAttribute("hidden");
        } else {
            const userData = {
                user: {
                    username: userName, email: email, password: password
                }
            }

            dispatch(exampleAction(userData));
        }
    }

    return (
        <div className="auth-page">
            <div className="container page">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-xs-12">
                        <h1 className="text-xs-center">Sign up</h1>
                        <p className="text-xs-center">
                            <a href="/login">Have an account?</a>
                        </p>

                        <ul className="error-messages">
                            <li>That email is already taken</li>
                        </ul>

                        <form>
                            <fieldset className="form-group">
                                <input
                                    className="form-control form-control-lg"
                                    type="text"
                                    placeholder="Username"
                                    value={userName}
                                    onChange={handleUsernameChange}
                                />
                            </fieldset>
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
                            <button className="btn btn-lg btn-primary pull-xs-right" onClick={handleClickBtn}>Sign up
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register