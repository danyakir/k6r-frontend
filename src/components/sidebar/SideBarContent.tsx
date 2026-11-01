import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { FC } from "react";
import { IconType } from "react-icons";
import { BiHomeAlt2 } from "react-icons/bi";
import { GoLinkExternal } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { SiReadthedocs } from "react-icons/si";
import { useNavigate } from "react-router-dom";

import { STRINGS } from "@constants";
import { logo } from "@icons";

import NavItem from "./NavItem";
import SelectItem from "./SelectItem";

interface LinkItemProps {
  name: string;
  icon: IconType;
  path: string;
  isExternal?: boolean;
}

const LinkItems: Array<LinkItemProps> = [
  { name: "Scripts", icon: BiHomeAlt2, path: "/scripts/all" },
  { name: "Settings", icon: IoSettingsOutline, path: "/settings" },
  { name: "Docs", icon: SiReadthedocs, path: "/docs" },
  {
    name: "k6 Docs",
    icon: GoLinkExternal,
    path: "https://grafana.com/docs/k6/latest/",
    isExternal: true,
  },
];

const SidebarContent: FC = () => {
  const navigate = useNavigate();

  return (
    <Box borderRight="1px" height="100%" width="15%">
      <Flex
        height="20"
        alignItems="center"
        mx="4"
        cursor="pointer"
        onClick={() => navigate("scripts/all")}
      >
        <Image src={logo} marginRight={4} />
        <Text
          fontSize="xl"
          fontFamily="heading"
          fontWeight="bold"
          color="white"
        >
          {STRINGS.common.title}
        </Text>
      </Flex>
      <SelectItem />
      {LinkItems.map((listItem) => (
        <NavItem
          key={listItem.name}
          icon={listItem.icon}
          path={listItem.path}
          isExternalPath={listItem.isExternal}
        >
          {listItem.name}
        </NavItem>
      ))}
    </Box>
  );
};

export default SidebarContent;
