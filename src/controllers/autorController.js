import { autor } from "../models/Autor.js";

class AutorController {
  static async listar(req, res) {
    try {
      const lista = await autor.find({});
      res.status(200).json(lista);
    } catch (error) {
      res.status(500).json({
        message: `${error.message} - Falha na requisição`,
      });
    }
  }

  static async listarPorId(req, res) {
    try {
      const id = req.params.id;
      const autorEncontrado = await autor.findById(id);
      res.status(200).json(autorEncontrado);
    } catch (error) {
      res.status(500).json({
        message: `${error.message} - Falha na requisição do autor`,
      });
    }
  }

  static async cadastrar(req, res) {
    try {
      const novoAutor = await autor.create(req.body);
      res.status(201).json({
        message: "Criado com sucesso",
        autor: novoAutor,
      });
    } catch (erro) {
      res.status(500).json({
        message: `${erro.message} - Falha ao cadastrar autor`,
      });
    }
  }

  static async atualizar(req, res) {
    try {
      const id = req.params.id;
      await autor.findByIdAndUpdate(id, req.body);
      res.status(200).json({
        message: "Autor atualizado",
      });
    } catch (error) {
      res.status(500).json({
        message: `${error.message} - Falha na atualização`,
      });
    }
  }

  static async excluir(req, res) {
    try {
      const id = req.params.id;
      await autor.findByIdAndDelete(id);
      res.status(200).json({
        message: "Autor excluido com sucesso",
      });
    } catch (error) {
      res.status(500).json({
        message: `${error.message} - Falha na exclusão`,
      });
    }
  }
}

export default AutorController;
