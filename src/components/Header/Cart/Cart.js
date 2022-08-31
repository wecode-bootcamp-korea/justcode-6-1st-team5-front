import './Cart.scss';
import Modal from 'react-modal';

export default function Cart({ setIsCartClicked }) {
  return (
    <div>
      <Modal
        isOpen={true}
        onRequestClose={() => setIsCartClicked(false)}
        className="modal flex_center"
      >
        <div className="modal_top">imtop</div>
        <div>ddd</div>
        <div>ddd</div>
        <div>ddd</div>
        <div>ddd</div>
        <div>ddd</div>
        <div>ddd</div>
        <div>ddd</div>
        <div>ddd</div>
        <div>ddd</div>
        <div>ddd</div>
        <div>ddd</div>
        <div>ddd</div>
        <div>ddd</div>
        <div>ddd</div>
        <div>ddd</div>
        <div>ddd</div>
        <div>ddd</div>
        <div>ddd</div>
        <div>ddd</div>
        <div>ddd</div>
        <div>ddd</div>
        <div className="modal_bottom">imbottom</div>
      </Modal>
    </div>
  );
}
