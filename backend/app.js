const express = require('express');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express();
require('dotenv').config();

const corsOptions = {
  origin: "http://localhost:3001",
  optionsSuccessStatus: 200,
  credentials: true,
};
app.use(cors(corsOptions));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Servir arquivos estáticos do diretório 'uploads'

// rotas app adm
const clientesRouter = require('./routes/interface-adm/clientes');
const LinhasRouter = require('./routes/interface-adm/linhas');
const UsuariosRouter = require('./routes/interface-adm/usuarios');
const MotoristasRouter = require('./routes/interface-adm/motoristas');
const OnibusRouter = require('./routes/interface-adm/onibus');
const authRouter = require("./routes/interface-adm/auth");
const adminRouter = require("./routes/interface-adm/admin");
const ScanRouter = require("./routes/interface-scan/scan");
const IndexRouter = require("./routes/interface-adm/index");

app.use('/clientes', clientesRouter);
app.use('/linhas', LinhasRouter);
app.use('/usuarios', UsuariosRouter);
app.use('/motoristas', MotoristasRouter);
app.use('/onibus', OnibusRouter);
app.use('/auth', authRouter);
app.use('/admin', adminRouter);
app.use('/scan', ScanRouter);
app.use('/index', IndexRouter);

module.exports = app; // Certifique-se de exportar a instância do aplicativo Express