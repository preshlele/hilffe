
import prisma from "@/prisma/client";
import { Box } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import React, { cache } from "react";
import IssueDetails from "./IssueDetails";
import DeleteIssueButton from "./DeleteIssueButton";

interface Props {
  params: { id: string };
}

const fetchUser = cache((issueId: number) =>
  prisma.issue.findUnique({ where: { id: issueId } })
);

const page = async ({ params }: Props) => {
  const issue = await fetchUser(parseInt(params.id));

  if (!issue) notFound();
  return (
    <div className="relative lg:px-[24rem]">
    <Box className="md:col-span-4">
      <IssueDetails issue={issue} />
    </Box>
    <Box className="absolute right-[24rem]">
      <DeleteIssueButton issueId={issue.id} />
    </Box>
    </div>
    
  );
};

export async function generateMetadata({ params }: Props) {
  const issue = await fetchUser(parseInt(params.id));

  return {
    title: issue?.title,
    description: "Details of issue " + issue?.id,
  };
}

export default page;
