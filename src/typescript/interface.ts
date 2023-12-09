export interface ModalWindowProps {
  modalWindowStatus: boolean;
  setModalWindow: React.Dispatch<React.SetStateAction<boolean>>;
  type: string;
}

export interface ModalWindowEditProps {
  name: string;
  address: string;
  indx: number;
  setModalWindow: React.Dispatch<React.SetStateAction<boolean>>;
  modalWindowStatus: boolean;
}

export interface tableRowInteface {
  name: string;
  address: string;
  indx: number;
}
