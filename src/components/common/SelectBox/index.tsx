import { useState } from 'react'

import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'

import { styled } from 'styles/globalStitches'

const SelectBox = () => {
  const [age, setAge] = useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string)
  }

  const menuList = 1

  return (
    <DropDown fullWidth>
      <Select
        value={age}
        onChange={handleChange}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
      >
        <MenuItem style={{ color: '#464c53' }} disabled value="">
          <div>아픈 부위를 선택해 주세요</div>
        </MenuItem>
        <MenuItem value={10}>무릎</MenuItem>
        <MenuItem value={20}>어깨</MenuItem>
        <MenuItem value={30}>손목</MenuItem>
      </Select>
    </DropDown>
  )
}

export default SelectBox

const DropDown = styled(FormControl, {
  height: '48px',

  ['& div']: {
    fontSize: '15px',
  },

  ['.MuiSelect-select']: {
    padding: '10px 14px',
  },
})
