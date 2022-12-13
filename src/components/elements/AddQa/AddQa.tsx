import BoardHeader from 'components/common/_Layouts/headers/BoardHeader/BoardHeader'
import BoardLayout from 'components/common/_Layouts/layouts/BoardLayout/BoardLayout'

import AddQaContent from './_fragments/AddQaContent'

const AddQa = () => {
  return (
    <BoardLayout
      header={<BoardHeader title="질문 작성" />}
      content={<AddQaContent />}
    />
  )
}

export default AddQa
