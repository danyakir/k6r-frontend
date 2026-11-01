import { Box, Heading } from "@chakra-ui/react";
import { Fragment } from "react";
import { useSearchParams } from "react-router-dom";

import { STRINGS } from "@constants";

const MonitorScript = () => {
  const [queryParams] = useSearchParams();

  const name = queryParams.get("name");
  const id = queryParams.get("id");
  const startTime = queryParams.get("startTime");
  const endTime = queryParams.get("endTime") ?? "now";

  if (!id || !name || !startTime) {
    return (
      <Fragment key={STRINGS.pages.monitorScriptPage}>
        <Heading size="xl" marginLeft={4} marginTop={4} marginBottom={4}>
          {STRINGS.errors.invalidUrl}
        </Heading>
      </Fragment>
    );
  }

  const iframeUrl = `${
    import.meta.env.GRAFANA_BASE_URL ||
    `https://grafana.k6.example.com/d/your-dashboard-id/k6-prometheus`
  }?from=${startTime}&to=${endTime}&timezone=browser&var-DS_PROMETHEUS=your-prometheus-datasource&var-testid=${id}&refresh=5s`;

  return (
    <Fragment key={STRINGS.pages.monitorScriptPage}>
      <Heading size="xl" marginLeft={4} marginTop={4} marginBottom={4}>
        {name}
      </Heading>
      <Box
        as="iframe"
        src={iframeUrl}
        title="GrafanaIframe"
        width="95%"
        height={775}
      />
    </Fragment>
  );
};

export default MonitorScript;
