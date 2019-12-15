import { Router } from 'express';

import PokemonController from './app/controllers/PokemonController';
import TypeController from './app/controllers/TypeController';
import MoveController from './app/controllers/MoveController';
import PokemonMoveController from './app/controllers/PokemonMoveController';
import PokemonTypeController from './app/controllers/PokemonTypeController';

const routes = Router();

routes.post('/pokemons', PokemonController.create);
routes.get('/pokemons', PokemonController.index);
routes.get('/pokemons/:id', PokemonController.show);

routes.post('/types', TypeController.create);
routes.post('/moves', MoveController.create);
routes.post('/pokemons/:id/moves', PokemonMoveController.create);
routes.post('/pokemons/:id/types', PokemonTypeController.create);

export default routes;
