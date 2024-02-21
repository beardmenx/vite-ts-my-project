import  { FC } from 'react'
import { NavLink } from 'react-router-dom'

type ButtonsNavBarProps ={
   title : string,
   to: string
}
import s from "./ButtonsNavBar.module.css"

 const ButtonsNavBar:FC<ButtonsNavBarProps> =  ({title, to}) => {


  return (
   <NavLink key={title}   to={to}
   className={(navData) => (navData.isActive ? s.item + " " +s.active : s.item )}
   >
    {title}
    
   </NavLink>
  )
}
export {ButtonsNavBar}

