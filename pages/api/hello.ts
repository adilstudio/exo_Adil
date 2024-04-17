// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
  routes: {info: string, status: string, calculate: string, vehicle: string},
  pages: { infos: string, listes: string, vehicles: string };
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  res.status(200).json({ name: "adil boujibar",
  routes: {
    info: "/api/info",
    status: "/api/status",
    calculate: "/api/calculate",
    vehicle: "/api/vehicle/all"
  },
    pages: {
      infos: "/get_infos",
      listes: "/listes",
      vehicles: "/vehicles" }
  });
}
