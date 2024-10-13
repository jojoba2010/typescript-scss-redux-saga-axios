import React from 'react'
import loadable from '@loadable/component'
import Ball from '@assets/ball.png'
import Gamepad from '@assets/gamepad.png'
import Education from '@assets/education.png'
import Art from '@assets/art.png'
import Health from '@assets/health.png'
const Dropdown = loadable(() => import('@UI/dropdown'))
const ShowDropdown=()=> {
  const items=[{
    label: 'Education',
    value: 'education',
    icon: Education
  },
  {
    label: 'Art',
    value: 'art',
    icon: Art
  },
  {
    label: 'Sport',
    value: 'sport',
    icon: Ball
  },
  {
    label: 'Games',
    value: 'games',
    icon: Gamepad
  },
  {
    label: 'Health',
    value: 'Health',
    icon: Health
  }]
  const onChangeDropdown=slectedValues=>{
    console.log('slectedValues##', slectedValues)
  }
  const onNewItemAdded=(newItem, allItems)=>{
    console.log('newItem##',newItem,'All items##' ,allItems)
  }
  return (<Dropdown 
          items={items} 
          onChange={onChangeDropdown} 
          onNewItemAdded={onNewItemAdded}   
          defaultValue={[{
            label: 'Games',
            value: 'games',
          },
          {
            label: 'Health',
            value: 'Health',
          }]}
          /> );
}

export default ShowDropdown;