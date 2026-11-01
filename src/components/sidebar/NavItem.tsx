import { Box, Flex, FlexProps, Icon } from "@chakra-ui/react";
import { FC } from "react";
import { IconType } from "react-icons";
import { useNavigate } from "react-router-dom";

interface NavItemsProps extends FlexProps {
  children: string;
  icon: IconType;
  path: string;
  isExternalPath?: boolean;
}

const NavItem: FC<NavItemsProps> = ({
  children,
  icon,
  path,
  isExternalPath,
}: NavItemsProps) => {
  const navigate = useNavigate();

  return (
    <Box style={{ textDecoration: "none" }} _focus={{ boxShadow: "none" }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        onClick={() => {
          isExternalPath ? window.open(path, "_blank") : navigate(path);
        }}
      >
        <Icon mr="4" fontSize="16" _groupHover={{ color: "white" }} as={icon} />
        {children}
      </Flex>
    </Box>
  );
};

export default NavItem;
