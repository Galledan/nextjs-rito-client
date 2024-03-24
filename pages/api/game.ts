import { NextApiRequest, NextApiResponse } from "next";
import { without } from "lodash";

import prismadb from '@/libs/prismadb';
import serverAuth from "@/libs/serverAuth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'POST') {
      const { currentUser } = await serverAuth(req, res);

      const { gameId } = req.body;

      const existingGame = await prismadb.game.findUnique({
        where: {
          id: gameId,
        }
      });

      if (!existingGame) {
        throw new Error('Invalid ID');
      }

      const user = await prismadb.user.update({
        where: {
          name: currentUser.name || '',
        },
        data: {
          games: {
            push: gameId
          }
        }
      });

      return res.status(200).json(user);
    }

    if (req.method === 'DELETE') {
      const { currentUser } = await serverAuth(req, res);

      const { gameId } = req.body;

      const existingGame = await prismadb.game.findUnique({
        where: {
          id: gameId,
        }
      });

      if (!existingGame) {
        throw new Error('Invalid ID');
      }

      const updatedFavoriteIds = without(currentUser.games, gameId);

      const updatedUser = await prismadb.user.update({
        where: {
          name: currentUser.name || '',
        },
        data: {
          games: updatedFavoriteIds,
        }
      });

      return res.status(200).json(updatedUser);
    }

    return res.status(405).end();
  } catch (error) {
    console.log(error);

    return res.status(500).end();
  }
}