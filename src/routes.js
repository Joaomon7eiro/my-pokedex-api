import { Router } from 'express';

import authMiddleware from './app/middlewares/auth';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import PokemonController from './app/controllers/PokemonController';
import TypeController from './app/controllers/TypeController';
import MoveController from './app/controllers/MoveController';
import PokemonMoveController from './app/controllers/PokemonMoveController';
import PokemonTypeController from './app/controllers/PokemonTypeController';
import UserPokemonController from './app/controllers/UserPokemonController';

const routes = Router();

routes.post('/sessions', SessionController.create);
routes.post('/users', UserController.create);

routes.use(authMiddleware);

routes.post('/pokemons', PokemonController.create);
routes.get('/pokemons', PokemonController.index);
routes.get('/pokemons/:id', PokemonController.show);

routes.post('/types', TypeController.create);
routes.post('/moves', MoveController.create);
routes.post('/pokemons/:id/moves', PokemonMoveController.create);
routes.post('/pokemons/:id/types', PokemonTypeController.create);

routes.post('/users/:id/pokemons', UserPokemonController.create);

export default routes;
