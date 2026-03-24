import ActivityItem from "./ActivityItem";
import { activityData } from "../data/mockData";

export default function ActivityList() {
  return (
    <div className="space-y-4">
      {activityData.map((item, index) => (
        <ActivityItem key={index} {...item} />
      ))}
    </div>
  );
}