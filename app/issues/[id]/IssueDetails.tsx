import React from 'react'
import { Issue } from '@prisma/client'
import Markdown from 'react-markdown'
import { Flex, Heading, Text, Card } from '@radix-ui/themes'

const IssueDetails = ({issue} : {issue: Issue}) => {
  return (
    <>
      <Heading>{issue.title}</Heading>
      <Text>{issue.createdAt.toDateString()}</Text>
      <Card className="prose max-w-full" mt="4">
        <Markdown>{issue.description}</Markdown>
      </Card>
    </>
  );
}

export default IssueDetails