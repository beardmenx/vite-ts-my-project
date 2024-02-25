import React, { useState, useEffect } from "react";
import axios from "axios";
import { EnglishItem } from "./englichItems/EnglishItems";
import { Modal } from "../Modal/Modal";
import s from "./English.module.css";
import { keepPreviousData, useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { list } from 'postcss'

import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'


import { EnglishCardInterface } from "../../models/EnglishCars";

// interface QuestionCard {
//   id: string;
//   img: string;
//   answer: string;
// }

// interface Card {
//   id: number;
//   title: string;
//   img: string;
//   cards: QuestionCard[];
// }

export const English: React.FC = () => {
  const [active, setActive] = useState<boolean>(false);
  const [englishCards, setEnglishCards] = useState<EnglishCardInterface[]>([]);

  useEffect(() => {
    const fetchEnglishCards = async () => {
      try {
        const { data } = await axios.get<EnglishCardInterface[]>(
          "https://65d63771f6967ba8e3bdba15.mockapi.io/englishCard"
        );
        setEnglishCards(data);
      } catch (error) {
        console.error("Error fetching English cards:", error);
      }
    };

    fetchEnglishCards();
  }, []);

  const {ref, inView} =useInView()

    useEffect(()=>{
        
        if(inView) fetchNextPage()
    },[inView])

   const getCards = async (page) => {
    console.log(page, page.pageParam)
      const {data} = await axios.get(`https://65d63771f6967ba8e3bdba15.mockapi.io/englishCard?page=${page.pageParam}&limit=4`);
      console.log(data)
      return data
   
  }

   const {isPending, error, data, isFetching, fetchNextPage, hasNextPage, isFetchingNextPage,} = useInfiniteQuery({
      queryKey:['englishCard'],
      queryFn: getCards,
      staleTime: 3000,
      initialPageParam: 1,
      getNextPageParam: (lastPage, allPages) =>{
        return lastPage.length === 0 ? null : allPages.length + 1
      }
   })

   const cards = data ? data.pages.flatMap(page => page) : []

   console.log(cards)
   if (isPending) {
      return <h1 className='text-3xl text-center my-8 font-bold text-gray-400'>Loading...</h1>;
  }

  if (error) {
      return <h1 className='text-3xl text-center my-8 font-bold text-gray-400'>Error: {error.message}</h1>;
  }

  return (
    <div>
      <h2 className="text-center text-5xl">Ready FlashCards</h2>

      {/* {englishCards.map((card) => (
        <EnglishItem key={card.id} card={card} />
      ))} */}
    {cards.map((card) => <EnglishItem key={card.id} card={card}/>)}
    {hasNextPage && <div ref={ref} className='text-3xl text-center my-8 font-bold text-gray-400'>Loading...</div>}

      <div className={s.section}>
        <button className={s.btn} onClick={() => setActive(true)}>
          + create your own card
        </button>
      </div>

      <Modal active={active} setActive={setActive}>
        <form className={s.form}>
          <input className={s.input} type="text" placeholder=" Add text" />
          <input className={s.input} type="text" placeholder="Add translate" />
          <input className={s.inputFile} type="file" />
          <button className="pl-4 pr-4 text-lg">Submit</button>
        </form>
      </Modal>
    </div>
  );
};
