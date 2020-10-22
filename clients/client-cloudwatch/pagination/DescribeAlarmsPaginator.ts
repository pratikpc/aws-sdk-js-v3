import { CloudWatch } from "../CloudWatch";
import { CloudWatchClient } from "../CloudWatchClient";
import {
  DescribeAlarmsCommand,
  DescribeAlarmsCommandInput,
  DescribeAlarmsCommandOutput,
} from "../commands/DescribeAlarmsCommand";
import { CloudWatchPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: CloudWatchClient,
  input: DescribeAlarmsCommandInput,
  ...args: any
): Promise<DescribeAlarmsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeAlarmsCommand(input, ...args));
};
const makePagedRequest = async (
  client: CloudWatch,
  input: DescribeAlarmsCommandInput,
  ...args: any
): Promise<DescribeAlarmsCommandOutput> => {
  // @ts-ignore
  return await client.describeAlarms(input, ...args);
};
export async function* describeAlarmsPaginate(
  config: CloudWatchPaginationConfiguration,
  input: DescribeAlarmsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeAlarmsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeAlarmsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof CloudWatch) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CloudWatchClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CloudWatch | CloudWatchClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
