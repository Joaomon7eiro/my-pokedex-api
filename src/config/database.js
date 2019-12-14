module.exports = {
  dialect: 'postgres',
  protocol: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'my-pokedex',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
  production: {
    use_env_variable: 'DATABASE_URL',
  },
};
