import BoardLayout from 'components/common/_Layouts/BoardLayout'
import BoardHeader from 'components/common/_Layouts/headers/BoardHeader/BoardHeader'

import QnaDetailContent from './_fragments/QnaDetailContent'

const QnaDetail = () => {
  return (
    <BoardLayout
      header={<BoardHeader title="질문" />}
      content={<QnaDetailContent />}
      noPadding
    />
  )
}

export default QnaDetail
