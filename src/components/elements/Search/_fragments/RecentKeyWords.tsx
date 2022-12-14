import { MouseEvent, useEffect, useState } from 'react'

import Badge from 'components/common/Badge'
import Text from 'components/common/Text'
import Col from 'components/common/_Grid/Col'
import Row from 'components/common/_Grid/Row'
import { styled } from 'styles/globalStitches'

const RecentKeyWords = () => {
  const [recentSearch, setRecentSearch] = useState([
    { title: '무릎이 아파요' },
    { title: '머리가 아파요' },
    { title: '어깨가 아파요' },
    { title: '골반이 아파요' },
  ])
  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    const newArr = recentSearch.filter(
      keyword => keyword.title !== e.currentTarget.dataset.title,
    )
    setRecentSearch(newArr)
  }

  const recentSearchList = recentSearch.map(item => {
    return (
      <Badge
        key={item.title}
        title={item.title}
        deleteIcon
        onClick={handleClick}
      />
    )
  })

  return (
    <Wrapper>
      <Row css={{ m: '20px 0 22px' }} justify="spaceBetween">
        <Text size="h4" weight="bold">
          최근 검색어
        </Text>
        <DeleteBtn>모두 지우기</DeleteBtn>
      </Row>
      <RecentTagList>{recentSearchList}</RecentTagList>
    </Wrapper>
  )
}

export default RecentKeyWords

const Wrapper = styled(Col, {})

const DeleteBtn = styled('button', {
  color: '$secondary_text',
  fontSize: '$BODY2',
  fontWeight: '$semiBold',
})

const RecentTagList = styled(Row, {
  gap: '5px',
})
