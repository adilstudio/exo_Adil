import { NextApiRequest, NextApiResponse } from 'next';
import * as packageJson from '../../package.json';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { name, description, version } = packageJson;
  try {
    res.status(200).json({
      message: 'Info retrieved successfully',
      content: { name, description, version },
      statusCode: 200
    });
  }
  catch (error) {
    console.error("An error has been raized :", error);
    res.status(500).json({ message: 'Internal Server Error', statusCode: 500 });
  }
};
