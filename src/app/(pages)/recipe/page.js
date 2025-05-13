import React from 'react'
import Recipes from './components/Recipes'
import Ingredients from './components/Ingredients'
import Inbox from '@/app/home/component/Inbox'
import Morerecipes from './components/Morerecipes'

const page = () => {
  return (
    <>
    <Recipes/>
    <Ingredients/>
    <Inbox/>
    <Morerecipes/>
    </>
  )
}

export default page