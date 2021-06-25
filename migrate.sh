NODE_ENV=development sequelize db:migrate:undo:all
NODE_ENV=development sequelize db:migrate
NODE_ENV=development sequelize db:seed:all