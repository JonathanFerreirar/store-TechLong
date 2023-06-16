import { createContext, useState } from "react";

type ModalState = {
  [model: string]: boolean;
};

const confirmAlertContext = createContext({
  handleAlertModal: (model: string) => {},
  modalState: {} as ModalState,
});

const ProviderAlert = ({ children }: any) => {
  const model = "nomeDoModelo";

  const [modalState, setModalState] = useState<ModalState>({
    [model]: false,
  });

  const handleAlertModal = (model: string) => {
    setModalState({
      [model]: !modalState[model],
    });
  };

  const AlertFunction = {
    handleAlertModal,
    modalState,
  };

  return (
    <confirmAlertContext.Provider value={AlertFunction}>
      {children}
    </confirmAlertContext.Provider>
  );
};

export default confirmAlertContext;

export { ProviderAlert };
