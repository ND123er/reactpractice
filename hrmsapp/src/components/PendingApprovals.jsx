import React, { useEffect, useState } from "react";
import api from "../api/axios";

const PendingApprovals = () => {
  const [approvals, setApprovals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [actionLoadingId, setActionLoadingId] = useState(null);

  const organisation_id = "HRMS000017"; // ✅ HARDCODED FOR LOCAL TESTING
  const approver_id = "TEST_EMPLOYEE";  // ✅ TEMPORARY FOR LOCAL TESTING

  // FETCH
  const fetchPendingApprovals = async () => {
    try {
      setLoading(true);

      const res = await api.get(
        `/leave/get_team_leave_list`,
        {
          params: { organisation_id },
        }
      );

      console.log("API RESPONSE:", res); // 🔥 DEBUG LOG

      const data = res?.data?.data || [];

      const pendingOnly = data.filter(
        (item) => item.status === "PENDING"
      );

      setApprovals(pendingOnly);
    } catch (err) {
      console.error("Error fetching approvals:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPendingApprovals();
  }, []);

  // APPROVE
  const handleApprove = async (id) => {
    try {
      setActionLoadingId(id);

      await api.put(`/leave/approve_leave/${id}`, {
        approver_id, // 🔥 hardcoded for now
      });

      fetchPendingApprovals();
    } catch (err) {
      console.error("Approve error:", err);
    } finally {
      setActionLoadingId(null);
    }
  };

  // REJECT
  const handleReject = async (id) => {
    try {
      setActionLoadingId(id);

      await api.put(`/leave/reject_leave/${id}`, {
        approver_id, // 🔥 hardcoded for now
      });

      fetchPendingApprovals();
    } catch (err) {
      console.error("Reject error:", err);
    } finally {
      setActionLoadingId(null);
    }
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200">

      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="text-lg font-semibold">
          Pending Leave Approvals
        </h2>
      </div>

      {/* Loading */}
      {loading && (
        <div className="p-4 text-sm text-gray-500">
          Loading...
        </div>
      )}

      {/* Empty */}
      {!loading && approvals.length === 0 && (
        <div className="p-4 text-sm text-gray-500">
          No pending approvals
        </div>
      )}

      {/* List */}
      <div className="max-h-[280px] overflow-y-auto">
        {approvals.map((item) => (
          <div
            key={item._id}
            className="flex items-center justify-between p-4 border-b"
          >

            {/* Left */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-600 text-white flex items-center justify-center rounded-lg">
                {item.employee_name?.slice(0, 2)}
              </div>

              <div>
                <p className="font-medium">
                  {item.employee_name}
                </p>
                <p className="text-xs text-gray-500">
                  Leave request: {item.total_days} day
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <button
                onClick={() => handleReject(item._id)}
                disabled={actionLoadingId === item._id}
                className="px-3 py-1 text-sm border border-red-300 bg-red-100 rounded"
              >
                Reject
              </button>

              <button
                onClick={() => handleApprove(item._id)}
                disabled={actionLoadingId === item._id}
                className="px-3 py-1 text-sm border border-green-300 bg-green-100 rounded"
              >
                Approve
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default PendingApprovals;