import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'
import style from './Modal.module.css'

const Backdrop = props => {
  return <div className={style.backdrop} onClick={props.onCloseCart}></div>
}

const ModalOverlay = props => {
  return <div className={style.modal}>
    <div className={style.content}>{props.children}</div>
  </div>
}

const portalLocation = document.getElementById('overlays')

const Modal = (props) => {
  return (
    <Fragment>
      {/* <Backdrop />
      <ModalOverlay>{props.children}</ModalOverlay> */}
      {ReactDOM.createPortal(<Backdrop onCloseCart={props.onCloseCart}/>, portalLocation)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalLocation)}
    </Fragment>
  )
}

export default Modal