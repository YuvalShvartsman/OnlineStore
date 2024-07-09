import "./WatchModal.css";

import { useContext } from "react";
import WatchItemsContext from "../../context/WatchItemsContext";

import ShopItems from "../shopItems/ShopItems";

import { Modal } from "antd";

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
      children={<ShopItems items={[...new Set(ecommerceWatchItems)]} />}
    />
  );
}

export default WatchModal;
