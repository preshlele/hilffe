import { cache } from "react";
import { IssueChart } from "./Components/IssueChart";
import IssuesBadge from "./Components/IssuesBadge";
import LatestIssues from "./Components/LatestIssues";

export default async function Home() {
  return (
    <div className="flex mx-24">
      <div className="mx-8">
        <div className="flex flex-col">
          <IssuesBadge />
          <div className=" mt-4 border rounded-md  h-[24rem] w-[38rem] ">
            <IssueChart />
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="flex-1">
        <LatestIssues />
      </div>
    </div>
  );
}
