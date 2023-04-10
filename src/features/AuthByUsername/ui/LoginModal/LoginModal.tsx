import { Suspense } from 'react';
import { classNames } from 'shared/lib/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { Loader } from 'shared/ui/Loader';
import cls from './LoginModal.module.scss';
import { LoginFormAsync } from '../LoginForm/LoginForm.asyc';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => (
  <Modal
    className={classNames(cls.LoginModal, {}, [className])}
    isOpen={isOpen}
    onClose={onClose}
    lazy
  >
    <Suspense fallback={<Loader />}>
      <LoginFormAsync onSucces={onClose} />
    </Suspense>
  </Modal>
);
