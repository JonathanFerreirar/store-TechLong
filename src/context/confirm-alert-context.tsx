import { createContext, useState } from "react";

type ModalState = {
  [model: string]: boolean;
};

const confirmAlertContext = createContext({
  modalState: {} as ModalState,
  toastState: false,
  handleAlertModal: (model: string) => {},
  handleToastState: () => {},
});

const ProviderAlert = ({ children }: any) => {
  const model = "nomeDoModelo";

  const [modalState, setModalState] = useState<ModalState>({
    [model]: false,
  });
  const [toastState, setToastState] = useState(false);

  const handleAlertModal = (model: string) => {
    setModalState({
      [model]: !modalState[model],
    });
  };

  const handleToastState = () => {
    setToastState((prevSatet) => !prevSatet);
    setTimeout(() => {
      if (!toastState) setToastState((prevSatet) => !prevSatet);
    }, 1300);
  };

  const AlertFunction = {
    modalState,
    toastState,
    handleAlertModal,
    handleToastState,
  };

  return (
    <confirmAlertContext.Provider value={AlertFunction}>
      {children}
    </confirmAlertContext.Provider>
  );
};

export default confirmAlertContext;

export { ProviderAlert };
