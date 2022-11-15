import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MODAL_CLOSE } from './redux/action'

export default function Modal () {

  const {isOpen,name,text} = useSelector(state => state.modalState)

  const dispatch = useDispatch()
  return (
    <div className={`modal-overlay ${isOpen ? `isModalOpen` : null}`}>
        <div className="modal-container">
            <h4>{name}</h4>
            <p>{text}</p>
            <button className='btn btn-primary'
            onClick={()=>dispatch({type:MODAL_CLOSE})}
            >close</button>
        </div>

    </div>
  )
}
