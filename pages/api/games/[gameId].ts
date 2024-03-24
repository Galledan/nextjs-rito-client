import { NextApiRequest, NextApiResponse } from "next";
import prismadb from '@/libs/prismadb';
import serverAuth from "@/libs/serverAuth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'GET') {
      return res.status(405).end();
    }

    await serverAuth(req, res);

    const { gameId } = req.query;

    if (typeof gameId !== 'string') {
      throw new Error('Invalid Id');
    }

    if (!gameId) {
      throw new Error('Missing Id');
    }

    const games = await prismadb.game.findUnique({
      where: {
        id: gameId
      }
    });

    if(!games) {
       throw new Error('Invalid ID')
    }

    return res.status(200).json(games);
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
}