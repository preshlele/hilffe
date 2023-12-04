"use client";
import { Card, Flex, Heading, Table } from "@radix-ui/themes";
import React from "react";
import useStore from "../store";

const LatestIssues = () => {
  const { issues } = useStore();



  return (
    <Card>
      <Heading size="4" mb="5">
        Latest Issues
      </Heading>
      <Table.Root>
        <Table.Body>
          {issues.slice(4).map((issue, index) => (
            <Table.Row key={index}>
              <Table.Cell>{issue.title}</Table.Cell>
              <Table.Cell>
                {new Date(issue.createdAt).toDateString()}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Card>
  );
};

export default LatestIssues;
