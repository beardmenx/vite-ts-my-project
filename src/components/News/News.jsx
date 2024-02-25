import { keepPreviousData, useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { list } from 'postcss'
import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import {CardsNewsItem} from '../../UI/cards/cardsNewsItem/CardsNewsItem.tsx'
import s from "./news.module.css"

export const News = () => {
    const {ref, inView} =useInView()

    useEffect(()=>{
        
        if(inView) fetchNextPage()
    },[inView])

   const getPosts = async (page) => {
    console.log(page, page.pageParam)
      const res = await fetch(`https://65d63771f6967ba8e3bdba15.mockapi.io/news?page=${page.pageParam}&limit=4`);
        console.log(`https://65d63771f6967ba8e3bdba15.mockapi.io/news?page=${page.pageParam}&limit=4`)
      return res.json();
   
  }

   const {isPending, error, data, isFetching, fetchNextPage, hasNextPage, isFetchingNextPage,} = useInfiniteQuery({
      queryKey:['news'],
      queryFn: getPosts,
      staleTime: 3000,
      initialPageParam: 1,
      getNextPageParam: (lastPage, allPages) =>{
        return lastPage.length === 0 ? null : allPages.length + 1
      }
   })

   const posts = data ? data.pages.flatMap(page => page) : []

   if (isPending) {
      return <h1 className='text-3xl text-center my-8 font-bold text-gray-400'>Loading...</h1>;
  }

  if (error) {
      return <h1 className='text-3xl text-center my-8 font-bold text-gray-400'>Error: {error.message}</h1>;
  }



  return (
  <div className={s.news}>
    {posts.map((post, index) => <CardsNewsItem key={post.idNews} news={post}/>)}
    {hasNextPage && <div ref={ref} className='text-3xl text-center my-8 font-bold text-gray-400'>Loading...</div>}
  </div>
);
}


