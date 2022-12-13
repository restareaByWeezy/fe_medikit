import { ChangeEvent, useState } from 'react'

import Button from 'components/common/Button'
import Col from 'components/common/_Grid/Col'
import Row from 'components/common/_Grid/Row'
import { useRouter } from 'next/router'
import { styled } from 'styles/globalStitches'

const AddQaContent = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const router = useRouter()

  const handleChangeContent = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { subject } = e.currentTarget.dataset
    subject === 'title' && setTitle(e.currentTarget.value)
    subject === 'content' && setContent(e.currentTarget.value)
  }

  const handleFinish = () => {
    router.push('/selectcategory')
  }

  return (
    <Col css={{ height: '100%' }}>
      <ContentWrapper>
        <TitleInput
          placeholder="증상을 한 문장으로 요약해 주세요"
          data-subject="title"
          value={title}
          onChange={handleChangeContent}
        />
        <ContentArea
          placeholder="증상을 자세히 작성해 주세요"
          data-subject="content"
          value={content}
          onChange={handleChangeContent}
        />
      </ContentWrapper>

      <Row
        css={{
          width: '100%',
          position: 'absolute',
          left: '50%',
          gap: '12px',
          transform: 'translateX(-50%)',
          bottom: '0',
          padding: '12px 6px',
        }}
      >
        <Button
          css={{
            width: '100%',
            flex: 1,
          }}
          color="tertiary"
        >
          임시 저장
        </Button>
        <Button
          onClick={handleFinish}
          css={{
            width: '100%',
            flex: 1,
          }}
          color="secondary"
        >
          작성 완료
        </Button>
      </Row>
    </Col>
  )
}

export default AddQaContent

// STYLE ///////////////////

const ContentWrapper = styled(Col, {
  height: '45vh',
  padding: '24px 20px 0 20px',
  ['& input']: {
    color: '$secondary_text',
    border: 'none',
    backgroundColor: 'transparent',
  },
})

const TitleInput = styled('textarea', {
  fontSize: '$H4',
  fontWeight: '$bold',
  marginBottom: '20px',
  backgroundColor: 'transparent',
  resize: 'none',
  border: 'none',
})

const ContentArea = styled('textarea', {
  flexGrow: 1,
  height: '100%',
  fontSize: '$BODY1',
  fontFamily: 'Pretandard',
  backgroundColor: 'transparent',
  resize: 'none',
  border: 'none',
})
