'use client'

import React from 'react'
import Container from '../Container'
import SingleDream from '../Dreams/SingleDream';
import RichTextEditor from '../RichTextEditor';

function MyDream() {
  return (
        <Container>
          <RichTextEditor />
            <SingleDream endPoint={'/api/dream/getByUserId'}/>
        </Container>
  )
}

export default MyDream