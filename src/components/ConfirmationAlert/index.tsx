import React, { FC, useRef } from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  useDisclosure,
  AlertDialogCloseButton,
} from "@chakra-ui/react";

type ConfirmationAlertProps = {
  title: string;
  func: () => void;
};

const ConfirmationAlert: FC<ConfirmationAlertProps> = ({
  func,
  title,
}: ConfirmationAlertProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef() as React.RefObject<any>;

  return (
    <>
      <Button
        _hover={{}}
        size="lg"
        bg="rfk.orange"
        marginTop="10px"
        onClick={onOpen}
      >
        Send inn
      </Button>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>Send inn {title}</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            Er du sikker på at du vil sende inn {title}?
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              No
            </Button>
            <Button
              colorScheme="green"
              ml={3}
              onClick={() => {
                func();
                onClose();
              }}
            >
              Yes
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default ConfirmationAlert;
