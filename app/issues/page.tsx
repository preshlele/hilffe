"use client";

import { Button, Text } from "@radix-ui/themes";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";

type Issue ={
  id: number;
  title: string;
}

const IssuePage = () => {
  const [issues, setIssues] = useState<Issue[]>([]);
  const fetchIssues = async () => {
    try {
      const response = await axios.get("/api/issues");
      // console.log(response.data);
      setIssues(response.data);
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
          <li key={issue.id}>{issue.title}</li>
        ))}
      </ul>
      <Button>
        <Link href="/issues/new">New Issues</Link>
      </Button>
    </div>
  );
};

export default IssuePage;
