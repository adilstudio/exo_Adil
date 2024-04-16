import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  res.status(200).json({
    message: 'pong',
    statusCode: 200
  });
  }
  catch (error) {
      // Gérez les erreurs ici
      console.error('Une erreur est survenue :', error);
      res.status(500).json({ message: 'Internal Server Error', statusCode: 500 });
    }
};
