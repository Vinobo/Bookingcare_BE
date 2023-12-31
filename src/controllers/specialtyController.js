import specialtyService from "../services/specialtyService"

let createNewSpecialty = async (req, res) => {
  try {
    let infor = await specialtyService.createNewSpecialty(req.body);
    return res.status(200).json(
      infor
    )
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: `Error from the server`
    })
  }
}

let getAllSpecialties = async (req, res) => {
  try {
    let infor = await specialtyService.getAllSpecialties();
    return res.status(200).json(
      infor
    )
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: `Error from the server`
    })
  }
}

let getDetailSpecialtyById = async (req, res) => {
  try {
    let infor = await specialtyService.getDetailSpecialtyById(req.query.id, req.query.location);
    return res.status(200).json(
      infor
    )
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: `Error from the server`
    })
  }
}

let handleDeleteSpecialty = async (req, res) => {
  try {
    let infor = await specialtyService.handleDeleteSpecialty(req.query.id);
    return res.status(200).json(
      infor
    )
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: `Error from the server`
    })
  }
}

module.exports = {
  createNewSpecialty: createNewSpecialty,
  getAllSpecialties: getAllSpecialties,
  getDetailSpecialtyById: getDetailSpecialtyById,
  handleDeleteSpecialty: handleDeleteSpecialty
}