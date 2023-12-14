import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  posts: null,
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    getAllPost: (state, action) => {
      state.posts = action.payload
    }
  },
})

export const { getAllPost, addAPost } = appSlice.actions
export default appSlice.reducer

export const GetPostsData = () => async (dispatch) => {
  await fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => dispatch(getAllPost(json)));
}


export const AddNewPost = (payload) => async (dispatch, getState) => {
  const state = getState(state => state.app.posts)
  const currentPosts = state.app.posts;
  await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => {
      const newState = [...currentPosts, json];
      dispatch(getAllPost(newState))
    });
}

export const EditAnPost = (payload) => async (dispatch, getState) => {
  const state = getState(state => state.app.posts)
  const currentPosts = state.app.posts;
  await fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    body: JSON.stringify(payload),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => {
      const updatedPosts = currentPosts.map((item) =>
        item.id === json.id ? { ...item, ...json } : item
      );
      dispatch(getAllPost(updatedPosts))

    });
}
