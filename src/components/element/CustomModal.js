import React from 'react'

export default function CustomModal(props) {
    const {isOpen, title, toggleModal} = props;
    return (
        <>
        <div className={`modal ${isOpen ? "show fade" : ""}`} style={{display: isOpen ? 'block': 'none'}}>
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{title}</h5>
                        <button type="button" className="btn-close" onClick={() => toggleModal(false)}></button>
                    </div>
                    <div className="modal-body">
                    {props.children}
                    </div>
                    </div>
                </div>
        </div>
            <div className="modal-backdrop"></div>
        </>
    )
}
