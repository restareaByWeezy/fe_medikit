import Text from 'components/common/Text'
import Col from 'components/common/_Grid/Col'
import Row from 'components/common/_Grid/Row'
import {
  IconHeartFilled,
  IconMessage,
  IconShare,
} from 'components/common/_Icons'
import { styled } from 'styles/globalStitches'

const QnaDetailContent = () => {
  return (
    <Col>
      <Category size="body2">category</Category>
      <Title size="h2" weight="semiBold" as="h1">
        무릎에 물이 찬 것 같은데 한 번만 모양 확인해 주세요
      </Title>
      <Date size="body2">2022</Date>
      <Content size="body1" color="secondary" as="p">
        Mri찍고, 연골연화증이라고 진단받았습니다. 8개월째 양쪽 무릎 굽히는게
        불편한 상태이고, 의자에 오래 앉으면 앞무릎 통증도 있습니다. 연골연화증
        이후로 무릎이 항상 무거웠던것 같아요. 2주전 진료받고 왔을때
        담당선생님께서 별 말씀 없으셨던거 보니 그땐 괜찮았던것 같은데 며칠전
        운동한다고 조금 빠르게 30분 걷고 들어와서 무릎을 자세히 보게되었는데
        원래 제 무릎 모양인건지 무릎이 부어보여서요 그전에는 자세히 살펴 보지
        않았던 것 같아요 힘 없이 다리를 펴면 무릎이 동그란모양이라, 물이 찼나
        싶은데 다리에 힘을주면 또 그렇게 보이지는 않아요. 슬개골을 눌러봐도 떠
        있는 느낌 없구요. 무릎에 물이 찬 건지 사진 좀 봐주세요. 그리고 원래
        콕스케어 약을 먹고있는데 만약에 제 무릎에 물이 찼다면 별다른 조치없이
        콕스케어 계속 먹으면 도움이 되나요? 다음달 7일이 병원 예약인데 그때 까지
        기다려도 될까요?
      </Content>
      <Tags>#무릎 #무릎통증 #연골연화증 #앞무릎 #통증</Tags>
      <IconRow align="center" css={{ gap: '5px' }}>
        <Row>
          <IconMessage />
          <Text color="secondary" size="body2">
            1
          </Text>
        </Row>

        <Row>
          <Row>
            <IconHeartFilled />
            <Text css={{ marginRight: '12px' }} color="secondary" size="body2">
              123
            </Text>
            <IconShare />
          </Row>
        </Row>
      </IconRow>
    </Col>
  )
}

export default QnaDetailContent

const Category = styled(Text, {
  marginBottom: '16px',
  fontSize: '$BODY2',
})

const Title = styled(Text, {
  marginBottom: '12px',
})

const Date = styled(Text, {
  marginBottom: '24px',
})

const Content = styled(Text, {
  flex: 1,
  marginBottom: '12px',
  lineHeight: '23px',
})

const Tags = styled(Row, {
  marginBottom: '34px',
})

IconShare.toString = () => '.icon-share'

const IconRow = styled(Row, {
  justifyContent: 'space-between',

  '& div': { alignItems: 'center' },

  '& svg': {
    marginTop: '5px',
    height: '24px',
    verticalAlign: 'center',
    marginRight: '5px',
    cursor: 'pointer',
  },
})
