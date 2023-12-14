import React, { useState, useEffect } from "react"
import Layout from "./components/Layout";
import Card from './components/Card'
import { GetPostsData, AddNewPost, EditAnPost } from "./slices/appSlice";
import { useDispatch, useSelector } from 'react-redux'
export default function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(GetPostsData())
  }, [dispatch])
  const data = useSelector(state => state.app.posts)
  const onSubmitNewPost = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      title: formData.get("title"),
      body: formData.get("body"),
      userId: 1,
    };
    dispatch(AddNewPost(data))
  }
  const onSubmitEditPost = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      userId: 1,
      title: formData.get("title"),
      body: formData.get("body"),
      userId: 1,
    };
    dispatch(EditAnPost(data))
  }

  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        RECAPITULARE TW - REDUX
      </h1>
      <div className="border-4 border-slate-900 p-6">
        <form className="flex flex-col gap-4 justify-center items-center" onSubmit={onSubmitNewPost}>
          <label htmlFor="title" >Title</label>
          <input type="text" name="title" className="border-2 border-slate-600 rounded-xl pl-2" placeholder="Post title" />
          <label htmlFor="body">Body</label>
          <input type="text" name="body" className="border-2 border-slate-600 rounded-xl pl-2" placeholder="Post body" />
          <button className="border border-gray-500 p-4 rounded-2xl bg-slate-600 text-white ">ADD NEW POST</button>
        </form>
      </div>
      <hr />
      <div className="border-4 border-slate-900 p-6">
        <form className="flex flex-col gap-4 justify-center items-center" onSubmit={onSubmitEditPost}>
          <label htmlFor="title" >Title</label>
          <input type="text" name="title" className="border-2 border-slate-600 rounded-xl pl-2" placeholder="Post title" />
          <label htmlFor="body">Body</label>
          <input type="text" name="body" className="border-2 border-slate-600 rounded-xl pl-2" placeholder="Post body" />
          <button className="border border-gray-500 p-4 rounded-2xl bg-slate-600 text-white ">EDIT AN POST</button>
        </form>
      </div>
      <hr />
      <Layout>
        {data?.map((item, index) => {
          return (
            <Card key={index} data={item} />
          )
        })}
      </Layout>
    </div>
  )
}
