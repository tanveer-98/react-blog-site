import React from 'react'
interface ITagProps{
    tag:string;
}
import {Button} from '../Button'
const Tag = ({tag}:ITagProps) => {
  // console.log(tag)
  return (
    <Button>{tag}</Button>
  )
}

export default Tag