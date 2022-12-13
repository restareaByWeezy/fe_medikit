import BoardHeader from 'components/common/_Layouts/headers/BoardHeader/BoardHeader'
import BoardLayout from 'components/common/_Layouts/layouts/BoardLayout/BoardLayout'

import SelectCategoryContent from './_fragment/SelectCategoryContent'

const SelectCategory = () => {
  return (
    <BoardLayout
      header={<BoardHeader title="질문 작성" />}
      content={<SelectCategoryContent />}
    />
  )
}

export default SelectCategory
