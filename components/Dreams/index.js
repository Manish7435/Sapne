import React from 'react'
import Container from "../Container"
import SingleDream from "./SingleDream"
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '@/store/CounterSlice';

const Dreams = ()=>{
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.value);
  return(
    <div className=" sm:py-20">
       <h1>Counter: {count}</h1>
       <button onClick={() => dispatch(increment())}>Increment</button>
    <Container >
      <SingleDream endPoint={'/api/dream/get'}/>
    </Container>
    </div>
  )
}
export default Dreams