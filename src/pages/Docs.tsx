import { Accordion, Box, Heading } from "@chakra-ui/react";
import { Fragment } from "react/jsx-runtime";

import {
  AccordionItem,
  GitLabBody,
  OpenshiftBody,
  UsageBody,
} from "@components/docs";
import { STRINGS } from "@constants";
import MarkdownText from "@components/MarkdownText";

const Docs = () => {
  return (
    <Fragment key={STRINGS.pages.docsPage}>
      <Box marginLeft={8}>
        <Heading size="2xl" marginTop={8} marginBottom={5}>
          Docs
        </Heading>
        <MarkdownText fontSize="xl" fontWeight="bold">
          {STRINGS.docs.intro}
        </MarkdownText>
        <Accordion width="80%" mt={8} defaultIndex={[0, 1]} allowMultiple>
          <AccordionItem
            key={STRINGS.docs.howToStart.title}
            title={STRINGS.docs.howToStart.title}
            body={
              <Accordion allowMultiple>
                <AccordionItem
                  key={STRINGS.docs.howToStart.gitlab.title}
                  title={STRINGS.docs.howToStart.gitlab.title}
                  body={<GitLabBody />}
                ></AccordionItem>
                <AccordionItem
                  key={STRINGS.docs.howToStart.oc.title}
                  title={STRINGS.docs.howToStart.oc.title}
                  body={<OpenshiftBody />}
                ></AccordionItem>
              </Accordion>
            }
          />

          <AccordionItem
            key={STRINGS.docs.usage.title}
            title={STRINGS.docs.usage.title}
            body={<UsageBody />}
          />
        </Accordion>
      </Box>
    </Fragment>
  );
};

export default Docs;
