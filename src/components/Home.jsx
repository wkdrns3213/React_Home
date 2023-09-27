// 예시: src/components/Home.js

import React from 'react';
import {useSelector} from 'react-redux';

function Home() {
    const user = useSelector((state) => state.user.user);

    return (
        <div className="container">
            <div className="jumbotron">
                {user ? (
                    <div>
                        <h1 className="display-4">안녕하세요, {user.email}님!</h1>
                        <h2>게시글 목록</h2>
                        <ul className="list-group">
                        </ul>
                    </div>
                ) : (
                    <h1 className="display-4">로그인이 필요합니다.</h1>
                )}
            </div>
        </div>
    );
}

export default Home;
