const initialState = {
    posts: []
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_POSTS_SUCCESS':
        return { ...state, posts: action.payload };
      default:
        return state;
    }
  };
  
  export default reducer;