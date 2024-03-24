import { NextApiRequest, NextApiResponse } from "next";

import prismadb from '@/libs/prismadb';
import serverAuth from "@/libs/serverAuth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'GET') {
      return res.status(405).end();
    }

    const { currentUser } = await serverAuth(req, res);

    const downloadedGames = await prismadb.game.findMany({
      where: {
        id: {
          in: currentUser?.games,
        }
      }
    });

    return res.status(200).json(downloadedGames);
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
}