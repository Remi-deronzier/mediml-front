import Modal from '@components/modal';

interface Props {
  show: boolean;
}

export default function PatientWithStrokeModal({ show }: Props) {
  return (
    <Modal
      title="Attention!"
      description="Patient has been predicted to have a stroke"
      type="danger"
      buttonLabel="Close"
      show={show}
    />
  );
}
