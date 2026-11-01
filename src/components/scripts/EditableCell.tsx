import {
  ButtonGroup,
  Editable,
  EditableInput,
  EditablePreview,
  EditableTextarea,
  IconButton,
  useEditableControls,
} from "@chakra-ui/react";
import { FC } from "react";
import { FaCheck } from "react-icons/fa6";
import { MdClose } from "react-icons/md";

import { COLORS } from "@constants";
import { getTextDirection } from "@utils";

type Props = {
  value: string;
  fieldType: "text" | "number";
  maxChars: number;
  onSaveAction: (value: string) => void;
};

const EditableControls = () => {
  const { isEditing, getSubmitButtonProps, getCancelButtonProps } =
    useEditableControls();

  return isEditing ? (
    <ButtonGroup justifyContent="center" size="sm" mt={2}>
      <IconButton
        icon={<FaCheck />}
        {...getSubmitButtonProps()}
        aria-label="check-button"
      />
      <IconButton
        icon={<MdClose />}
        {...getCancelButtonProps()}
        aria-label="cancel-button"
      />
    </ButtonGroup>
  ) : null;
};

const EditableCell: FC<Props> = ({
  value,
  fieldType,
  maxChars,
  onSaveAction,
}: Props) => {
  const dir = getTextDirection(value);
  return (
    <Editable
      defaultValue={value}
      onSubmit={(value) => {
        onSaveAction(value);
      }}
    >
      <EditablePreview
        dir={dir}
        width="100%"
        maxW="100%"
        minH="20px"
        whiteSpace="pre-wrap"
        overflow="hidden"
        display="-webkit-box"
        style={{
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: 4,
        }}
        wordBreak="break-all"
        cursor="pointer"
        _hover={{ bgColor: COLORS.main.hoverGray }}
      />
      {fieldType === "text" ? (
        <EditableTextarea
          dir={dir}
          maxLength={maxChars}
          maxW="100%"
          height={20}
        />
      ) : (
        <EditableInput type={fieldType} maxLength={maxChars} maxW="100%" />
      )}

      <EditableControls />
    </Editable>
  );
};

export default EditableCell;
