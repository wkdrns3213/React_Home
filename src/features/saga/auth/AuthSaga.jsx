import {call, put, takeEvery} from 'redux-saga/effects';
import {EXAMPLE_ACTION, exampleFailure, exampleSuccess} from "./AuthAction";


function* fetchExampleData(action) {
    try {
        // 비동기 작업 수행 (예: API 호출)
        const result = yield call(apiFunction, action.payload);
        yield put(exampleSuccess(result)); // 성공 액션 디스패치
    } catch (error) {
        yield put(exampleFailure(error)); // 실패 액션 디스패치
    }
}

export function* watchExampleSaga() {
    yield takeEvery(EXAMPLE_ACTION, fetchExampleData);
}