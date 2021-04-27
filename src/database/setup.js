// SJÄLVFÖRKLARANDE KOD

const db = require("../database/connection")
require("../models/fakeModels")
require("../models/userModels")

db.sync()