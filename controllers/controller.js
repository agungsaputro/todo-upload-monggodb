const UploadModel = require('../models/upload');
class UploadController {
  static async photoUpload(req, res) {
    const { params, file, body } = req;
    // const photo = req.file.filename;
    const user = new UploadModel({ title: body.nama, photo: file.filename });
    await user.save()
    // await UserModel.update({ photo }, { where: { id: req.body.userId } });
    // res.redirect("/users");
    res.json({ params, file, nama: body.nama });
  }
}

module.exports = UploadController;
