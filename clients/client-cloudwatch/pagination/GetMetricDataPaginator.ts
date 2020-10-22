import { CloudWatch } from "../CloudWatch";
import { CloudWatchClient } from "../CloudWatchClient";
import {
  GetMetricDataCommand,
  GetMetricDataCommandInput,
  GetMetricDataCommandOutput,
} from "../commands/GetMetricDataCommand";
import { CloudWatchPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: CloudWatchClient,
  input: GetMetricDataCommandInput,
  ...args: any
): Promise<GetMetricDataCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetMetricDataCommand(input, ...args));
};
const makePagedRequest = async (
  client: CloudWatch,
  input: GetMetricDataCommandInput,
  ...args: any
): Promise<GetMetricDataCommandOutput> => {
  // @ts-ignore
  return await client.getMetricData(input, ...args);
};
export async function* getMetricDataPaginate(
  config: CloudWatchPaginationConfiguration,
  input: GetMetricDataCommandInput,
  ...additionalArguments: any
): Paginator<GetMetricDataCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetMetricDataCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxDatapoints"] = config.pageSize;
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
