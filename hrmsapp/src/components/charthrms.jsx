import React, { useEffect, useState, useMemo } from "react";
import {
  Box,
  Flex,
  Text,
  useColorModeValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Heading,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { ChevronDownIcon } from "@chakra-ui/icons";
import api from "../../api/axios";
import { useSelector } from "react-redux";
import { getOrgIdFromReduxOrStorage } from "../../utils/token";

/**
 * Props:
 *  - orgId (string) optional, default "HRMS000017"
 */
const FILTERS = {
  LAST_WEEK: "last_week",
  THIS_WEEK: "this_week",
  LAST_MONTH: "last_month",
  THIS_MONTH: "this_month",
  LAST_YEAR: "last_year",
  THIS_YEAR: "this_year",
};

const DISPLAY_LABELS = {
  [FILTERS.LAST_WEEK]: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  [FILTERS.THIS_WEEK]: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],

  [FILTERS.LAST_MONTH]: ["Week-1", "Week-2", "Week-3", "Week-4"],
  [FILTERS.THIS_MONTH]: ["Week-1", "Week-2", "Week-3", "Week-4"],

  [FILTERS.LAST_YEAR]: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  [FILTERS.THIS_YEAR]: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
};

// Custom Tooltip
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const p = payload[0];
    return (
      <Box
        bg="white"
        border="1px solid"
        borderColor="gray.200"
        px={3}
        py={2}
        rounded="md"
        shadow="md"
      >
        <Text fontWeight="bold" fontSize="lg">
          {p.value}
        </Text>
        <Text fontSize="xs" color="gray.500">
          {p.payload?.label || label}
        </Text>
      </Box>
    );
  }
  return null;
};

export default function EmployeeStrengthChart() {
  const toast = useToast();
  const bg = useColorModeValue("white", "#000");
  const textClr = useColorModeValue("black", "white");
  const { user, token } = useSelector((state) => state.auth);
  const [filter, setFilter] = useState(FILTERS.THIS_MONTH);
  const [rawApiData, setRawApiData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    async function fetchData() {
      setLoading(true);
      setError(null);

      try {
        const orgId = getOrgIdFromReduxOrStorage(user);
        if (!orgId) {
          throw new Error("Organization not found");
        }

        const res = await api.get("/employee/employee_headcount_graph", {
          params: { org_id: orgId, filter },
          signal: controller.signal,
        });

        const json = res.data;
        if (json?.success && Array.isArray(json.data)) {
          setRawApiData(json.data);
        } else {
          throw new Error(json?.message || "Invalid API response");
        }
      } catch (err) {
        const isCanceled =
          err?.code === "ERR_CANCELED" ||
          err?.name === "AbortError" ||
          err?.name === "CanceledError";
        if (!isCanceled) {
          setError(err.message || String(err));
          setRawApiData([]);
          toast({
            title: "Failed to load chart",
            description: err.message || String(err),
            status: "error",
            duration: 4000,
            isClosable: true,
          });
        }
      } finally {
        setLoading(false);
      }
    }

    fetchData();
    return () => controller.abort();
  }, [filter, user]);

  // Normalize data
  const chartData = useMemo(() => {
    const desired = DISPLAY_LABELS[filter] || [];
    const apiMap = new Map();

    rawApiData.forEach((d) => {
      const raw = d.label?.trim();
      apiMap.set(raw, Number(d.headcount || 0));
      apiMap.set(raw?.replace(/\s+/g, "-"), Number(d.headcount || 0));
    });

    return desired.map((lbl) => {
      if (apiMap.has(lbl)) return { label: lbl, headcount: apiMap.get(lbl) };
      if (apiMap.has(lbl.replace("-", " ")))
        return { label: lbl, headcount: apiMap.get(lbl.replace("-", " ")) };
      return { label: lbl, headcount: 0 };
    });
  }, [rawApiData, filter]);

  // Y-axis ticks (gap = 50)
  const yTicks = useMemo(() => {
    const maxVal = Math.max(...chartData.map((d) => d.headcount), 0);
    const top = Math.max(100, Math.ceil(maxVal / 50) * 50);

    return Array.from({ length: top / 50 + 1 }, (_, i) => i * 50).filter(
      (tick) => tick !== 0,
    );
  }, [chartData]);


  const totalHeadcount = useMemo(() => {
    if (!rawApiData.length) return 0;
    return rawApiData[rawApiData.length - 1].headcount || 0;
  }, [rawApiData]);

  const filterLabel = {
    last_week: "Last Week",
    this_week: "This Week",
    last_month: "Last Month",
    this_month: "This Month",
    last_year: "Last Year",
    this_year: "This Year",
  }[filter];

  return (
    <Box
      borderRadius="14px"
      bg={bg}
      border="1px solid #cccccc"
      pt={6}
      pb={8}
      // w={{ base: "100%", lg: "43.1vw" }}
      w={{ base: "100%", lg: "41.36vw" }}
      mt={2}
      mb={3}
      minH="400px"
    >
      <Flex justify="space-between" pr={4}>
        <Heading
          size="md"
          color={textClr}
          fontWeight={600}
          letterSpacing="-3%"
          fontFamily="'Poppins', sans-serif"
          // pb={3}
          pl={4}
        >
          Employee Headcount
        </Heading>

        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon />}
            size="sm"
            variant="outline"
          >
            {filterLabel}
          </MenuButton>

          <MenuList>
            <MenuItem onClick={() => setFilter(FILTERS.THIS_WEEK)}>
              This Week
            </MenuItem>
            <MenuItem onClick={() => setFilter(FILTERS.LAST_WEEK)}>
              Last Week
            </MenuItem>
            <MenuItem onClick={() => setFilter(FILTERS.THIS_MONTH)}>
              This Month
            </MenuItem>
            <MenuItem onClick={() => setFilter(FILTERS.LAST_MONTH)}>
              Last Month
            </MenuItem>
            <MenuItem onClick={() => setFilter(FILTERS.THIS_YEAR)}>
              This Year
            </MenuItem>
            <MenuItem onClick={() => setFilter(FILTERS.LAST_YEAR)}>
              Last Year
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>

      <Box
        w="100%"
        h="1px"
        bgImage="repeating-linear-gradient(to right,#C7C7C7 0 6px,transparent 6px 14px)"
        my={4}
      />

      <Box pl={4} mb={3}>
        <Text fontSize="3xl" fontWeight="bold">
          {loading ? <Spinner size="sm" /> : totalHeadcount}
        </Text>
        <Text fontSize="sm" color="#2c466b">
          {filterLabel}
        </Text>
      </Box>

      <Box h="220px" px={4}>
        {error ? (
          <Flex h="100%" align="center" justify="center">
            {/* <Text color="red.500">{error}</Text> */}
            <Text color="gray.600">{error}</Text>
          </Flex>
        ) : (
          <>
            {/* Focus outline remove karne ke liye */}
            <style>
              {`
      .recharts-wrapper:focus,
      .recharts-surface:focus,
      .recharts-wrapper:focus-visible,
      .recharts-surface:focus-visible {
        outline: none !important;
      }
    `}
            </style>
            <ResponsiveContainer>
              <AreaChart data={chartData}  >
                <defs>
                  <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1A73E8" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="#1A73E8" stopOpacity={0.05} />
                  </linearGradient>
                </defs>

                <CartesianGrid strokeDasharray="4 4" stroke="#E6E9EF" />
                <XAxis dataKey="label" axisLine={false} tickLine={false} />
                <YAxis
                  ticks={yTicks}
                  domain={[0, Math.max(...yTicks)]}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip content={<CustomTooltip />} />

                <Area
                  type="monotone"
                  dataKey="headcount"
                  stroke="#2c466b"
                  fill="url(#areaFill)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>

          </>)}
      </Box>
    </Box>
  );
}
