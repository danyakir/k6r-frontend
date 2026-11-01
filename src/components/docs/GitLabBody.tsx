import { Box, List, ListIcon, ListItem } from "@chakra-ui/react";
import { IoSettingsOutline } from "react-icons/io5";

import MarkdownText from "@components/MarkdownText";
import { STRINGS } from "@constants";
import {
  GitLabTokenStep1,
  GitLabTokenStep2,
  GitLabTokenStep3,
  GitLabTokenStep4,
  GitLabUrl,
} from "@images";

import Steps from "./Steps";

const GitLabBody = () => {
  const tokenSteps = [
    STRINGS.docs.howToStart.gitlab.token.step1,
    STRINGS.docs.howToStart.gitlab.token.step2,
    STRINGS.docs.howToStart.gitlab.token.step3,
    STRINGS.docs.howToStart.gitlab.token.step4,
  ];

  const tokenImages = [
    GitLabTokenStep1,
    GitLabTokenStep2,
    GitLabTokenStep3,
    GitLabTokenStep4,
  ];

  return (
    <>
      <List spacing={5}>
        <ListItem display="flex" key="url">
          <ListIcon as={IoSettingsOutline} marginTop={1} />
          {
            <Box>
              <MarkdownText fontSize="large">
                {STRINGS.docs.howToStart.gitlab.url}
              </MarkdownText>
              <Steps marginLeft={2} steps={[]} images={[GitLabUrl]}></Steps>
            </Box>
          }
        </ListItem>
        <ListItem display="flex" key="token">
          <ListIcon as={IoSettingsOutline} marginTop={1} />
          {
            <Box>
              <MarkdownText fontSize="large">
                {STRINGS.docs.howToStart.gitlab.token.description}
              </MarkdownText>
              <Steps
                marginLeft={2}
                steps={tokenSteps}
                images={tokenImages}
              ></Steps>
            </Box>
          }
        </ListItem>
        <ListItem display="flex" key="scriptsRoute">
          <ListIcon as={IoSettingsOutline} marginTop={1} />
          {
            <Box>
              <MarkdownText fontSize="large">
                {STRINGS.docs.howToStart.gitlab.scriptsRoute}
              </MarkdownText>
            </Box>
          }
        </ListItem>
        <ListItem display="flex">
          <ListIcon as={IoSettingsOutline} marginTop={1} />
          {
            <Box>
              <MarkdownText fontSize="large">
                {STRINGS.docs.howToStart.gitlab.branchName}
              </MarkdownText>
            </Box>
          }
        </ListItem>
      </List>
    </>
  );
};

export default GitLabBody;
