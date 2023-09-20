import Modal from '@components/modal';

interface Props {
  show: boolean;
}

export default function PatientWithoutStrokeModal({ show }: Props) {
  return (
    <Modal
      title="Good news!"
      description="Patient has been predicted not to have a stroke"
      type="success"
      buttonLabel="Close"
      show={show}
    />
  );
}
