import BoardHeader from 'components/common/_Layouts/headers/BoardHeader/BoardHeader'
import BoardLayout from 'components/common/_Layouts/layouts/BoardLayout/BoardLayout'

import QnaDetailContent from './_fragments/QnaDetailContent'

const QnaDetail = () => {
  return (
    <BoardLayout
      header={<BoardHeader title="질문" />}
      content={<QnaDetailContent />}
    />
  )
}

export default QnaDetail
