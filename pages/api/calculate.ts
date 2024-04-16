import { NextApiRequest, NextApiResponse } from 'next';

interface CalculateRequestBody {
  a: number | string;
  b: number | string;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Vérifiez que la méthode de la requête est POST
    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Method Not Allowed', statusCode: 405 });
    }

    // Vérifiez le type de contenu de la requête
    const contentType = req.headers['content-type'];
    if (!contentType || (!contentType.includes('application/json') && !contentType.includes('application/x-www-form-urlencoded'))) {
      return res.status(415).json({ message: 'Unsupported Media Type', statusCode: 415 });
    }

    const body: CalculateRequestBody = req.body;
    const { a, b } = body;

    // vérification des données envoyées
    if (!isValidInput(a) || !isValidInput(b)) {
      return res.status(400).json({ message: 'Invalid input data', statusCode: 400 });
    }

    //calcul du résultat
    const result = Math.sqrt(Number(a)) / Number(b);

    // Envoyez la réponse avec le résultat
    res.status(200).json({ message: `Result: ${result}`, statusCode: 200 });
  } catch (error) {
    // Gstion des erreurs
    console.error('Une erreur est survenue :', error);
    res.status(500).json({ message: 'Internal Server Error', statusCode: 500 });
  }
};

// Fonction de validation des données d'entrée
const isValidInput = (value: any): boolean => {
  if (typeof value === 'number') {
    return !isNaN(value) && isFinite(value);
  } else if (typeof value === 'string') {
    // Vérifiez si la chaîne est un nombre valide
    if (!isNaN(Number(value))) {
      // Vérifiez si la chaîne contient uniquement des chiffres
      return /^\d+$/.test(value);
    }
    return false;
  }
  return false;
};
