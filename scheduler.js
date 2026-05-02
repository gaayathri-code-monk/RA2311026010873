// Priority Inbox Implementation
// Uses weighted scoring (Type priority + Recency)
// Time Complexity: O(n log n)
const TYPE_WEIGHT = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

function getPriorityScore(notification) {
  const weight = TYPE_WEIGHT[notification.Type] || 0;
  const time = new Date(notification.Timestamp).getTime();
  return weight * 1000000000 + time;
}

function getTopNotifications() {

  const notifications = [
    { Type: "Placement", Message: "Amazon offer", Timestamp: "2026-05-02T10:00:00Z" },
    { Type: "Event", Message: "Hackathon", Timestamp: "2026-05-01T09:00:00Z" },
    { Type: "Result", Message: "Midterm result", Timestamp: "2026-05-02T08:00:00Z" },
    { Type: "Placement", Message: "Google shortlist", Timestamp: "2026-05-02T11:00:00Z" },
    { Type: "Event", Message: "Workshop", Timestamp: "2026-04-30T12:00:00Z" },
    { Type: "Result", Message: "Assignment graded", Timestamp: "2026-05-01T15:00:00Z" },
  ];

  const sorted = notifications.sort(
    (a, b) => getPriorityScore(b) - getPriorityScore(a)
  );

  const top10 = sorted.slice(0, 10);

  console.log(" TOP PRIORITY NOTIFICATIONS:\n");

  top10.forEach((n, i) => {
  console.log(
  `${i + 1}. Type: ${n.Type} | Message: ${n.Message} | Time: ${n.Timestamp}`
);
  });
}

getTopNotifications();