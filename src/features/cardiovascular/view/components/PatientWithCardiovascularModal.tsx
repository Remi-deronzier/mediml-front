import Modal from '@components/modal';

interface Props {
  show: boolean;
}

export default function PatientWithCardiovascularModal({ show }: Props) {
  return (
    <Modal
      title="Attention!"
      description="Patient has been predicted to have a cardiovascular disease"
      type="danger"
      buttonLabel="Close"
      show={show}
    />
  );
}
