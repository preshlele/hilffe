"use client";

import { Button, Text } from "@radix-ui/themes";
import Link from "next/link";
import React, { useEffect } from "react";
import useStore from "../store";



const IssuePage = () => {
const {issues, setIssues} = useStore() // using zustand to store the issues

  const fetchIssues = async () => {
    try {
      const response = await fetch("/api/issues");
      const data = await response.json(); 
      setIssues(data);
    } catch (error) {
      console.error("Error fetching issues:", error);
    }
  };

  useEffect(() => {
    fetchIssues();
  }, []);

  return (
    <div>
      <Text as="label" size="5" className="font-bold">All Issues</Text>
      <ul>
        {issues.map((issue) => (
          <li className="cursor-pointer hover:text-red-500" key={issue.id}><Link href={`/issues/${issue.id}`}>{issue.title}</Link></li>
        ))}
      </ul>
      <Button>
        <Link href="/issues/new">New Issues</Link>
      </Button>
    </div>
  );
};

export default IssuePage;
