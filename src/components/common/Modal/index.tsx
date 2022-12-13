import { ReactNode } from 'react'

import { Card, CardContent, Modal } from '@mui/material'

interface ModalProps {
  open: boolean
  handleClose: () => void
  ariaLabel?: string
  ariaDescribedBy?: string
  children: ReactNode
}

const CustomModal = ({
  open,
  handleClose,
  ariaLabel,
  ariaDescribedBy,
  children,
}: ModalProps) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby={ariaLabel}
      aria-describedby={ariaDescribedBy}
    >
      <Card
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        sx={{ minWidth: 275 }}
      >
        <CardContent>{children}</CardContent>
      </Card>
    </Modal>
  )
}

export default CustomModal
