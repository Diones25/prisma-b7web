import { Request, Response } from "express";

/*
{
  fieldname: 'photo',
  originalname: 'Captura de tela 2023-06-27 140226.png',
  encoding: '7bit',
  mimetype: 'image/png',
  destination: 'uploads/',
  filename: 'e3e723c60fa2208df852bc99fc519e43',
  path: 'uploads\\e3e723c60fa2208df852bc99fc519e43',
  size: 31453
}
*/

const uploadFile = (req: Request, res: Response) => {
  //const { photo } = req.file;
  
  if (!req.file || (req.file && !req.file.mimetype.includes('image'))) {
    return res.status(400).json({ error: 'Nenhuma imagem recebida' })
  }

  return res.status(201).json({ file: req.file.filename });
}

export default {
  uploadFile
}