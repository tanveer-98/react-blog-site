import React from 'react'
interface ITagProps{
    tag:string;
}
import {Button} from '../Button'
const Tag = ({tag}:ITagProps) => {
  return (
    <Button>{tag}</Button>
  )
}

export default Tag