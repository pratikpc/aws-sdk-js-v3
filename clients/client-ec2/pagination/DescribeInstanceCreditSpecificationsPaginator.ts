import { EC2 } from "../EC2";
import { EC2Client } from "../EC2Client";
import {
  DescribeInstanceCreditSpecificationsCommand,
  DescribeInstanceCreditSpecificationsCommandInput,
  DescribeInstanceCreditSpecificationsCommandOutput,
} from "../commands/DescribeInstanceCreditSpecificationsCommand";
import { EC2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: EC2Client,
  input: DescribeInstanceCreditSpecificationsCommandInput,
  ...args: any
): Promise<DescribeInstanceCreditSpecificationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeInstanceCreditSpecificationsCommand(input, ...args));
};
const makePagedRequest = async (
  client: EC2,
  input: DescribeInstanceCreditSpecificationsCommandInput,
  ...args: any
): Promise<DescribeInstanceCreditSpecificationsCommandOutput> => {
  // @ts-ignore
  return await client.describeInstanceCreditSpecifications(input, ...args);
};
export async function* describeInstanceCreditSpecificationsPaginate(
  config: EC2PaginationConfiguration,
  input: DescribeInstanceCreditSpecificationsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeInstanceCreditSpecificationsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeInstanceCreditSpecificationsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof EC2) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof EC2Client) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected EC2 | EC2Client");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
