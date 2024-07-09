import "./WatchModal.css";

import ShopItems from "../shopItems/ShopItems";
import { useContext } from "react";
import { Modal } from "antd";
import WatchItemsContext from "../../context/WatchItemsContext";

type WatchModalProps = {
  open: boolean;
  handleClose: () => void;
};

function WatchModal({ handleClose, open }: WatchModalProps) {
  const { ecommerceWatchItems } = useContext(WatchItemsContext);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      onCancel={handleClose}
      onOk={handleClose}
      className="WatchModal"
      title="Those are the items you've added to your watch list:"
      children={<ShopItems items={ecommerceWatchItems} />}
    ></Modal>
  );
}

export default WatchModal;
