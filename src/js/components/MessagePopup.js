import "../../css/MessagePopup.css"; 
function MessagePopup({ showPopup, setShowPopup }) {
  return (
    <div className="popup" onClick={(e) => e.target === e.currentTarget &&  setShowPopup({ visible: false, message: '', className: '' })} >
      <div className="popup-content">
        <p className={showPopup.className}>{showPopup.message}</p>
      </div>
    </div>
  );
}
export default MessagePopup;