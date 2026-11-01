import { List, Box, ListItem, ListIcon } from "@chakra-ui/react";
import { IoSettingsOutline } from "react-icons/io5";

import MarkdownText from "@components/MarkdownText";
import { STRINGS } from "@constants";
import {
  OcTokenStep1,
  OcTokenStep2,
  OcTokenStep3,
  OcTokenStep4,
  OcTokenStep5,
  OcTokenStep6,
} from "@images";

import Steps from "./Steps";

const OpenshiftBody = () => {
  const tokenSteps = [
    STRINGS.docs.howToStart.oc.token.step1,
    STRINGS.docs.howToStart.oc.token.step2,
    STRINGS.docs.howToStart.oc.token.step3,
    STRINGS.docs.howToStart.oc.token.step4,
    STRINGS.docs.howToStart.oc.token.step5,
    STRINGS.docs.howToStart.oc.token.step6,
    STRINGS.docs.howToStart.oc.token.step7,
    STRINGS.docs.howToStart.oc.token.step8,
    STRINGS.docs.howToStart.oc.token.step9,
    STRINGS.docs.howToStart.oc.token.step10,
  ];
  const tokenImages = [
    OcTokenStep1,
    OcTokenStep2,
    OcTokenStep3,
    OcTokenStep4,
    OcTokenStep5,
    OcTokenStep6,
  ];

  return (
    <>
      <List spacing={5}>
        <ListItem display="flex" key="url">
          <ListIcon as={IoSettingsOutline} marginTop={1} />
          {
            <Box>
              <MarkdownText fontSize="large">
                {STRINGS.docs.howToStart.oc.url}
              </MarkdownText>
            </Box>
          }
        </ListItem>
        <ListItem display="flex" key="token">
          <ListIcon as={IoSettingsOutline} marginTop={1} />
          {
            <Box>
              <MarkdownText fontSize="large">
                {STRINGS.docs.howToStart.oc.token.description}
              </MarkdownText>
              <Steps
                marginLeft={2}
                steps={tokenSteps}
                images={tokenImages}
              ></Steps>
            </Box>
          }
        </ListItem>
        <ListItem display="flex" key="namespace">
          <ListIcon as={IoSettingsOutline} marginTop={1} />
          {
            <Box>
              <MarkdownText fontSize="large">
                {STRINGS.docs.howToStart.oc.namespace}
              </MarkdownText>
            </Box>
          }
        </ListItem>
        <ListItem display="flex" key="prometheusUrl">
          <ListIcon as={IoSettingsOutline} marginTop={1} />
          {
            <Box>
              <MarkdownText fontSize="large">
                {STRINGS.docs.howToStart.oc.prometheusUrl}
              </MarkdownText>
            </Box>
          }
        </ListItem>
        <ListItem display="flex" key="envioremntParams">
          <ListIcon as={IoSettingsOutline} marginTop={1} />
          {
            <Box>
              <MarkdownText fontSize="large">
                {STRINGS.docs.howToStart.oc.envioremntParams}
              </MarkdownText>
            </Box>
          }
        </ListItem>
      </List>
    </>
  );
};

export default OpenshiftBody;
