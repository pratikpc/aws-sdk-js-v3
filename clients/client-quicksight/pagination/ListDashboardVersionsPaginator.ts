import { QuickSight } from "../QuickSight";
import { QuickSightClient } from "../QuickSightClient";
import {
  ListDashboardVersionsCommand,
  ListDashboardVersionsCommandInput,
  ListDashboardVersionsCommandOutput,
} from "../commands/ListDashboardVersionsCommand";
import { QuickSightPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: QuickSightClient,
  input: ListDashboardVersionsCommandInput,
  ...args: any
): Promise<ListDashboardVersionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDashboardVersionsCommand(input, ...args));
};
const makePagedRequest = async (
  client: QuickSight,
  input: ListDashboardVersionsCommandInput,
  ...args: any
): Promise<ListDashboardVersionsCommandOutput> => {
  // @ts-ignore
  return await client.listDashboardVersions(input, ...args);
};
export async function* listDashboardVersionsPaginate(
  config: QuickSightPaginationConfiguration,
  input: ListDashboardVersionsCommandInput,
  ...additionalArguments: any
): Paginator<ListDashboardVersionsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDashboardVersionsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof QuickSight) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof QuickSightClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected QuickSight | QuickSightClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
