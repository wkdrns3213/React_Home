import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSlice from "../features/slice/rootSlice";
import rootSaga from "../features/saga/RootSaga";


const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
        reducer: rootSlice,  // 루트 리듀서 또는 루트 Slice를 여기에 전달
        middleware: (getDefaultMiddleware) => {
            return getDefaultMiddleware().concat(sagaMiddleware);
        },
    }
);
sagaMiddleware.run(rootSaga); // 루트 사가를 실행

export default store;



