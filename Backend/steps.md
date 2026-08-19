* Cloud Storage Provider => We will give file it provide URL for it
Ex. ImageKit.io, Cloudinary, amazon S3 
* Use .json() for raw data in POST API
* Use multer for form data in POST API => const upload = multer({storage: multer.memoryStorage()});
* Upload Buffer data of file on Imagekit.io
=> Imagekit Docs => Select Nodejs
*npm i dotenv for .env usage
For CORS use npm i cors => require cors in app.js const cors = require("cors") => then use it in app.js app.use(cors());