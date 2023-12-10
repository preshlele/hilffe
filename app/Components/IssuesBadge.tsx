"use client"

import React from "react";
import { Badge, Flex } from "@radix-ui/themes";
import useStore from "../store";

type BadgeData = {
  color: string;
  children: string;
  value?: number;
};

type IssuesBadgeProps = {
  badgesData: BadgeData[];
};

const generateBadges = (badgeData : BadgeData[]) => {
  return badgeData.map(({ color, children, value }, index) => (
    <Badge key={index} className="flex flex-col gap-5 w-[9rem] h-[5rem]" color="green">
      <p className="pt-4">{children}</p>
      {value !== undefined && <span className="text-lg">{value}</span>}
    </Badge>
  ));
};

const IssuesBadge = () => {

  const {issues} = useStore();

  //Count the total number of open issues
  const totalIssues = issues.length

  const badgesData = [
    { color: "orange", children: "Open Issues", value: totalIssues },
    { color: "blue", children: "In-progress Issues", value: 0 },
    { color: "green", children: "Closed Issues" , value: 0},
  ];

  return (
    <div>
      <Flex gap="4">{generateBadges(badgesData)}</Flex>
    </div>
  );
};

export default IssuesBadge;
