import './PopupComponent.scss'



const PopupComponent = ({ children,setState }) => {
    return (
        <>
            <div className="popup-container" onClick={
                (e) => {
                    if (e.target.className === 'popup-container')
                        setState(false)
                }}>
                <div className="popup-body">
                    {children}
                </div>
            </div>
        </>
    )
}

export default PopupComponent


