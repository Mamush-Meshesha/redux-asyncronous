const { createStore } = require("redux")

//initial state
const initialState = {
    posts: []
}
//actions
const fetchPost = () => {
    return {
        type: 'FETCH_POST',
    }
}
const fetchPostSuccess = () => {
    return {
        type: 'FETCH_POST_SUCCESS',
    }
}
const fetchPostFailure = () => {
    return {
        type: "FETCH_POST_FAILURE"
    }
}
//reducers

const postReducer = (state = initialState, action) => {
    switch (action.type) { 

    }
}
//store
const store = createStore(postReducer)
//dispatch