import {
  Box,
  Heading,
  Tab,
  TabIndicator,
  TabList,
  Tabs,
} from "@chakra-ui/react";
import { Fragment } from "react/jsx-runtime";
import { Outlet, useNavigate } from "react-router-dom";

import { STRINGS } from "@constants";

import "./ScriptsLayoutStyle.css";

const ScriptsLayout = () => {
  const navigate = useNavigate();

  type Tab = {
    label: string;
    path: string;
  };

  const tabs: Tab[] = [
    { label: "scripts", path: "/scripts/all" },
    { label: "runs", path: "/scripts/runs" },
  ];

  const handleTabClicked = (index: number) => {
    navigate(tabs[index].path);
  };

  const getCurrentTab = (): number => {
    const path = window.location.pathname;
    return tabs.findIndex((tab) => tab.path === path);
  };

  return (
    <Fragment key={STRINGS.pages.scriptsLayout}>
      <Box marginLeft={8}>
        <Heading size="2xl" marginTop={4}>
          {STRINGS.scriptsTable.title}
        </Heading>
        <Tabs
          position="relative"
          marginTop={8}
          index={getCurrentTab()}
          onChange={handleTabClicked}
        >
          <TabList>
            {tabs.map((tab, index) => (
              <Tab key={index}>{tab.label}</Tab>
            ))}
          </TabList>
          <TabIndicator mt="-1.5px" height="2px" borderRadius="1px" />
        </Tabs>
        <Outlet />
      </Box>
    </Fragment>
  );
};

export default ScriptsLayout;
