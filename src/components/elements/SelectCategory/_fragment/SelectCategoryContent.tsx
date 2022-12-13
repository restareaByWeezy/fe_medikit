import { ChangeEvent, useRef, useState } from 'react'

import CustomAccordion from 'components/common/Accordion'
import Button from 'components/common/Button'
import Text from 'components/common/Text'
import Col from 'components/common/_Grid/Col'
import Row from 'components/common/_Grid/Row'
import TagBox from 'components/elements/AddQa/_fragments/TagBox'
import { styled } from 'styles/globalStitches'

import PainSpotList from './PainSpotList'

const SelectCategoryContent = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>()
  const [open, setOpen] = useState(false)
  const [toggleAccordion, setToggleAccordion] = useState(false)
  const contentRef = useRef<HTMLUListElement>(null)

  const handleFocus = () => {
    setOpen(true)
  }
  const handleBlur = () => {
    setOpen(false)
  }

  const handleFinish = () => {
    console.log('finish')
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedCategory(e.currentTarget.value)
  }

  return (
    <>
      <CustomAccordion
        title={'무릎에 물이 찬 것 같은데 한 번만 모양 확인해 주세요'}
        content={
          'Mri찍고, 연골연화증이라고 진단받았습니다. 8개월째 양쪽 무릎 굽히는게 불편한 상태이고, 의자에 오래 앉으면 앞무릎 통증도 있습니다. 연골연화증 이후로 무릎이 항상 무거웠던것 같아요.'
        }
        setIsOpen={setToggleAccordion}
      />
      <SelectionBox>
        {!toggleAccordion && (
          <>
            <Col css={{ position: 'relative' }}>
              <Text weight="bold">아픈 부위</Text>
              <CategoryWrapper
                placeholder="아픈 부위를 입력해 주세요"
                onFocus={handleFocus}
                onBlur={handleBlur}
                value={selectedCategory}
                onChange={handleChange}
              />
              <PainSpotList
                contentRef={contentRef}
                setOpen={setOpen}
                setSelectedCategory={setSelectedCategory}
                open={open}
              />
            </Col>
            <Col css={{ marginBottom: '40px' }}>
              <Text weight="bold">태그</Text>
              <TagBox />
            </Col>
          </>
        )}

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
            color="primary"
          >
            질문 올리기
          </Button>
        </Row>
      </SelectionBox>
    </>
  )
}

export default SelectCategoryContent

//STYLE ////////////////////////////////////

const SelectionBox = styled(Col, {
  flex: '1',
  width: '100%',
  height: '100%',
  backgroundColor: '$white',
  gap: '24px',
  padding: '24px 20px 0',
})

const CategoryWrapper = styled('input', {
  width: '100%',
  marginTop: '6px',
  minHeight: '47px',
  border: '1px solid $GRAY2',
  borderRadius: '4px',
  gap: '2px',
  padding: '12px 16px',
  fontSize: '15px',
  cursor: 'pointer',
})
