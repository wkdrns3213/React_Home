import {all} from 'redux-saga/effects';
import {watchExampleSaga} from "./auth/AuthSaga";
// 예제 사가를 가져옴

export default function* rootSaga() {
    yield all([
        watchExampleSaga(), // 예제 사가 실행
        // 다른 사가들을 여기에 추가
    ]);
}