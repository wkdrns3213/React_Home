// 액션 타입 정의
const LOGIN_ACTION = 'LOGIN_ACTION';
export const EXAMPLE_ACTION = 'EXAMPLE_ACTION';
export const EXAMPLE_SUCCESS = 'EXAMPLE_SUCCESS';
export const EXAMPLE_FAILURE = 'EXAMPLE_FAILURE';

// 리듀서 초기 상태
const initialState = {
    user: null,  // 초기에는 사용자 정보가 없으므로 null로 설정
    error: null, // 오류 정보
};


export const exampleAction = (payload) => ({
    type: EXAMPLE_ACTION,
    payload
});

export const exampleSuccess = (data) => ({
    type: EXAMPLE_SUCCESS,
    user: {
        bio: data.bio,
        email: data.email,
        image: data.image,
        token: data.token,
        username: data.username,
    },
});

export const exampleFailure = (error) => ({
    type: EXAMPLE_FAILURE,
    error,
});


// 리듀서 함수
const exampleReducer = (state = initialState, action) => {
    switch (action.type) {
        case EXAMPLE_SUCCESS:
            // EXAMPLE_SUCCESS 액션을 처리할 때 사용자 정보를 업데이트합니다.
            return {
                ...state,
                user: action.user, // 사용자 정보를 액션에서 전달받은 값으로 업데이트
                error: null,       // 오류를 초기화
            };
        case EXAMPLE_FAILURE:
            // EXAMPLE_FAILURE 액션을 처리할 때 오류 정보를 업데이트합니다.
            return {
                ...state,
                user: null,       // 사용자 정보 초기화
                error: action.error, // 오류 정보를 액션에서 전달받은 값으로 업데이트
            };
        default:
            return state; // 다른 액션의 경우 상태를 변경하지 않고 현재 상태를 반환합니다.
    }
};

export default exampleReducer;